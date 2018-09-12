const https = require('https');

module.exports = function (url) {
  this.cacheable();

  const callback = this.async();
  url = url || this.query.slice(1);

  if(!url) {
    throw new Error('URL must be provided via query or from previous loader.');
  }
  
  https.get(url, r => {
    let data = '';
    r.on('data', (chunk) => {
      data += chunk;
    });

    r.on('end', () => {
      callback(null, data);
    });
  }).on("error", err => {
    callback(err);
  });
};
