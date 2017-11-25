module.exports = function ( n, rng ) {
  let maxIndex = n - 1;
  let i = rng.integer( { min: 0, max: maxIndex } );
  let j = rng.integer( { min: 0, max: maxIndex } );

  return [i, j];
};
