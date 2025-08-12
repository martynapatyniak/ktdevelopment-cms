module.exports = function (eleventyConfig) {
  // kopiowanie plików statycznych
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("base_icon_white_background.png");
  eleventyConfig.addPassthroughCopy("base_logo_white_background.png");
  eleventyConfig.addPassthroughCopy("logo.png");

  // alias layoutu
  eleventyConfig.addLayoutAlias("layout", "layout.njk");

  // kolekcja postów z folderu src/blog
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });

  return {
    dir: {
      input: "src",         // katalog z treścią
      includes: "_includes",// katalog z szablonami
      output: "_site"
    }
  };
};
