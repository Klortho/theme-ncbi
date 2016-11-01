
console.log('===================!!!!!!!!!!!!!!!!!!!!!!!');

module.exports = {

  book: {
    assets: './assets',
    js: [
      'theme-api.js'
    ],
    css: [
      'theme-api.css'
    ]
  },
  
  hooks: {
    //init: function() {
    //  console.log('!!!!!!!!!!!!!!!!! hooks.init');
    //}
  },

  blocks: {},

  filters: {
    prettify: function(str) {
      return str;
    },
  },
};
