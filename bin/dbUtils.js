import * as fs from 'fs';

export function readDB() {
  //read the json file into an array and return the array
  let path = "../output/db.json"
  let db = JSON.parse(fs.readFileSync(path));
  console.log(db);
  console.log()
  return db;
}

export function writeDB(params) {
  //prams should be the modified array, aka the new json file
}
