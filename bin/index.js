import * as utils from './utils.js';
import * as linkScrape from './linkScrape.js';
import * as storyScrape from './storyScrape.js';
import * as test from './test.js'

const URL = "https://www.theregister.com/offbeat/bofh/"
const path = './DB.yaml'

if !fs.existsSync(path){
  fs.writeFile('./DB.yaml')
}

linkScrape.getLinks(URL).then(onLinkScrapeSucess, onLinkScrapError)

function onLinkScrapError{
  console.log("onLinkScrapError: No links found.")
}

function onLinkScrapeSucess(links)
    
}

