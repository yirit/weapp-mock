wx.sendSocketMessage = jest.fn(() => {
});

wx.onSocketOpen = jest.fn(() => {
});

wx.onSocketMessage = jest.fn(() => {
});

wx.onSocketError = jest.fn(() => {
});

wx.onSocketClose = jest.fn(() => {
});

wx.closeSocket = jest.fn(() => {
});

wx.connectSocket = jest.fn(() => (
  {
    close: jest.fn(() => {}),
    onClose: jest.fn(() => {}),
    onError: jest.fn(() => {}),
    onMessage: jest.fn(() => {}),
    onOpen: jest.fn(() => {}),
    send: jest.fn(() => {}),
  }
));
