const pickSite = require('./pickSite');
const monteCarloStep = require('./monteCarloStep');
const spinFlipEnergy = require('./spinFlipEnergy');

module.exports = function ( grid, parameters, spinFlipAlgorithm, rng ) {
  let numberSweeps = document.getElementById('numberSweeps');

  for (let step = 0; step < parameters.numberSites; step++) {
    monteCarloStep( grid, parameters, spinFlipAlgorithm, rng );
  }

  parameters.sweepNumber += 1;
  numberSweeps.innerText = parameters.sweepNumber;
};
