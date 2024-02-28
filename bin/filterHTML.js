import * as cheerio from "cheerio";
import * as story from "./story.js";

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
    return links;
  } else {
    reject("No links found");
  }
}

//filter HTML for stories
export function filterStories(html) {
  //  var storyData = new story(URL);

  const $ = cheerio.load(html);
  const episodeElements = $("div[id=page] > article");

  //0 - title
  storyData.setTitle(
    episodeElements.find("div[class=header_right] > h1").text()
  );

  //1 - subtitle
  storyData.setSubtitle(
    episodeElements.find("div[class=header_right] > h2").text()
  );

  //2 - episode
  storyData.setEpisode(
    episodeElements.find("#body > p:nth-child(1) > span").text()
  );

  //3 - author
  storyData.setAuthor(episodeElements.find("a.byline").text());

  //4 publish date
  storyData.setPublishDate(episodeElements.find("span[class=dateline]").text());

  //5 story
  storyData.setStory(
    episodeElements
      .find("div[id=body] > p")
      .toArray()
      .map((element) => $(element).text())
  );
  return storyData;
}
