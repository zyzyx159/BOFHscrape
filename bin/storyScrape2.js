import axios, * as others from 'axios';
import * as cheerio from 'cheerio';

export function getStory(URL) {

  const storyData = new Map();
  storyData.set('URL',URL);

  axios.get(URL).then(response => { // The HTML code of the website is stored in the "data" property of the response object
    const html = response.data;
    const $ = cheerio.load(html);
    const episodeElements = $('div[id=page] > article');

    storyData.set('title',(episodeElements
      .find('div[class=header_right] > h1')
      .text()
    ));

    var subtitle = (episodeElements
     .find('div[class=header_right] > h2')
      .text()
    );

    var episodeNumber = (episodeElements 
      .find('#body > p:nth-child(1) > span')
      .text()
    );

    var author = (episodeElements
      .find('a.byline')
      .text().replace(/\r?\n|\r/g, " ")    
    );

    var pubDate = new Date (episodeElements
      .find('span[class=dateline]')
      .text()
    );

    var story = (episodeElements
      .find('div[id=body] > p')
      .toArray()
      .map(element => $(element)
        .text()
      )
    );
  });

//  const storyData = new Map();
//    storyData.set('URL', URL);
//    storyData.set('title', title);
//    storyData.set('subtitle', subtitle);
//    storyData.set('episodeNumber', episodeNumber);
//    storyData.set('author', author);
//    storyData.set('pubDate', pubDate);
//    storyData.set('story', story);

  return storyData;
};
