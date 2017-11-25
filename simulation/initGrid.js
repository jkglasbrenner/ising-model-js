module.exports = function ( n, rng ) {
  let grid = [];
  let gridRow = [];
  for ( let i = 0; i < n; i++ ) {
    gridRow = [];
    for ( let j = 0; j < n; j++ ) {
      let spinDirection = rng.pickone( [ -1, 1 ] );
      gridRow.push( spinDirection );
    }
    grid.push( gridRow );
  }

  return grid;
};
