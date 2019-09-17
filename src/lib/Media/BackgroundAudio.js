
wx.stopBackgroundAudio = jest.fn(() => {
});

wx.seekBackgroundAudio = jest.fn(() => {
});

wx.playBackgroundAudio = jest.fn(() => {
});

wx.pauseBackgroundAudio = jest.fn(() => {
});

wx.onBackgroundAudioStop = jest.fn(() => {
});

wx.onBackgroundAudioPlay = jest.fn(() => {
});

wx.onBackgroundAudioPause = jest.fn(() => {
});

wx.getBackgroundAudioPlayerState = jest.fn(() => {
});

wx.getBackgroundAudioManager = jest.fn(() => (
  {
    onCanplay: jest.fn(() => {}),
    onEnded: jest.fn(() => {}),
    onError: jest.fn(() => {}),
    onNext: jest.fn(() => {}),
    onPause: jest.fn(() => {}),
    onPlay: jest.fn(() => {}),
    onPrev: jest.fn(() => {}),
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
