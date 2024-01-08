import * as utils from './utils.js';
import * as linkScrape from './linkScrape.js';
import * as storyScrape from './storyScrape.js';
import * as test from './test.js'

//const URL = "https://www.theregister.com/offbeat/bofh/"
//NOTE: this function is going to only get the latest episodes
export function current() {
  //call linkScrape with the default URL and wait for a reply
  //https://www.youtube.com/watch?v=TnhCX0KkPqs
}

//NOTE: This function checks all the pages of links and downloads everything
export function archive(URL) {

}

//NOTE: This function downloads the the stuff written before it was sold to The Register
export function pre2k(URL) {
  
}

//NOTE: this belongs in utils
function dbCheck(link) {
  
}

test.testLinkScrape("https://www.theregister.com/offbeat/bofh/");
