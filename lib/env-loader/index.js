module.exports = function () {
  this.cacheable();

  const query = this.query.slice(1);

  if(!(query in process.env)) {
    throw new Error(`Environment variable ${query} does not exist.`);
  }

  return process.env[query];
};
