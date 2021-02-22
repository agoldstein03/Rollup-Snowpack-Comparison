/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [
    '@snowpack/plugin-svelte'
  ],
  // I had hoped some version of the following code might solve this issue; it does not appear to.
  // If you want to try the following option, remember to run npm i -D rollup-plugin-css-only first
  /*packageOptions: {
    rollup: {
      plugins: [
        require('rollup-plugin-css-only')({
          //output: 'bundle'css
          output: function (styles, styleNodes) {
            writeFileSync('C:\\bundle.css', styles)
          }
        })
      ]
    }
  }*/
};
