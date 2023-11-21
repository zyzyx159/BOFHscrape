import * as utils from './utils.js';
import * as linkScrape from './linkScrape.js';
import * as storyScrape from './storyScrape.js';

export function testStoryScrape(){
  console.log(
    storyScrape.getStory(
      "https://www.theregister.com/2023/10/13/bofh_2023_episode_19/"
    ) 
  );
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
