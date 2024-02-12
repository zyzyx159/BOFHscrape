import * as axios from "axios";
import * as fs from "fs";

//get HTML from file
export function localHTML(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) console.log(err);
      resolve(data);
    });
  });
}

//get HTML from web
export function webHTML(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url).then((response) => {
      resolve(response.data);
    });
  });
}
