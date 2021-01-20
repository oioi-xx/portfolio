// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


var ProgressBar = require('./js/progressbar.js');
var line = new ProgressBar.Line('#container');

require.config({
    paths: {'progressbar': '../bower_components/progressbar.js/dist/progressbar'}
});

define(['progressbar'], function(ProgressBar) {
    var line = new ProgressBar.Line('#container');
});

// Assuming we have an empty <div id="container"></div> in
// HTML
var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});
bar.animate(1);  // Value from 0.0 to 1.0

var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0

