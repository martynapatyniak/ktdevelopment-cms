module.exports = function (eleventyConfig) {
  // --- PASSTHROUGH (statyczne pliki z katalogu głównego repo) ---
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("base_icon_white_background.png");
  eleventyConfig.addPassthroughCopy("base_logo_white_background.png");
  eleventyConfig.addPassthroughCopy("logo.png");

  // --- PASSTHROUGH: wszystko z /public wrzuć bezpośrednio do _site/ ---
  // Dzięki temu plik:
  //   public/google8f2f386cc93d6433.html
  // trafi do:
  //   _site/google8f2f386cc93d6433.html
  eleventyConfig.addPassthroughCopy({ "public/*": "." });

  // Alias layoutu
  eleventyConfig.addLayoutAlias("layout", "layout.njk");

  // Kolekcja postów z folderu src/blog
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });

  return {
    dir: {
      input: "src",          // katalog z treścią
      includes: "_includes", // katalog z szablonami (wewnątrz src)
      output: "_site"        // katalog wyjściowy
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
