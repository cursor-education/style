var require = function (src, done) {
  var s = document.createElement('script');
      s.type = "text/javascript";
      s.src = src;
      s.onload = done;

  document.body.appendChild(s);
};

var main = {
  init: function () {
    main.loadDependencies(main.initReveal);
  },
  
  loadDependencies: function (done) {
    var deps = [
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js',
          'http://cursor-education.github.io/style/reveal/lib/js/head.min.js',
          'http://cursor-education.github.io/style/reveal/js/reveal.js'
        ];

    (function(index) {
      index = index || 0;
      func = arguments.callee;

      if (index >= deps.length) return done();

      require(deps[index++], function () {
        func(index);
      });
    })();
  },
  
  initReveal: function () {
    var CDN = 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0';
    // var CDN_URL = 'http://cursor-education.github.io/style';

    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
  
      transition: 'slide',
  
      dependencies: [
        { src: CDN_URL + '/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: CDN_URL + '/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector('[data-markdown]'); } },
        { src: CDN_URL + '/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector('[data-markdown]'); } },
        { src: CDN_URL + '/reveal/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector('pre code'); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: CDN_URL + '/reveal/plugin/zoom-js/zoom.js', async: true },
        { src: CDN_URL + '/reveal/plugin/notes/notes.js', async: true }
      ]
    });
  }
};

main.init();
