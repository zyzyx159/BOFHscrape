import axios, * as others from 'axios'; 
import * as cheerio from 'cheerio';
//import * as fs from 'fs';
//import * as df from 'date-format';

export function getLinks(URL) {
  axios.get(URL).then(response => { // The HTML code of the website is stored in the "data" property of the response object
    const html = response.data;
    const $ = cheerio.load(html);
    const eplink = $('div[id=page] > div[id=main-col] > div[class=headlines]');
    let sorw = $('srow rt-1*');
 
    const links = [];

    $('.story_link').each( function (){
      var link = $(this).attr('href');
        //console.log(link);
      if (link.includes("bofh")){
//        links.push({link});
        links.push("https://www.theregister.com" + link);
      }
    });
    return links;
  })
};
