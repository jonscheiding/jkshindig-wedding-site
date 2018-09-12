export function getImage(name, type) {
  let filename = name;
  if(Array.isArray(filename)) {
    filename = filename.join('.');
  }
  filename = filename.replace(/[^a-zA-Z.]*/g, '');
  const image = require(`./images/${type ? type + '/' : '' }${filename}.png`);
  console.log(image);

  return require(`./images/${type ? type + '/' : '' }${filename}.png`);
}