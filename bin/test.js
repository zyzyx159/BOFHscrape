import * as linkScrape from './linkScrape.js';

//const URL = "https://www.theregister.com/offbeat/bofh/";
const URL = "./BOFH.html"

function onSucess(links) {
  for(let i = 0; i < links.legenth; i++){
    console.log(links[i]);
  }
}

function onError() {
  console.log("no links found")
}

export function testLinkScrape(URL){
  localLinkScrape.getLinks(URL).then(onSucess, onError)
}

testLinkScrape(URL);