
wx.createLivePusherContext = jest.fn(() => (
  {
    pause: jest.fn(() => {}),
    pauseBGM: jest.fn(() => {}),
    playBGM: jest.fn(() => {}),
    resume: jest.fn(() => {}),
    resumeBGM: jest.fn(() => {}),
    setBGMVolume: jest.fn(() => {}),
    snapshot: jest.fn(() => {}),
    start: jest.fn(() => {}),
    startPreview: jest.fn(() => {}),
    stop: jest.fn(() => {}),
    stopBGM: jest.fn(() => {}),
    stopPreview: jest.fn(() => {}),
    switchCamera: jest.fn(() => {}),
    toggleTorch: jest.fn(() => {}),
  }
));

wx.createLivePlayerContext = jest.fn(() => (
  {
    exitFullScreen: jest.fn(() => {}),
    mute: jest.fn(() => {}),
    pause: jest.fn(() => {}),
    play: jest.fn(() => {}),
    requestFullScreen: jest.fn(() => {}),
    resume: jest.fn(() => {}),
    snapshot: jest.fn(() => {}),
    stop: jest.fn(() => {}),
  }
));
