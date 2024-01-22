import * as utils from './utils.js';
import * as linkScrape from './linkScrape.js';
import * as storyScrape from './storyScrape.js';
import * as test from './test.js'
import * as fs from 'fs';

const currentUrl = "https://www.theregister.com/offbeat/bofh/"
const earlierUrl = "https://www.theregister.com/offbeat/bofh/earlier/" // add a "#/" for each following page
const pathToDB = './DB.yaml'

if (!(fs.existsSync(pathToDB))){
  fs.writeFile('./DB.yaml')
}

run(currentUrl);
//TODO: Eventually this needs to check if we need the archive function 

function run(Url){
  linkScrape.getLinks(URL).then(onLinkScrapeSucess, onLinkScrapError)
}

function onLinkScrapError(){
  console.log("onLinkScrapError: No links found.")
}

function onLinkScrapeSucess(links){
   var downLoadLinks = DBUtils.filterUrls(links, pathToDB);
  
  for(let i = 0; i < downLoadLinks.legenth; i++){
    console.log(downLoadLinks[i]);
  }

}

