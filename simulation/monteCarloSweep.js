const pickSite = require('./pickSite');
const monteCarloStep = require('./monteCarloStep');
const spinFlipEnergy = require('./spinFlipEnergy');

module.exports = function ( grid, parameters, spinFlipAlgorithm, rng ) {
  let numberSweeps = document.getElementById('numberSweeps');
  let averageMagnetization = document.getElementById('averageMagnetization');

  for (let step = 0; step < parameters.numberSites; step++) {
    monteCarloStep( grid, parameters, spinFlipAlgorithm, rng );
  }

  let nSweeps = Number(numberSweeps.innerText) + 1;
  if ( nSweeps > parameters.burnInSteps ) {
    let avgMag = Number(averageMagnetization.innerText) + (parameters.magnetization * 1.0 - Number(averageMagnetization.innerText)) / Number(nSweeps - parameters.burnInSteps);
    averageMagnetization.innerText = avgMag;
  } else {
    averageMagnetization.innerText = parameters.magnetization;
  }
  numberSweeps.innerText = nSweeps;
};
