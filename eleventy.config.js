module.exports = function (eleventyConfig) {
  // kopiowanie plików statycznych
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/base_icon_white_background.png");
  eleventyConfig.addPassthroughCopy("src/base_logo_white_background.png");
  eleventyConfig.addPassthroughCopy("src/logo.png");
  
  // alias layoutu
  eleventyConfig.addLayoutAlias("layout", "layout.njk");
  
  // kolekcja postów - poprawiona ścieżka
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/blog/*.md").reverse();
  });

  // filtry dla dat
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
