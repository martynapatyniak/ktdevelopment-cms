module.exports = function (eleventyConfig) {
  // --- PASSTHROUGH (statyczne pliki z katalogu głównego repo) ---
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("base_icon_white_background.png");
  eleventyConfig.addPassthroughCopy("base_logo_white_background.png");
  eleventyConfig.addPassthroughCopy("logo.png");

  // --- PASSTHROUGH: wszystko z /public wrzuć bezpośrednio do _site/ ---
  eleventyConfig.addPassthroughCopy({ "public/*": "." });

  // Alias layoutu (możesz dalej używać "layout" w frontmatterze)
  eleventyConfig.addLayoutAlias("layout", "layout.njk");

  // Filtr językowy do użycia w szablonach
  eleventyConfig.addFilter("byLang", (items, lang) =>
    (items || []).filter(p =>
      (p.data.published !== false) && ((p.data.lang || "pl") === lang)
    )
  );

  // Kolekcja wszystkich postów
  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/blog/*.md").reverse()
  );

  // Kolekcja tylko PL
  eleventyConfig.addCollection("posts_pl", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/blog/*.md")
      .filter(p => (p.data.lang || "pl") === "pl" && p.data.published !== false)
      .reverse()
  );

  // Kolekcja tylko EN
  eleventyConfig.addCollection("posts_en", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/blog/*.md")
      .filter(p => p.data.lang === "en" && p.data.published !== false)
      .reverse()
  );

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
