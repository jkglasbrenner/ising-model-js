const pickSite = require('./pickSite');
const spinFlipEnergy = require('./spinFlipEnergy');

module.exports = function ( grid, parameters, spinFlipAlgorithm, rng ) {
  let ij = pickSite( parameters.gridSize, rng );
  let energyDifference = spinFlipEnergy( grid, ij[0], ij[1], parameters );
  let isSpinFlip = spinFlipAlgorithm( energyDifference, parameters, rng );
  if ( isSpinFlip ) {
    grid[ ij[ 0 ] ][ ij[ 1 ] ] *= -1;
    parameters.energy += energyDifference;
    parameters.magnetization += 2 * grid[ ij[ 0 ]][ ij[ 1 ]];
  }
};
