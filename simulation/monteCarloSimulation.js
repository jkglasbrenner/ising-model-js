var Chance = require('chance');
var plotHeatmap = require('../visualization/plotHeatmap');
var initGrid = require('./initGrid');
var spinFlipAlgorithm = require('./metropolisAlgorithm');
var monteCarloSweep = require('./monteCarloSweep');
var defaultParameters = require('./defaultParameters');
var animateSimulation = require('../visualization/animateSimulation');

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
