const Chance = require('chance');
const plotHeatmap = require('../visualization/plotHeatmap');
const initGrid = require('./initGrid');
const spinFlipAlgorithm = require('./metropolisAlgorithm');
const monteCarloSweep = require('./monteCarloSweep');
const defaultParameters = require('./defaultParameters');
const animateSimulation = require('../visualization/animateSimulation');
const sliders = require('../controls/sliders');

module.exports = function () {
  sliders();
  let parameters = defaultParameters();
  let rng = Chance( parameters.seed );
  if ( parameters.showAnimation ) {
    let gridSize = document.getElementById('gridSize');
    let numberSweeps = document.getElementById('numberSweeps');
    let averageMagnetization = document.getElementById('averageMagnetization');
    numberSweeps.innerText = 0;
    parameters.gridSize = gridSize.noUiSlider.get();
    let grid = initGrid( parameters, rng );
    averageMagnetization.innerText = parameters.magnetization;
    plotHeatmap( grid, parameters );
    animateSimulation( grid, parameters, spinFlipAlgorithm, rng );
  } else {
    let sweep = 0;
    let grid = initGrid( parameters, rng );
    while ( sweep < parameters.nsweeps ) {
      monteCarloSweep( grid, parameters, spinFlipAlgorithm, rng );
      sweep++;
    }
    console.log(parameters);
  }
};
