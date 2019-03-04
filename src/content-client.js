import * as contentful from 'contentful';
import format from 'string-format';

export class ContentClient {
  constructor() {
    this.client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN     
    });

    this.cachedContent = null;

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
      weddingEvent: o => ({
        ...this.map.default(o),
        date: new Date(Date.parse(o.fields.date))
      }),
      weddingEvent: o => ({
        ...this.map.default(o),
        date: new Date(Date.parse(o.fields.date))
      }),
      qa: o =>
        this.contentTypes.qa.fields
          .filter(f => f.id.startsWith('question'))
          .map(f => ({
            question: format(f.name, {spouse: o.fields.spouse.fields.nickname}),
            answer: o.fields[f.id]
          }))
    };
  }

  async fetchContent(allowCached = true) {
    if(allowCached && this.cachedContent !== null) {
      return Promise.resolve(this.cachedContent);
    }

    this.contentTypes.qa = await this.client.getContentType('qa');
    const content = await this.client.getEntries({ content_type: 'wedding', include: 10 })
      .then(r => r.items[0]);

    this.cachedContent = this.mapContent(content);
    return this.cachedContent;
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
