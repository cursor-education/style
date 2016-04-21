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
          '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/lib/js/head.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/lib/js/html5shiv.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/js/reveal.min.js',
          '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/css/reveal.min.css',
          '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/css/theme/simple.min.css',
          '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/lib/css/zenburn.min.css',
          '//cursor-education.github.io/style/reveal/theme-custom.css'
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
    var CDN = '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0';

    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
  
      transition: 'zoom',
  
      dependencies: [
        { src: CDN + '/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: CDN + '/plugin/markdown/marked.js', condition: function() { return !!document.querySelector('[data-markdown]'); } },
        { src: CDN + '/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector('[data-markdown]'); } },
        { src: CDN + '/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector('pre code'); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: CDN + '/plugin/zoom-js/zoom.js', async: true },
        //{ src: CDN + '/plugin/notes/notes.js', async: true }
        { src: '//cdn.jsdelivr.net/reveal.js/3.0.0/plugin/notes/notes.js', async: true }
      ]
    });
    
    setTimeout(function () {
      hljs.initHighlighting();
    }, 2000);
  }
};

main.init();
