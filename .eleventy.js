const { DateTime } = require("luxon");

module.exports = function(eleventyConfing){
  
  eleventyConfing.addPassthroughCopy('./src/style.css');
  eleventyConfing.addPassthroughCopy('./src/assets');
  
  eleventyConfing.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })


  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
