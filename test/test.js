import * as dbUtils from "../bin/DBUtils.js";
import * as getHTML from "../bin/getHTML.js";
import * as filterHTML from "../bin/filterHTML.js";
import * as output from "../bin/output.js";

const URL = "https://www.theregister.com/offbeat/bofh/";
const localURL = "./test/BOFH.html";
const dbPath = "../DB.yaml";
const localStory = "./test/BOFH_Episode.html";

// getHTML.localHTML(localURL).then(
//   //add the database filter in here
//   filterHTML.filterLinks
// );

function getHTML2() {
  let bob = new map(
    (bob = getHTML.localHTML(localStory).then(filterHTML.filterStories))
  );
  return bob;
}

//output.writeStory(HTML, URL);

let bob = getHTML.localHTML(localStory).then(filterHTML.filterStories);
console.log(bob.pubdate);
console.log("I'm a failure");
