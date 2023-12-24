import axios, * as others from 'axios';
import * as cheerio from 'cheerio';

//NOTE: The program is failing as its running everything before it finishes axios.
//I think I can directly push all the data into the map, I just need the program to wait for axios to run before returning data.

let storyData = new Map();

export async function getStory(URL) {

  //var storyData = new Map();
  storyData.set('URL',URL);

//NOTE: axios needs to be a promise that needs to delay the return function

  const response = await axios.get(URL);
  const $ = cheerio.load(response.data);
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
  return storyData;
};


