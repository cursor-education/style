(function() {
  //var CDN = 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0';
  var CDN_URL = 'http://cursor-education.github.io/style';

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
})();
