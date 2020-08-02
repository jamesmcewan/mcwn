module.exports = function(eleventyConfig) {
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public"
    }
  };
};
