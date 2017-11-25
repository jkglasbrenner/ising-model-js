const pickSite = require('./pickSite');
const monteCarloStep = require('./monteCarloStep');
const spinFlipEnergy = require('./spinFlipEnergy');

module.exports = function ( grid, parameters, spinFlipAlgorithm, rng ) {
  for (let step = 0; step < parameters.numberSites; step++) {
    monteCarloStep( grid, parameters, spinFlipAlgorithm, rng );
  }
};
