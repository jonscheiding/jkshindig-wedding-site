import * as contentful from 'contentful';

export default async () => {
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });

  const response = await client.getEntry('6PhuHKLY7CsCmQ6qi8w2Ia');
  const content = extractContent(response);

  return content;
};

function extractContent(entry) {
  if(typeof(entry) !== 'object') {
    return entry;
  }
  
  const content = {};
  for(const key of Object.keys(entry.fields)) {
    if(Array.isArray(entry.fields[key])) {
      content[key] = entry.fields[key].map(extractContent);
      continue;
    }
    if(typeof(entry.fields[key]) === 'object' && 'sys' in entry.fields[key]) {
      content[key] = extractContent(entry.fields[key]);
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