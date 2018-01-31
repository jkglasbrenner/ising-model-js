module.exports = function () {
  const defaultParameters = {
    showAnimation: true,
    seed: Math.floor(Math.random() * Math.pow(2, 31)),
    nsweeps: 1000,
    n: 100,
    colorscale: 'YlGnBu',
    heatmapID: 'isingModel',
    frameDelay: 0,
    redrawFrames: true,
    energy: 0.0,
    magnetization: 0.0,
    exchangeParameter: 1.0,
    exchangeParameterTwo: 1.0,
    secondNN: true
  };
  defaultParameters.numberSites = Math.pow(defaultParameters.n, 2);

  return defaultParameters;
};
