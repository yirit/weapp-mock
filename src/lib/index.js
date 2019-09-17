import './global';
import BasicsApi from './Basics/index';
import Route from './Route';
import Interface from './Interface';
import Network from './Network';

function setToWx(api) {
  api.forEach((item) => {
    global.wx[item] = jest.fn(() => {});
  });
}

setToWx(BasicsApi);
setToWx(Route);
setToWx(Interface);
setToWx(Network);

const wxMock = wx;

export default wxMock;
