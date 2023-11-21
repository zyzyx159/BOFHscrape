import axios, * as others from 'axios';
import * as cheerio from 'cheerio';

//NOTE: The program is failing as its running everything before it finishes axios.
//I think I can directly push all the data into the map, I just need the program to wait for axios to run before returning data.

let storyData = new Map();

export function getStory(URL) {

  storyData.set('URL',URL);
  scrapeWeb(URL)
  .then((resolvedValueArray) => {
      return storyData;
    })
  .catch((errorMessage) => {
      console.log(errorMessage);
    })
};

function scapeWeb(URL){
  retrun new promise((resolve, reject) => {
    axios.get(URL).then(response => { // The HTML code of the website is stored in the "data" property of the response object
      const html = response.data;
      const $ = cheerio.load(html);
      const episodeElements = $('div[id=page] > article');

      storyData.set('title',(episodeElements
        .find('div[class=header_right] > h1')
        .text()
      ));

      storyData.set('subtitle',(episodeElements
        .find('div[class=header_right] > h2')
        .text()
      ));
   
      storyData.set('episodeNumber',(episodeElements 
        .find('#body > p:nth-child(1) > span')
        .text()
      ));

      storyData.set('author',(episodeElements
        .find('a.byline')
        .text().replace(/\r?\n|\r/g, " ")    
     ));

      storyData.set('pubDate',(episodeElements
        .find('span[class=dateline]')
        .text()
      ));

      storyData.set('story',(episodeElements
        .find('div[id=body] > p')
        .toArray()
        .map(element => $(element)
          .text()
        )
      ));
    });
  });
};
