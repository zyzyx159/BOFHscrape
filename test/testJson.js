import * as getHTML from "../bin/getHTML.js";
import * as cheerio from "cheerio";

const URL = "https://www.theregister.com/offbeat/bofh/";
const localURL = "../test/BOFH.html";
const dbPath = "../DB.yaml";
const localStory = "/home/zyzyx/git/BOFHscrape/test/bofh_episode2.html";

getHTML.localHTML(localStory).then(hiHo).then(findTimeStamp);

function fetchHTML() {
  getHTML.localHTML(localStory);
}

function hiHo(html) {
  return cheerio.load(html);
}

function findTimeStamp($) {
  var obj = $("script[type='application/ld+json']");

  // //prints nothing
  //console.log(obj);

  //prints the JSON I need
  var jsonString = "";

  for (var i in obj) {
    for (var j in obj[i].children) {
      var data = obj[i].children[j].data;
      if (data) {
        //console.log(data);
        jsonString = jsonString + data;
      }
    }
  }

  var obj2 = JSON.parse(jsonString);
  var mm = obj2.datePublished;
  console.log(mm);
}
