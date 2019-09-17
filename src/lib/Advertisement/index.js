
wx.createRewardedVideoAd = jest.fn(() => (
  {
    destroy: jest.fn(() => {}),
    load: jest.fn(() => {}),
    offClose: jest.fn(() => {}),
    offError: jest.fn(() => {}),
    offLoad: jest.fn(() => {}),
    onClose: jest.fn(() => {}),
    onError: jest.fn(() => {}),
    onLoad: jest.fn(() => {}),
    show: jest.fn(() => {}),
  }
));

wx.createInterstitialAd = jest.fn(() => (
  {
    destroy: jest.fn(() => {}),
    load: jest.fn(() => {}),
    offClose: jest.fn(() => {}),
    offError: jest.fn(() => {}),
    offLoad: jest.fn(() => {}),
    onClose: jest.fn(() => {}),
    onError: jest.fn(() => {}),
    onLoad: jest.fn(() => {}),
    show: jest.fn(() => {}),
  }
));
