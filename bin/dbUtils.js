import * as fs from 'fs';

export function readDB() {
  //read the json file into an array and return the array
  var path = "../output/db.json"
  var db = JSON.parse(readFileSync(path));
  return db;
}

export function writeDB(params) {
  //prams should be the modified array, aka the new json file
}
