import * as axios from "axios";
import * as fs from "fs";
import * as cheerio from "cheerio";

//get HTML from file
export function processLocal(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
}

//get HTML from web
export function processWeb(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url).then((response) => {
      resolve(response.data);
    });
  });
}

//filter HTML for links
export function filterLinks(html) {
  const $ = cheerio.load(html);
  const links = [];

  $(".story_link").each(function () {
    var link = $(this).attr("href");
    if (link.includes("bofh")) {
      links.push("https://www.theregister.com" + link);
    }
  });

  if (links.length > 0) {
    for (let i = 0; i < links.length; i++) {
      console.log(links[i]);
    }
    resolve(links);
  } else {
    reject("No links found");
  }
}

//filter HTML for stories
export function filterStories(html, source) {
  let storyData = new Map();

  storyData.set("URL", url);
  const $ = cheerio.load(html);
  const episodeElements = $("div[id=page] > article");

  storyData.set(
    "title",
    episodeElements.find("div[class=header_right] > h1").text()
  );

  storyData.set(
    "subtitle",
    episodeElements.find("div[class=header_right] > h2").text()
  );

  storyData.set(
    "episodeNumber",
    episodeElements.find("#body > p:nth-child(1) > span").text()
  );

  storyData.set(
    "author",
    episodeElements
      .find("a.byline")
      .text()
      .replace(/\r?\n|\r/g, " ")
  );

  storyData.set("pubDate", episodeElements.find("span[class=dateline]").text());

  storyData.set(
    "story",
    episodeElements
      .find("div[id=body] > p")
      .toArray()
      .map((element) => $(element).text())
  );
  return storyData;
}
