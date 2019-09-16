wx.getUpdateManager = jest.fn(() => {
  return {
    applyUpdate: jest.fn(() => {}),
    onCheckForUpdate: jest.fn(() => {}),
    onUpdateFailed: jest.fn(() => {}),
    onUpdateReady: jest.fn(() => {}),
  };
});