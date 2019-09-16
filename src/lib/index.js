import './global';
import BasicsApi from './Basics/index';

function setToWx(api) {
  api.forEach((item) => {
    global.wx[item] = jest.fn(() => {});
  });
}

setToWx(BasicsApi);

const wxMock = wx;

export default wxMock;
