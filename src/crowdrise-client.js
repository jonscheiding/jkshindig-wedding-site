import cheerio from 'cheerio';
import request from 'request';
import { EventEmitter } from 'events';

export class CrowdRiseClient extends EventEmitter {
  constructor(url) {
    super();

    this.url = url;
    this.updateCampaignStatus();
  }

  updateCampaignStatus = () => {
    const requestUrl = `https://cors-anywhere.herokuapp.com/${this.url}`;
    const refreshInterval = process.env.REACT_APP_CROWDRISE_REFRESH_INTERVAL;

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
      if(refreshInterval) {
        this.timeoutId = setTimeout(this.updateCampaignStatus, refreshInterval);
      }
    });
  }

  stop = () => {
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
