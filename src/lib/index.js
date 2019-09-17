import './global';
import BasicsApi from './Basics/index';
import Route from './Route';
import Interface from './Interface';
import Network from './Network';
import DataCache from './DataCache';
import Location from './Location';
import Share from './Share';
import Canvas from './Canvas';
import File from './File';
import OpenInterface from './OpenInterface';

function setToWx(api) {
  api.forEach((item) => {
    global.wx[item] = jest.fn(() => {});
  });
}

setToWx(BasicsApi);
setToWx(Route);
setToWx(Interface);
setToWx(Network);
setToWx(DataCache);
setToWx(Location);
setToWx(Share);
setToWx(Canvas);
setToWx(File);
setToWx(OpenInterface);

const wxMock = wx;

export default wxMock;
