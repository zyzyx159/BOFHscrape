//ACCEPT: web address
//RETURN: list of BOFH links

import * as fs from "fs";
import * as cheerio from "cheerio";

export function getLinks(URL) {
  return new Promise(function (resolve, reject) {
    fs.readFile("./BOFH.html", "utf8", (err, data) => {
      if (err) throw err;
      const $ = cheerio.load(data);
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
    });
  });
}
