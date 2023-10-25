import * as dbUtils from './dbUtils.js';
import * as linkScrape from './linkScrape.js';

//NOTE: this function is going to only get the latest episodes
export function current() {
  const URL = 'https://www.theregister.com/offbeat/bofh';
//  console.log(dbUtils.readDB.length);
  dbUtils.readDB();
}

export function archive(URL) {
  //don't check DB, overwrite
}

export function pre2k(URL) {
  
}

function dbCheck(link) {
  
}
