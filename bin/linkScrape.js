import axios, * as others from 'axios'; 
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as df from 'date-format';

//let URL = process.argv[2];

export function current(){
  const URL = 'https://www.theregister.com/offbeat/bofh/'
  //for(let i = 0; i < getLinks(URL).le; 
}

export function readDB() {
  //read the json file into an array and return the array
  var path = "../output/db.json"
  var db = JSON.parse(fs.readFileSync(path));
  return db;
}

function test(){
  var contents = fs.readFileSync("../output/db.json");
  var jsonContens = JSON.parse(contents);
  jsonContens.le
}

function getLinks(URL) {
  axios.get(URL).then(response => { // The HTML code of the website is stored in the "data" property of the response object
    const html = response.data;
    const $ = cheerio.load(html);
    const eplink = $('div[id=page] > div[id=main-col] > div[class=headlines]');
    let sorw = $('srow rt-1*');
 
    var links = [];

    $('.story_link').each( function (){
      var link = $(this).attr('href');
//        console.log(link);
      if (link.includes("bofh")){
        links.push({link});
      }
    });
//    console.log(links);
    return links;
  })
};
