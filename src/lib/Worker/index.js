
wx.createWorker = jest.fn(() => (
  {
    onMessage: jest.fn(() => {}),
    postMessage: jest.fn(() => {}),
    terminate: jest.fn(() => {}),
  }
));
