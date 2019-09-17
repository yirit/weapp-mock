import './global';
import BasicsApi from './Basics/index';
import Route from './Route';

function setToWx(api) {
  api.forEach((item) => {
    global.wx[item] = jest.fn(() => {});
  });
}

setToWx(BasicsApi);
setToWx(Route);

const wxMock = wx;

export default wxMock;
