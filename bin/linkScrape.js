//ACCEPT: web address 
//RETURN: list of BOFH links

import axios from 'axios';
import * as cheerio from 'cheerio';

export function getLinks(URL) {
  return new Promise(function(resolve, reject){
    axios.get(URL).then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
 
      const links = [];

      $('.story_link').each( function (){
        var link = $(this).attr('href');
        if (link.includes("bofh")){
          links.push("https://www.theregister.com" + link);
        }
      });
    resolve(links);
    })
  })
}
