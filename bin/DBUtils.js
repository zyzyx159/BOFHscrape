//ACCEPT: URL array 
//RETURN: URL array not in DB
//
//ACCPET: map of data to append to DB

import * as yaml from 'js-yaml';
import * as fs from 'fs';

export function filterUrls(URLArray, pathToDB){
  let rawYaml = fs.readFileSync(pathToDB, 'utf8');
  let mappedYaml = yaml.loadAll(rawYaml);

  let yamlURLs = [];

  function traverse(data) {
    if (typeof data === 'object') {
      for (const [k, v] of Object.entries(data)) {
        if (k === key) {
          yamlURLs.push(v);
        }
        traverse(v);
      }
    }
  }

  traverse(mappedYaml);

  var URLsToDownload = URLArray.filter(item => !yamlURLs.includes(item));

  return URLsToDownload;
}



