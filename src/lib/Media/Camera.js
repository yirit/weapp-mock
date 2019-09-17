
wx.createCameraContext = jest.fn(() => (
  {
    onCameraFrame: jest.fn(() => {}),
    startRecord: jest.fn(() => {}),
    stopRecord: jest.fn(() => {}),
    takePhoto: jest.fn(() => {}),
  }
));
