const neighbors = require('./neighbors');

module.exports = function ( grid, i, j, parameters ) {
  let indicesSiteNeighbors = neighbors( i, j, parameters.n );
  let siteSpin = grid[ i ][ j ];
  let sumNeighborSpins = 0.0;
  for ( let index of indicesSiteNeighbors ) {
    sumNeighborSpins += grid[ index[ 0 ] ][ index[ 1 ] ];
  }
  let deltaE = 2.0 * parameters.exchangeParameter * siteSpin * sumNeighborSpins;

  return deltaE;
};
