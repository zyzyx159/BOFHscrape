//import * as story from "../bin/story.js";
import { story } from "../bin/story.js";

const localStory = "/home/zyzyx/git/BOFHscrape/test/bofh_episode2.html";

var testStory = new story(localStory);

console.log(testStory.URL);
console.log(testStory.title);
