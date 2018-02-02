const noUiSlider = require('nouislider');

module.exports = function () {
  let gridSize = document.getElementById('gridSize');
  let temperature = document.getElementById('temperature');
  let exchange1NN = document.getElementById('exchange1NN');
  let exchange2NN = document.getElementById('exchange2NN');
  let startPause = document.getElementById('startPauseButton');
  let resetButton = document.getElementById('resetButton');

  noUiSlider.create(gridSize, {
    start: 50,
    step: 1,
    behavior: 'tap',
    orientation: "horizontal",
    connect: [true, false],
    range: {
      min: 2,
      max: 100
    }
  });

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

  noUiSlider.create(exchange1NN, {
    start: 1.0,
    step: 0.1,
    behavior: 'tap',
    orientation: "horizontal",
    connect: [true, false],
    range: {
      min: -3.0,
      max: 3.0
    }
  });

  noUiSlider.create(exchange2NN, {
    start: 0.0,
    step: 0.1,
    behavior: 'tap',
    orientation: "horizontal",
    connect: [true, false],
    range: {
      min: -3.0,
      max: 3.0
    }
  });

  gridSize.noUiSlider.on('update', function( values, handle ){
    gridSizeValue.innerHTML = Math.round( values[handle] );
  });

  temperature.noUiSlider.on('update', function( values, handle ){
	temperatureValue.innerHTML = values[handle];
  });

  exchange1NN.noUiSlider.on('update', function( values, handle ){
    exchange1NNValue.innerHTML = values[ handle ];
  });

  exchange2NN.noUiSlider.on('update', function( values, handle ){
    exchange2NNValue.innerHTML = values[ handle ];
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
    startPause.innerHTML = "Start";
    resetButton.innerHTML = "Resetting";
  });
};
