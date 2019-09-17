wx.createMapContext = jest.fn(() => (
  {
    getCenterLocation: jest.fn(() => {}),
    getRegion: jest.fn(() => {}),
    getRotate: jest.fn(() => {}),
    getScale: jest.fn(() => {}),
    getSkew: jest.fn(() => {}),
    includePoints: jest.fn(() => {}),
    moveToLocation: jest.fn(() => {}),
    translateMarker: jest.fn(() => {}),
  }
));
