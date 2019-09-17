wx.createUDPSocket = jest.fn(() => (
  {
    bind: jest.fn(() => {}),
    close: jest.fn(() => {}),
    offClose: jest.fn(() => {}),
    offError: jest.fn(() => {}),
    offListening: jest.fn(() => {}),
    offMessage: jest.fn(() => {}),
    onClose: jest.fn(() => {}),
    onError: jest.fn(() => {}),
    onListening: jest.fn(() => {}),
    onMessage: jest.fn(() => {}),
    send: jest.fn(() => {}),
  }
));
