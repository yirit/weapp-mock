wx.getRealtimeLogManager = jest.fn(() => {
  return {
    addFilterMsg: jest.fn(() => {}),
    error: jest.fn(() => {}),
    info: jest.fn(() => {}),
    setFilterMsg: jest.fn(() => {}),
    warn: jest.fn(() => {}),
  };
});