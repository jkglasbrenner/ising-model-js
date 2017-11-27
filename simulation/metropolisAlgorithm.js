const noUiSlider = require('nouislider');

module.exports = function ( energyDifference, parameters, rng ) {
  let isSpinFlip;
  let isEnergyLower = energyDifference <= 0;
  let temperature = document.getElementById('temperature');

  if ( isEnergyLower ) {
    isSpinFlip = true;
  } else {
    let chanceSpinFlip = Math.exp( - energyDifference / temperature.noUiSlider.get() );
    let randNumber = rng.floating( { min: 0, max: 1, fixed: 15 } );
    isSpinFlip = randNumber < chanceSpinFlip;
  }

  return isSpinFlip;
};
