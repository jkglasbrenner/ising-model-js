const pickSite = require('./pickSite');
const spinFlipEnergy = require('./spinFlipEnergy');

module.exports = function ( grid, parameters, spinFlipAlgorithm, rng ) {
  let ij = pickSite( parameters.n, rng );
  let energyDifference = spinFlipEnergy( grid, ij[0], ij[1], parameters );
  let isSpinFlip = spinFlipAlgorithm( energyDifference, parameters.temperature,
                                      rng );
  if ( isSpinFlip ) {
    grid[ ij[ 0 ] ][ ij[ 1 ] ] *= -1;
    parameters.energy += energyDifference;
  }
};
