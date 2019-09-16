wx.getLogManager = jest.fn(() => {
  return {
    debug: jest.fn(() => {}),
    info: jest.fn(() => {}),
    log: jest.fn(() => {}),
    warn: jest.fn(() => {}),
  };
});