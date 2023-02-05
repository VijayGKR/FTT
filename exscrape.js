var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

(async () => {
  const results = await google.scrape('apples', 10); //change banana to user's search
  console.log('results', results);
})();


//https://www.npmjs.com/package/images-scraper/v/6.4.2