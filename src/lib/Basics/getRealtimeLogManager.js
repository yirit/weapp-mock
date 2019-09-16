wx.getRealtimeLogManager = jest.fn(() => ({
  addFilterMsg: jest.fn(() => {
  }),
  error: jest.fn(() => {
  }),
  info: jest.fn(() => {
  }),
  setFilterMsg: jest.fn(() => {
  }),
  warn: jest.fn(() => {
  }),
}));
