module.exports = function ( grid, parameters ) {
  let data = [
    {
      z: grid,
      type: 'heatmap',
      colorscale: parameters.colorscale,
      zmin: -1,
      zmax: 1
    }
  ];
  Plotly.newPlot( parameters.heatmapID, data );
};
