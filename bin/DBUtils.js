//ACCEPT: URL array 
//RETURN: URL array not in DB
//
//ACCPET: map of data to append to DB

import * as yaml from 'js-yaml';
import * as fs from 'fs';

export function filterUrls(URLArray, pathToDB){
  var Yaml = loadYaml(pathToDB);
 //TODO: using filters wrong 
  let URLsToDownload = URLArray.filter(x => Yaml.includes(x));
  return URLsToDownload;
}

//load file into memory
function loadYaml(pathToDB) {
  let fileContents = fs.readFileSync(pathToDB, 'utf8');
  let data = yaml.loadAll(fileContents);
  return data;
}

