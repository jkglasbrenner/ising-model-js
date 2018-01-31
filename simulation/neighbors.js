const mod = require('../math/mod');

module.exports = function ( x, y, n, secondNN ) {
  let neighborhood;
  if ( secondNN ) {
    neighborhood = [
      [ mod( x - 1, n ), mod( y + 1, n ) ],
      [ mod( x + 1, n ), mod( y + 1, n ) ],
      [ mod( x - 1, n ), mod( y - 1, n ) ],
      [ mod( x + 1, n ), mod( y - 1, n ) ]
    ];
  } else {
    neighborhood = [
      [ x, mod( y + 1, n ) ],
      [ x, mod( y - 1, n ) ],
      [ mod( x + 1, n ), y ],
      [ mod( x - 1, n ), y ]
    ];
  }

  return neighborhood;
};
