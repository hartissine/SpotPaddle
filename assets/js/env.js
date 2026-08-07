// env.js - small runtime helper to expose environment and silence debug logs in production
(function () {
  try {
    var meta = document.querySelector('meta[name="spotpaddle-env"]');
    var env = (meta && meta.content) || 'production';
    window.SpotPaddleEnv = env;

    // In production, silence verbose console methods to avoid leaking PII or cluttering logs.
    if (env === 'production') {
      var noop = function () {};
      if (typeof console !== 'undefined') {
        console.log = noop;
        console.debug = noop;
        console.info = noop;
      }
    }
  } catch (e) {
    // fail safe: do nothing
  }
})();
