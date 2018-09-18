export function getConfigured(arr, config, selector) {
  if(!config) {
    return [];
  }

  if(config === '*') {
    return arr;
  }

  const configArray = config.split(',');
  if(!selector) {
    selector = item => item;
  }
  return arr.filter(item => configArray.indexOf(selector(item)) >= 0);
}
