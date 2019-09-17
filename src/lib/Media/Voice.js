
wx.stopVoice = jest.fn(() => {
});

wx.setInnerAudioOption = jest.fn(() => {
});

wx.playVoice = jest.fn(() => {
});

wx.pauseVoice = jest.fn(() => {
});

wx.getAvailableAudioSources = jest.fn(() => {
});

wx.createInnerAudioContext = jest.fn(() => (
  {
    destroy: jest.fn(() => {}),
    offCanplay: jest.fn(() => {}),
    offEnded: jest.fn(() => {}),
    offError: jest.fn(() => {}),
    offPause: jest.fn(() => {}),
    offPlay: jest.fn(() => {}),
    offSeeked: jest.fn(() => {}),
    offSeeking: jest.fn(() => {}),
    offStop: jest.fn(() => {}),
    offTimeUpdate: jest.fn(() => {}),
    offWaiting: jest.fn(() => {}),
    onCanplay: jest.fn(() => {}),
    onEnded: jest.fn(() => {}),
    onError: jest.fn(() => {}),
    onPause: jest.fn(() => {}),
    onPlay: jest.fn(() => {}),
    onSeeked: jest.fn(() => {}),
    onSeeking: jest.fn(() => {}),
    onStop: jest.fn(() => {}),
    onTimeUpdate: jest.fn(() => {}),
    onWaiting: jest.fn(() => {}),
    pause: jest.fn(() => {}),
    play: jest.fn(() => {}),
    seek: jest.fn(() => {}),
    stop: jest.fn(() => {}),
  }
));

wx.createAudioContext = jest.fn(() => (
  {
    pause: jest.fn(() => {}),
    play: jest.fn(() => {}),
    seek: jest.fn(() => {}),
    setSrc: jest.fn(() => {}),
  }
));
