var pickSite = require('./pickSite');
var monteCarloStep = require('./monteCarloStep');
var spinFlipEnergy = require('./spinFlipEnergy');

module.exports = function ( grid, parameters, spinFlipAlgorithm, rng ) {
  for (let step = 0; step < parameters.numberSites; step++) {
    monteCarloStep( grid, parameters, spinFlipAlgorithm, rng );
  }
};
