
wx.getFileSystemManager = jest.fn(() => (
  {
    access: jest.fn(() => {}),
    accessSync: jest.fn(() => {}),
    appendFile: jest.fn(() => {}),
    appendFileSync: jest.fn(() => {}),
    copyFile: jest.fn(() => {}),
    copyFileSync: jest.fn(() => {}),
    getFileInfo: jest.fn(() => {}),
    getSavedFileList: jest.fn(() => {}),
    mkdir: jest.fn(() => {}),
    mkdirSync: jest.fn(() => {}),
    readdir: jest.fn(() => {}),
    readdirSync: jest.fn(() => {}),
    readFile: jest.fn(() => {}),
    readFileSync: jest.fn(() => {}),
    removeSavedFile: jest.fn(() => {}),
    rename: jest.fn(() => {}),
    renameSync: jest.fn(() => {}),
    rmdir: jest.fn(() => {}),
    rmdirSync: jest.fn(() => {}),
    saveFile: jest.fn(() => {}),
    saveFileSync: jest.fn(() => {}),
    stat: jest.fn(() => {}),
    statSync: jest.fn(() => (
      {
        isDirectory: jest.fn(() => {}),
        isFile: jest.fn(() => {}),
      }
    )),
    unlink: jest.fn(() => {}),
    unlinkSync: jest.fn(() => {}),
    unzip: jest.fn(() => {}),
    writeFile: jest.fn(() => {}),
    writeFileSync: jest.fn(() => {}),
  }
));


const api = [
  'saveFile',
  'removeSavedFile',
  'openDocument',
  'getSavedFileList',
  'getSavedFileInfo',
  'getFileInfo',
];

export default api;