
wx.saveVideoToPhotosAlbum = jest.fn(() => {
});

wx.chooseVideo = jest.fn(() => {
});

wx.createVideoContext = jest.fn(() => (
  {
    exitFullScreen: jest.fn(() => {}),
    hideStatusBar: jest.fn(() => {}),
    pause: jest.fn(() => {}),
    play: jest.fn(() => {}),
    playbackRate: jest.fn(() => {}),
    requestFullScreen: jest.fn(() => {}),
    seek: jest.fn(() => {}),
    sendDanmu: jest.fn(() => {}),
    showStatusBar: jest.fn(() => {}),
    stop: jest.fn(() => {}),
  }
));
