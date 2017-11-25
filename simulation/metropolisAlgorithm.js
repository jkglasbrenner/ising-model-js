module.exports = function ( energyDifference, temperature, rng ) {
  let isSpinFlip;
  let isEnergyLower = energyDifference <= 0;

  if ( isEnergyLower ) {
    isSpinFlip = true;
  } else {
    let chanceSpinFlip = Math.exp(- energyDifference / temperature);
    let randNumber = rng.floating( { min: 0, max: 1, fixed: 15 } );
    isSpinFlip = randNumber < chanceSpinFlip;
  }

  return isSpinFlip;
};
