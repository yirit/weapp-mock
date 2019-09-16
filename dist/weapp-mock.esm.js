var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

commonjsGlobal.wx={};

wx.getUpdateManager=jest.fn(function(){return {applyUpdate:jest.fn(function(){}),onCheckForUpdate:jest.fn(function(){}),onUpdateFailed:jest.fn(function(){}),onUpdateReady:jest.fn(function(){})}});

wx.getRealtimeLogManager=jest.fn(function(){return {addFilterMsg:jest.fn(function(){}),error:jest.fn(function(){}),info:jest.fn(function(){}),setFilterMsg:jest.fn(function(){}),warn:jest.fn(function(){})}});

var api=["canIUse","base64ToArrayBuffer","arrayBufferToBase64","getSystemInfoSync","getSystemInfo","getLaunchOptionsSync","onPageNotFound","onError","onAudioInterruptionEnd","onAudioInterruptionBegin","onAppShow","onAppHide","offPageNotFound","offError","offAudioInterruptionEnd","offAudioInterruptionBegin","offAppShow","offAppHide","setEnableDebug"];

function setToWx(api){api.forEach(function(item){global$1.wx[item]=jest.fn(function(){});});}setToWx(api);var wxMock=wx;

export default wxMock;
//# sourceMappingURL=weapp-mock.esm.js.map
