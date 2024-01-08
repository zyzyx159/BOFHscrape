//ACCEPT: URL array 
//RETURN: URL array not in DB
//
//ACCPET: map of data to append to DB

import * as yaml from 'js-yaml';
import * as fs from 'fs';

const path = './DB.yaml'

//public export task
export function DBCheck(URLArray) {
  if(DBExistsCheck) {
    //run searchDB 
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
function searchDB(URLArray){
  var data = loadYaml;
  for(i = 0; i < URLArray; i++){
    //https://stackoverflow.com/questions/51374007/node-js-search-dynamic-json-object-in-json-array
  }
}
//search file for URL
//  return URLs not in the DB

//serialize map to YAML and append to DB
