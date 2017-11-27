const noUiSlider = require('nouislider');

module.exports = function () {
  let temperature = document.getElementById('temperature');
  let startPause = document.getElementById('startPauseButton');
  let resetButton = document.getElementById('resetButton');

  noUiSlider.create(temperature, {
    start: 1,
    behavior: 'tap',
    orientation: "horizontal",
    connect: [true, false],
    range: {
      min: 0,
      max: 5
    }
  });

  temperature.noUiSlider.on('update', function( values, handle ){
	temperatureValue.innerHTML = values[handle];
  });

  startPause.addEventListener('click', function () {
    let currentValue = startPause.innerHTML;
    if (currentValue === "Start") {
      startPause.innerHTML = "Pause";
    } else {
      startPause.innerHTML = "Start";
    }
  });

  resetButton.addEventListener('click', function () {

  });
};
