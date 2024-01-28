import * as linkScrape from './linkScrape.js';
import * as localLinkScrape from './localLinkScrape.js';
import * as dbUtils from './DBUtils.js';

const URL = "https://www.theregister.com/offbeat/bofh/";
const localURL = "./BOFH.html";
const dbPath = "./DB.yaml";

function onSucess(links) {
/*   for(let i = 0; i < links.legenth; i++){
    console.log(links[i]);
  } */
  dbUtils.filterUrls(links, dbPath);
}

function onError() {
  console.log("no links found")
}

function testLinkScrape(URL){
  linkScrape.getLinks(URL).then(onSucess, onError)
}

function testLocalLinkScrape(localURL){
  localLinkScrape.getLinks(localURL).then(onSucess, onError)
}

testLinkScrape(URL);
testLocalLinkScrape(localURL);