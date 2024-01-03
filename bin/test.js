import * as utils from './utils.js';
import * as linkScrape from './linkScrape.js';
//import * as storyScrape from './storyScrape3.js';

const URL = "https://www.theregister.com/2023/10/13/bofh_2023_episode_19/";
//const URL = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"

export function testStoryScrape(){
  console.log(
    storyScrape.getStory(URL)
  );
}

function success(result) {
  var array = storyScrape.getStory();
  console.log(array);
}

function failure(error){
  console.error('${error}');
}

//storyScrape.getStory(URL).then(success, failure);

export function getLinks(){
  var links = linkScrape.getLinks;
  for (i = 0; i < links.length; i++)
    console.log((i+1) + links[i]);
}
