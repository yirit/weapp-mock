import './global';
import BasicsApi from './Basics/index';
import Route from './Route';
import Interface from './Interface';

function setToWx(api) {
  api.forEach((item) => {
    global.wx[item] = jest.fn(() => {});
  });
}

setToWx(BasicsApi);
setToWx(Route);
setToWx(Interface);

const wxMock = wx;

export default wxMock;
