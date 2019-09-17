wx.downloadFile = jest.fn(() => (
  {
    abort: jest.fn(() => {}),
    offHeadersReceived: jest.fn(() => {}),
    offProgressUpdate: jest.fn(() => {}),
    onHeadersReceived: jest.fn(() => {}),
    onProgressUpdate: jest.fn(() => {}),
  }
));
