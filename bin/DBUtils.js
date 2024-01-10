//ACCEPT: URL array 
//RETURN: URL array not in DB
//
//ACCPET: map of data to append to DB

import * as yaml from 'js-yaml';
import * as fs from 'fs';

const path = './DB.yaml'

//public export task
export function LinkFilter(URLArray) {
  if(DBExistsCheck) {
    URLFilter(URLArray);

  } else {
    //create DB File
    //return the whole array untouched
  }
}

//does DB file exist? Return boolean.
function DBExistsCheck(){
  return fs.existsSync(path);
}

//load file into memory
function loadYaml() {
  let fileContents = fs.readFileSync(path, 'utf8');
  let data = yaml.safeLoadAll(fileContents);
  return data;
}

//search YAML for URLs
function URLFilter(URLArray){
  var Yaml = loadYaml();
  let URLsToDownload = URLArray.filter(x => Yaml.includes(x));
  return URLsToDownload;
  }
}
//search file for URL
//  return URLs not in the DB

//serialize map to YAML and append to DB
