wx.request = jest.fn(() => (
  {
    abort: jest.fn(() => {}),
    offHeadersReceived: jest.fn(() => {}),
    onHeadersReceived: jest.fn(() => {}),
  }
));
