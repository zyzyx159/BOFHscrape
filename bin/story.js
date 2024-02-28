import * as cheerio from "cheerio";
import * as axios from "axios";

class story {
  //#region - constructor
  constructor(newURL) {
    this.#setURL(newURL);
  }
  //#endregion

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

  #setHTML() {
    return new Promise(function (resolve, reject) {
      axios.get(this.URL).then((response) => {
        resolve(response.data);
      });
    });
  }
  getHTML() {
    return this.HTML;
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

  //#region - Cherio: process HTML
  processHTML() {
    $ = cheerio.load(this.html);
    episodeElements = $("div[id=page] > article");

    this.#setTitle(episodeElements.find("div[class=header_right] > h1").text());

    this.#setSubtitle(
      episodeElements.find("div[class=header_right] > h2").text()
    );

    this.#setEpisode(
      episodeElements.find("#body > p:nth-child(1) > span").text()
    );

    this.#setAuthor(episodeElements.find("a.byline").text());

    this.#setPublishDate(episodeElements.find("span[class=dateline]").text());

    this.#setStory(
      episodeElements
        .find("div[id=body] > p")
        .toArray()
        .map((element) => $(element).text())
    );
  }
  //#endregion
}
