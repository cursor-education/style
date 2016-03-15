var require = function (src, done) {
  var type = src.substr(src.lastIndexOf('.') + 1).toLowerCase()
    , s;
  
  if (type == 'js') {
    s = document.createElement('script');
    s.type = "text/javascript";
    s.src = src;
  }
  else if (type == 'css') {
    s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = src;
  }
  
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
          'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/lib/js/head.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/lib/js/html5shiv.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/js/reveal.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/css/reveal.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/css/theme/simple.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/lib/css/zenburn.min.css',
          'http://cursor-education.github.io/style/reveal/theme-custom.css'
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
    // var CDN_URL = 'http://cursor-education.github.io/style/reveal';

    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
  
      transition: 'slide',
  
      dependencies: [
        { src: CDN + '/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: CDN + '/plugin/markdown/marked.js', condition: function() { return !!document.querySelector('[data-markdown]'); } },
        { src: CDN + '/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector('[data-markdown]'); } },
        { src: CDN + '/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector('pre code'); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: CDN + '/plugin/zoom-js/zoom.js', async: true },
        { src: CDN + '/plugin/notes/notes.js', async: true }
      ]
    });
  }
};

main.init();
