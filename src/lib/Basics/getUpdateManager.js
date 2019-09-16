wx.getUpdateManager = jest.fn(() => ({
  applyUpdate: jest.fn(() => {
  }),
  onCheckForUpdate: jest.fn(() => {
  }),
  onUpdateFailed: jest.fn(() => {
  }),
  onUpdateReady: jest.fn(() => {
  }),
}));
