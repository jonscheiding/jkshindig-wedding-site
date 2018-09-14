export function getImage(name, type) {
  let filename = name;
  if(Array.isArray(filename)) {
    filename = filename.join('.');
  }
  filename = filename.replace(/[^a-zA-Z.]*/g, '');
  return require(`./images/${type ? type + '/' : '' }${filename}.png`);
}