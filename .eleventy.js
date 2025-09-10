
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"static": "/"});
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
