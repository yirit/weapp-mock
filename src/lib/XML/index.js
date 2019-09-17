
wx.createSelectorQuery = jest.fn(() => (
  {
    exec: jest.fn(() => {}),
    in: jest.fn(() => {}),
    select: jest.fn(() => (
      {
        boundingClientRect: jest.fn(() => {}),
        context: jest.fn(() => {}),
        fields: jest.fn(() => {}),
        node: jest.fn(() => {}),
        scrollOffset: jest.fn(() => {}),
      }
    )),
    selectAll: jest.fn(() => (
      {
        boundingClientRect: jest.fn(() => {}),
        context: jest.fn(() => {}),
        fields: jest.fn(() => {}),
        node: jest.fn(() => {}),
        scrollOffset: jest.fn(() => {}),
      }
    )),
    selectViewport: jest.fn(() => {}),
  }
));

wx.createIntersectionObserver = jest.fn(() => (
  {
    disconnect: jest.fn(() => {}),
    observe: jest.fn(() => {}),
    relativeTo: jest.fn(() => {}),
    relativeToViewport: jest.fn(() => {}),
  }
));
