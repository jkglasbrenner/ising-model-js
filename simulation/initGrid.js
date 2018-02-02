module.exports = function ( parameters, rng ) {
  let grid = [];
  let gridRow = [];
  parameters.magnetization = 0;
  for ( let i = 0; i < parameters.gridSize; i++ ) {
    gridRow = [];
    for ( let j = 0; j < parameters.gridSize; j++ ) {
      let spinDirection = rng.pickone( [ -1, 1 ] );
      gridRow.push( spinDirection );
      parameters.magnetization += spinDirection;
    }
    grid.push( gridRow );
  }

  return grid;
};
