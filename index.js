function xmlEscape(str) {
    return String(str).replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;')
                      .replace(/"/g, '&quot;')
                      .replace(/'/g, "&apos;");
}

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

  hooks: {},

  blocks: {},

  filters: {
    prettify: function(data) {
      return '<pre><code class="json">' +
        xmlEscape(JSON.stringify(data, null, 4)) + 
        '</code></pre>';
    },
  },
};
