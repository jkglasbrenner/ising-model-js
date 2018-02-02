const neighbors = require('./neighbors');

module.exports = function ( grid, i, j, parameters ) {
  let exchangeParameter = document.getElementById('exchange1NN');
  let exchangeParameterTwo = document.getElementById('exchange2NN');
  let indices1NNSiteNeighbors = neighbors( i, j, parameters.gridSize, false );
  let siteSpin = grid[ i ][ j ];
  let sum1NNNeighborSpins = 0.0;
  for ( let index of indices1NNSiteNeighbors ) {
    sum1NNNeighborSpins += grid[ index[ 0 ] ][ index[ 1 ] ];
  }
  let deltaE = 2.0 * exchangeParameter.noUiSlider.get() * siteSpin * sum1NNNeighborSpins;
  if ( parameters.secondNN ) {
    let indices2NNSiteNeighbors = neighbors( i, j, parameters.gridSize, true );
    let sum2NNNeighborSpins = 0.0;
    for ( let index of indices2NNSiteNeighbors ) {
      sum2NNNeighborSpins += grid[ index[ 0 ] ][ index[ 1 ] ];
    }
    deltaE += 2.0 * exchangeParameterTwo.noUiSlider.get() * siteSpin * sum2NNNeighborSpins;
  }

  return deltaE;
};
