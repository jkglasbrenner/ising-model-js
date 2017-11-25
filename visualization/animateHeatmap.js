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
  let transition = { duration: 0 };
  let frame = {
    duration: parameters.frameDelay,
    redraw: parameters.redrawFrames
  };

  Plotly.animate(
    parameters.heatmapID,
    { data: data },
    { transition: transition, frame: frame }
  );

};
