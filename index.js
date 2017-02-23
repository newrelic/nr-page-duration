if (typeof window !== 'undefined' && window.newrelic) {
  var called = false
  var callback = function () {
    if (called) return
    called = true
    var end = new Date().getTime()
    var start = __nr_require('loader').offset
    window.newrelic.addPageAction('PageDuration', {
      duration: Math.round((end - start) / 1000),
    })
  }
  if ('addEventListener' in window) {
    window.addEventListener('pagehide', callback, true)
    window.addEventListener('unload', callback, true)
  } else if ('attachEvent' in window) {
    window.attachEvent('onpagehide', callback)
    window.attachEvent('onunload', callback)
  }
}
