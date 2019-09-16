wx.getLogManager = jest.fn(() => ({
  debug: jest.fn(() => {
  }),
  info: jest.fn(() => {
  }),
  log: jest.fn(() => {
  }),
  warn: jest.fn(() => {
  }),
}));
