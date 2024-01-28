import axios from 'axios';
import * as cheerio from 'cheerio';

let storyData = new Map();

export function getStory(URL) {
  storyData.set('URL',URL);

  axios.get(URL).then(response => { 
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
return storyData;
}


