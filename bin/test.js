import * as dbUtils from "./DBUtils.js";
import * as scrape from "./scraper.js";

const URL = "https://www.theregister.com/offbeat/bofh/";
const localURL = "./BOFH.html";
const dbPath = "./DB.yaml";

scrape.localHTML(localURL).then(
  //add the database filter in here
  scrape.filterLinks
);
