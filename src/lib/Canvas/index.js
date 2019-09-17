
wx.createOffscreenCanvas = jest.fn(() => (
  {
    getContext: jest.fn(() => {}),
  }
));

wx.createCanvasContext = jest.fn(() => (
  {
    arc: jest.fn(() => {}),
    arcTo: jest.fn(() => {}),
    beginPath: jest.fn(() => {}),
    bezierCurveTo: jest.fn(() => {}),
    clearRect: jest.fn(() => {}),
    clip: jest.fn(() => {}),
    closePath: jest.fn(() => {}),
    createCircularGradient: jest.fn(() => {}),
    createLinearGradient: jest.fn(() => (
      {
        addColorStop: jest.fn(() => {}),
      }
    )),
    createPattern: jest.fn(() => {}),
    draw: jest.fn(() => {}),
    drawImage: jest.fn(() => {}),
    fill: jest.fn(() => {}),
    fillRect: jest.fn(() => {}),
    fillText: jest.fn(() => {}),
    lineTo: jest.fn(() => {}),
    measureText: jest.fn(() => {}),
    moveTo: jest.fn(() => {}),
    quadraticCurveTo: jest.fn(() => {}),
    rect: jest.fn(() => {}),
    restore: jest.fn(() => {}),
    rotate: jest.fn(() => {}),
    save: jest.fn(() => {}),
    scale: jest.fn(() => {}),
    setFillStyle: jest.fn(() => {}),
    setFontSize: jest.fn(() => {}),
    setGlobalAlpha: jest.fn(() => {}),
    setLineCap: jest.fn(() => {}),
    setLineDash: jest.fn(() => {}),
    setLineJoin: jest.fn(() => {}),
    setLineWidth: jest.fn(() => {}),
    setMiterLimit: jest.fn(() => {}),
    setShadow: jest.fn(() => {}),
    setStrokeStyle: jest.fn(() => {}),
    setTextAlign: jest.fn(() => {}),
    setTextBaseline: jest.fn(() => {}),
    setTransform: jest.fn(() => {}),
    stroke: jest.fn(() => {}),
    strokeRect: jest.fn(() => {}),
    strokeText: jest.fn(() => {}),
    transform: jest.fn(() => {}),
    translate: jest.fn(() => {}),
  }
));


const api = [
  'canvasToTempFilePath',
  'canvasPutImageData',
  'canvasGetImageData',
];

export default api;