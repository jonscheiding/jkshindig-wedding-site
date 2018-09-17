import * as contentful from 'contentful';

export class ContentClient {
  constructor() {
    this.client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN     
    });

    this.contentTypes = {};

    this.map = {
      default: o => {
        if(typeof(o) !== 'object') {
          return o;
        }
        if(o.sys.type === 'Asset') {
          return o.fields.file.url;
        }

        const content = {};
        for(const key of Object.keys(o.fields)) {
          content[key] = this.mapContent(o.fields[key]);
        }
        return content;
      },
      wedding: o => ({
        ...this.map.default(o),
        date: new Date(Date.parse(o.fields.date))
      }),
      qa: o =>
        this.contentTypes.qa.fields
          .filter(f => f.id.startsWith('question'))
          .map(f => ({
            question: f.name.replace('{spouse}', o.fields.spouse.fields.nickname),
            answer: o.fields[f.id]
          }))
    };
  }

  async fetchContent() {
    this.contentTypes.qa = await this.client.getContentType('qa');
    const content = await this.client.getEntries({ content_type: 'wedding', include: 10 })
      .then(r => r.items[0]);

    const result = this.mapContent(content);
    console.log(result);
    return result;
  }

  mapContent(entry) {
    if(typeof(entry) !== 'object') {
      return entry;
    }
    if(Array.isArray(entry)) {
      return entry.map(e => this.mapContent(e));
    }

    if(entry.sys.type === 'Asset') {
      return entry.fields.file.url;
    }

    const map = this.map[entry.sys.contentType.sys.id] || this.map.default;
    return map(entry);
  }
}

export default async () => {
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });

  const [ content, qaContentType ] = await Promise.all([
    client.getEntries({ content_type: 'wedding', include: 10 }).then(r => r.items[0]),
    client.getContentType('qa')
  ]);

  mapContent.contentTypes = {qa: qaContentType};

  return mapContent(content);
};

const mappers = {
  qa: o =>
    mapContent.contentTypes.qa.fields
      .filter(f => f.id.startsWith('question'))
      .map(f => ({
        question: f.name.replace('{spouse}', o.fields.spouse.fields.nickname),
        answer: o.fields[f.id]
      }))
};

function mapContent(entry) {
  if(typeof(entry) !== 'object') {
    return entry;
  }

  const content = {};
  for(const key of Object.keys(entry.fields)) {
    if(Array.isArray(entry.fields[key])) {
      content[key] = entry.fields[key].map(mapContent);
      continue;
    }
    if(typeof(entry.fields[key]) === 'object' && 'sys' in entry.fields[key]) {
      if(entry.fields[key].sys.type === 'Asset') {
        content[key] = entry.fields[key].fields.file.url;
        continue;
      }
      const map = mappers[entry.fields[key].sys.contentType.sys.id] || mapContent;
      content[key] = map(entry.fields[key]);
      continue;
    }
    if(key === 'date') {
      content[key] = new Date(Date.parse(entry.fields[key]));
      continue;
    }
    content[key] = entry.fields[key];
  }
  return content;
}