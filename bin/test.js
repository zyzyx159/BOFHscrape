import * as linkScrape from './linkScrape.js';
import * as fs from 'fs';

//const URL = "https://www.theregister.com/offbeat/bofh/";

function onSucess(links) {
  for(let i = 0; i < links.legenth; i++){
    console.log(links[i]);
  }
}

function onError() {
  console.log("no links found")
}

export function testLinkScrape(URL){
  linkScrape.getLinks(URL).then(onSucess, onError)
}

fs.writeFile('DB.yaml', '', function (err){
  if (err) throw err;
  console.log('created DB.YAML');
});

