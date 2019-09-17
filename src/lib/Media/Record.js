
wx.stopRecord = jest.fn(() => {
});

wx.startRecord = jest.fn(() => {
});

wx.getRecorderManager = jest.fn(() => (
  {
    onError: jest.fn(() => {}),
    onFrameRecorded: jest.fn(() => {}),
    onInterruptionBegin: jest.fn(() => {}),
    onInterruptionEnd: jest.fn(() => {}),
    onPause: jest.fn(() => {}),
    onResume: jest.fn(() => {}),
    onStart: jest.fn(() => {}),
    onStop: jest.fn(() => {}),
    pause: jest.fn(() => {}),
    resume: jest.fn(() => {}),
    start: jest.fn(() => {}),
    stop: jest.fn(() => {}),
  }
));
