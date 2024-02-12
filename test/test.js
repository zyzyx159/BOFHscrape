import * as dbUtils from "../bin/DBUtils.js";
import * as getHTML from "../bin/getHTML.js";
import * as filterHTML from "../bin/filterHTML.js";
import * as output from "../bin/output.js";

const URL = "https://www.theregister.com/offbeat/bofh/";
const localURL = "../test/BOFH.html";
const dbPath = "../DB.yaml";
const localStory = "./test/BOFH_Episode.html";

//print list of links
getHTML.localHTML(localURL).then(filterHTML.filterLinks).then(printArray);

function printArray(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}
