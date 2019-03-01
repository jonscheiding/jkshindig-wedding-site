import cheerio from 'cheerio';
import request from 'request';
import { EventEmitter } from 'events';

const REFRESH_INTERVAL = 5000;

export class CrowdRiseClient extends EventEmitter {
  constructor(url) {
    super();

    this.url = url;
    this.updateCampaignStatus();
  }

  updateCampaignStatus = () => {
    const requestUrl = `https://cors-anywhere.herokuapp.com/${this.url}`;

    request(requestUrl, {json: true}, (error, response, body) => {
      if(error || response.statusCode !== 200) {
        console.warn(`Couldn't load fundraiser details: ${error || response.statusMessage}`);
        return;
      }

      const $ = cheerio.load(body);
      const result = {
        raised: $('.inline.raised').first().text()
      };

      this.emit('refresh', result);
      this.timeoutId = setTimeout(this.updateCampaignStatus, REFRESH_INTERVAL);
    });
  }

  stop = () => {
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
