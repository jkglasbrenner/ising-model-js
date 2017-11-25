const Chance = require('chance');
const plotHeatmap = require('../visualization/plotHeatmap');
const initGrid = require('./initGrid');
const spinFlipAlgorithm = require('./metropolisAlgorithm');
const monteCarloSweep = require('./monteCarloSweep');
const defaultParameters = require('./defaultParameters');
const animateSimulation = require('../visualization/animateSimulation');

module.exports = function () {
  let parameters = defaultParameters();
  let rng = Chance( parameters.seed );
  let grid = initGrid( parameters.n, rng );
  if ( parameters.showAnimation ) {
    plotHeatmap( grid, parameters );
    animateSimulation( grid, parameters, spinFlipAlgorithm, rng );
  } else {
    let sweep = 0;
    while ( sweep < parameters.nsweeps ) {
      monteCarloSweep( grid, parameters, spinFlipAlgorithm, rng );
      sweep++;
    }
    console.log(parameters);
  }
};
