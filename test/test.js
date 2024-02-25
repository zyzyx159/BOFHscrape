import * as dbUtils from "../bin/DBUtils.js";
import * as getHTML from "../bin/getHTML.js";
import * as filterHTML from "../bin/filterHTML.js";
import * as output from "../bin/output.js";
import * as story from "../bin/story.js";

const URL = "https://www.theregister.com/offbeat/bofh/";
const localURL = "../test/BOFH.html";
const dbPath = "../DB.yaml";
const localStory = "../test/bofh_episode.html";

//print list of links
//getHTML.localHTML(localStory).then(filterHTML.filterLinks).then(printArray);

function printArray(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(i + " - " + data[i]);
  }
}

function printStory(data){
  console.log(data.getTitle);
}

//print story array
getHTML.localHTML(localStory).then(filterHTML.filterStories(localStory)).then(printStory);

function testDateSplit(data){
  let dateStringArray = data[4].replace(/\s\s+/g, ' ');
  console.log(dateStringArray);
}

//test date split
//getHTML.localHTML(localStory).then(filterHTML.filterStories).then(testDateSplit);