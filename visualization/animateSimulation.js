// Use of toRecursiveAnim adapted from
// https://tkowal.wordpress.com/2014/09/07/functional-javascript-passing-additional-arguments-to-callback/

const initGrid = require('../simulation/initGrid');
const plotHeatmap = require('./plotHeatmap');
const animateHeatmap = require('./animateHeatmap');
const monteCarloSweep = require('../simulation/monteCarloSweep');

let requestID;
let startPause = document.getElementById('startPauseButton');
let resetButton = document.getElementById('resetButton');
let gridSize = document.getElementById('gridSize');
let numberSweeps = document.getElementById('numberSweeps');
let averageMagnetization = document.getElementById('averageMagnetization');

const toRecursiveAnim = function ( callback, grid, parameters, spinFlipAlgorithm,
                                   rng ) {
  return function (ts) {
    callback( ts, grid, parameters, spinFlipAlgorithm, rng );
  };
};

const simulation = function( timestamp, grid, parameters, spinFlipAlgorithm,
                             rng ) {
  if (startPause.innerHTML === "Pause") {
    monteCarloSweep( grid, parameters, spinFlipAlgorithm, rng );
    animateHeatmap( grid, parameters );
    requestAnimationFrame( toRecursiveAnim( simulation, grid, parameters,
                                            spinFlipAlgorithm, rng ) );
  } else if ( resetButton.innerHTML === "Resetting" ) {
    parameters.gridSize = gridSize.noUiSlider.get();
    parameters.numberSites = Math.pow( parameters.gridSize, 2 );
    grid = initGrid( parameters, rng );
    numberSweeps.innerText = 0;
    averageMagnetization.innerText = parameters.magnetization;
    resetButton.innerHTML = "Reset";
    plotHeatmap( grid, parameters );
    requestAnimationFrame( toRecursiveAnim( simulation, grid, parameters,
                                            spinFlipAlgorithm, rng ) );
  } else {
    requestAnimationFrame( toRecursiveAnim( simulation, grid, parameters,
                                            spinFlipAlgorithm, rng ) );
  }
};

module.exports = function ( grid, parameters, spinFlipAlgorithm, rng ) {
  requestAnimationFrame( toRecursiveAnim( simulation, grid, parameters,
                                          spinFlipAlgorithm, rng ) );
};
