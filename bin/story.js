import * as cheerio from "cheerio";
import * as getHTML from "./getHTML.js";
import * as axios from "axios";

export class story {
  //#region - constructor
  //TODO: constructor needs to make a promice
  constructor(newURL) {
    this.#setURL(newURL);
    getHTML.localHTML(this.URL).then(this.loadCheerio).then(this.processHTML);
  }

  //#region - Getters and Setters
  #setURL(newURL) {
    if (newURL === "") {
      throw "The URL cannot be empty";
    }
    this.URL = newURL.trim();
  }
  getURL() {
    return this.URL;
  }

  #setTitle(newTitle) {
    this.title = newTitle.trim();
  }
  getTitle() {
    return this.title;
  }

  #setSubtitle(newSubtitle) {
    this.subtitle = newSubtitle.trim();
  }
  getSubtitle() {
    return this.subtitle;
  }

  #setAuthor(newAuthor) {
    this.Author = newAuthor.replace(/\r?\n|\r/g, " ").trim();
  }
  getAuthor() {
    return this.Author;
  }

  #setEpisode(newEpisode) {
    this.Episode = newEpisode.trim();
  }
  getEpisode() {
    return this.Episode;
  }

  #setPublishDate(newPublishDate) {
    this.PublishDate = newPublishDate.replace(/\s\s+/g, " ");
  }
  getPublishDate() {
    return this.PublishDate;
  }

  #setStory(newStoryArray) {
    for (i = 0; i < newStoryArray.length; i++) {
      newStory = newStory + newStoryArray[i] + "/n";
    }
    this.story = newStory;
  }
  getStory() {
    return this.story;
  }
  //#endregion

  loadCheerio(HTML) {
    return cheerio.load(HTML);
  }

  //#region - Cherio: process HTML
  processHTML($) {
    var episodeElements = $("div[id=page] > article");

    // episodeElements
    //   .find("div[class=header_right] > h1")
    //   .text()
    //   .then(this.#setTitle(title));

    this.#setTitle(episodeElements.find("div[class=header_right] > h1").text());

    // this.#setSubtitle(
    //   episodeElements.find("div[class=header_right] > h2").text()
    // );

    // this.#setEpisode(
    //   episodeElements.find("#body > p:nth-child(1) > span").text()
    // );

    // this.#setAuthor(episodeElements.find("a.byline").text());

    //this.#setPublishDate(this.processJSON($));

    // this.#setStory(
    //   episodeElements
    //     .find("div[id=body] > p")
    //     .toArray()
    //     .map((element) => $(element).text())
    // );
  }

  processJSON($) {
    var stingArray = $("script[type='application/ld+json']");
    var jsonString = "";

    for (var i in stingArray) {
      for (var j in stingArray[i].children) {
        var data = stingArray[i].children[j].data;
        if (data) {
          jsonString = jsonString + data;
        }
      }
    }

    var objJSON = JSON.parse(jsonString);
    var dp = objJSON.datePublished;
    return dp;
  }
  //#endregion
}
