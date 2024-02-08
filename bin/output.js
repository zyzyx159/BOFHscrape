import * as fs from "fs";

export function writeStory(storyData, URL) {
  let stringYear = storyData.pubDate.getYear("yyyy", storyData.pubDate);
  let episodeNumber = storyData.episodeNumber;

  if (episodeNumber.length < 2) {
    episodeNumber = "0" + episodeNumber;
  }

  let fileName = "../output/" + stringYear + " " + episodeNumber + ".md";

  //build a big string here and do the writing all at once
  let bigString =
    "# " + storyData.title + "\n\n## " + storyData.subtitle + "\n\n";

  storyData.story.forEach((element) => {
    bigString = bigString + element + "\n\n";
  });

  bigString =
    bigString +
    "\n\n- Published on: " +
    storyData.pubDate +
    "\n\n- Written By: " +
    storyData.author +
    "\n\n- Posted to: [" +
    URL +
    "](" +
    URL +
    ")";

  fs.writeFile(fileName, bigString);
}
