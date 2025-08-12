module.exports = function (eleventyConfig) {
  // kopiowanie plików statycznych
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("base_icon_white_background.png");
  eleventyConfig.addPassthroughCopy("base_logo_white_background.png");
  eleventyConfig.addPassthroughCopy("logo.png");

  // alias layoutu
  eleventyConfig.addLayoutAlias("layout", "layout.njk");

  // kolekcja postów z folderu src/blog  (UWAGA: glob względny do inputDir)
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("blog/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
