import cheerio from 'cheerio';
import request from 'request';

export function getCampaignStatus(url, callback) {
  const requestUrl = `https://api.allorigins.ml/get?url=${encodeURIComponent(url)}`;

  request(requestUrl, {json: true}, (error, response, body) => {
    if(error || response.statusCode !== 200) {
      callback(error || response.statusMessage);
      return;
    }

    const $ = cheerio.load(body.contents);
    const result = {
      raised: $('.inline.raised').first().text()
    };

    callback(null, result);
  });
}