const yaml = require("js-yaml");
const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("yml", contents => yaml.safeLoad(contents));
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addFilter(
    "cssmin",
    code => new CleanCSS({}).minify(code).styles
  );
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public"
    }
  };
};
