(function (global, factory) {
            typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, (function () {
                        var current = global['weapp-mock'];
                        var exports = global['weapp-mock'] = factory();
                        exports.noConflict = function () { global['weapp-mock'] = current; return exports; };
            }()));
}(this, function () { 'use strict';

            var global$1 = (typeof global !== "undefined" ? global :
                        typeof self !== "undefined" ? self :
                        typeof window !== "undefined" ? window : {});

            var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

            commonjsGlobal.wx={};

            wx.getUpdateManager=jest.fn(function(){return {applyUpdate:jest.fn(function(){}),onCheckForUpdate:jest.fn(function(){}),onUpdateFailed:jest.fn(function(){}),onUpdateReady:jest.fn(function(){})}});

            wx.getRealtimeLogManager=jest.fn(function(){return {addFilterMsg:jest.fn(function(){}),error:jest.fn(function(){}),info:jest.fn(function(){}),setFilterMsg:jest.fn(function(){}),warn:jest.fn(function(){})}});

            var api=["canIUse","base64ToArrayBuffer","arrayBufferToBase64","getSystemInfoSync","getSystemInfo","getLaunchOptionsSync","onPageNotFound","onError","onAudioInterruptionEnd","onAudioInterruptionBegin","onAppShow","onAppHide","offPageNotFound","offError","offAudioInterruptionEnd","offAudioInterruptionBegin","offAppShow","offAppHide","setEnableDebug"];

            var api$1=["switchTab","reLaunch","redirectTo","navigateTo","navigateBack"];

            function _arrayWithoutHoles(arr) {
              if (Array.isArray(arr)) {
                for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
                  arr2[i] = arr[i];
                }

                return arr2;
              }
            }

            var arrayWithoutHoles = _arrayWithoutHoles;

            function _iterableToArray(iter) {
              if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
            }

            var iterableToArray = _iterableToArray;

            function _nonIterableSpread() {
              throw new TypeError("Invalid attempt to spread non-iterable instance");
            }

            var nonIterableSpread = _nonIterableSpread;

            function _toConsumableArray(arr) {
              return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
            }

            var toConsumableArray = _toConsumableArray;

            wx.createAnimation=jest.fn(function(){return {backgroundColor:jest.fn(function(){}),bottom:jest.fn(function(){}),export:jest.fn(function(){}),height:jest.fn(function(){}),left:jest.fn(function(){}),matrix:jest.fn(function(){}),matrix3d:jest.fn(function(){}),opacity:jest.fn(function(){}),right:jest.fn(function(){}),rotate:jest.fn(function(){}),rotate3d:jest.fn(function(){}),rotateX:jest.fn(function(){}),rotateY:jest.fn(function(){}),rotateZ:jest.fn(function(){}),scale:jest.fn(function(){}),scale3d:jest.fn(function(){}),scaleX:jest.fn(function(){}),scaleY:jest.fn(function(){}),scaleZ:jest.fn(function(){}),skew:jest.fn(function(){}),skewX:jest.fn(function(){}),skewY:jest.fn(function(){}),step:jest.fn(function(){}),top:jest.fn(function(){}),translate:jest.fn(function(){}),translate3d:jest.fn(function(){}),translateX:jest.fn(function(){}),translateY:jest.fn(function(){}),translateZ:jest.fn(function(){}),width:jest.fn(function(){})}});

            var api$2=["setBackgroundTextStyle","setBackgroundColor"];

            var api$3=["loadFontFace"];

            var api$4=["showToast","showModal","showLoading","showActionSheet","hideToast","hideLoading"];

            var api$5=["showNavigationBarLoading","setNavigationBarTitle","setNavigationBarColor","hideNavigationBarLoading"];

            var api$6=["stopPullDownRefresh","startPullDownRefresh"];

            var api$7=["pageScrollTo"];

            var api$8=["showTabBarRedDot","showTabBar","setTabBarStyle","setTabBarItem","setTabBarBadge","removeTabBarBadge","hideTabBarRedDot","hideTabBar"];

            var api$9=["setTopBarText","nextTick","getMenuButtonBoundingClientRect","onWindowResize","offWindowResize","onKeyboardHeightChange","hideKeyboard","getSelectedTextRange"].concat(toConsumableArray(api$2),toConsumableArray(api$3),toConsumableArray(api$4),toConsumableArray(api$5),toConsumableArray(api$6),toConsumableArray(api$7),toConsumableArray(api$8));

            wx.downloadFile=jest.fn(function(){return {abort:jest.fn(function(){}),offHeadersReceived:jest.fn(function(){}),offProgressUpdate:jest.fn(function(){}),onHeadersReceived:jest.fn(function(){}),onProgressUpdate:jest.fn(function(){})}});

            wx.request=jest.fn(function(){return {abort:jest.fn(function(){}),offHeadersReceived:jest.fn(function(){}),onHeadersReceived:jest.fn(function(){})}});

            wx.createUDPSocket=jest.fn(function(){return {bind:jest.fn(function(){}),close:jest.fn(function(){}),offClose:jest.fn(function(){}),offError:jest.fn(function(){}),offListening:jest.fn(function(){}),offMessage:jest.fn(function(){}),onClose:jest.fn(function(){}),onError:jest.fn(function(){}),onListening:jest.fn(function(){}),onMessage:jest.fn(function(){}),send:jest.fn(function(){})}});

            wx.uploadFile=jest.fn(function(){return {abort:jest.fn(function(){}),offHeadersReceived:jest.fn(function(){}),offProgressUpdate:jest.fn(function(){}),onHeadersReceived:jest.fn(function(){}),onProgressUpdate:jest.fn(function(){})}});

            wx.sendSocketMessage=jest.fn(function(){}),wx.onSocketOpen=jest.fn(function(){}),wx.onSocketMessage=jest.fn(function(){}),wx.onSocketError=jest.fn(function(){}),wx.onSocketClose=jest.fn(function(){}),wx.closeSocket=jest.fn(function(){}),wx.connectSocket=jest.fn(function(){return {close:jest.fn(function(){}),onClose:jest.fn(function(){}),onError:jest.fn(function(){}),onMessage:jest.fn(function(){}),onOpen:jest.fn(function(){}),send:jest.fn(function(){})}});

            var api$a=["stopLocalServiceDiscovery","startLocalServiceDiscovery","onLocalServiceResolveFail","onLocalServiceLost","onLocalServiceFound","onLocalServiceDiscoveryStop","offLocalServiceResolveFail","offLocalServiceLost","offLocalServiceFound","offLocalServiceDiscoveryStop"];

            var api$b=["setStorageSync","setStorage","removeStorageSync","removeStorage","getStorageSync","getStorageInfoSync","getStorageInfo","getStorage","clearStorageSync","clearStorage"];

            var api$c=["stopLocationUpdate","startLocationUpdateBackground","startLocationUpdate","openLocation","onLocationChange","offLocationChange","getLocation","chooseLocation"];

            var api$d=["updateShareMenu","showShareMenu","hideShareMenu","getShareInfo"];

            wx.createOffscreenCanvas=jest.fn(function(){return {getContext:jest.fn(function(){})}}),wx.createCanvasContext=jest.fn(function(){return {arc:jest.fn(function(){}),arcTo:jest.fn(function(){}),beginPath:jest.fn(function(){}),bezierCurveTo:jest.fn(function(){}),clearRect:jest.fn(function(){}),clip:jest.fn(function(){}),closePath:jest.fn(function(){}),createCircularGradient:jest.fn(function(){}),createLinearGradient:jest.fn(function(){return {addColorStop:jest.fn(function(){})}}),createPattern:jest.fn(function(){}),draw:jest.fn(function(){}),drawImage:jest.fn(function(){}),fill:jest.fn(function(){}),fillRect:jest.fn(function(){}),fillText:jest.fn(function(){}),lineTo:jest.fn(function(){}),measureText:jest.fn(function(){}),moveTo:jest.fn(function(){}),quadraticCurveTo:jest.fn(function(){}),rect:jest.fn(function(){}),restore:jest.fn(function(){}),rotate:jest.fn(function(){}),save:jest.fn(function(){}),scale:jest.fn(function(){}),setFillStyle:jest.fn(function(){}),setFontSize:jest.fn(function(){}),setGlobalAlpha:jest.fn(function(){}),setLineCap:jest.fn(function(){}),setLineDash:jest.fn(function(){}),setLineJoin:jest.fn(function(){}),setLineWidth:jest.fn(function(){}),setMiterLimit:jest.fn(function(){}),setShadow:jest.fn(function(){}),setStrokeStyle:jest.fn(function(){}),setTextAlign:jest.fn(function(){}),setTextBaseline:jest.fn(function(){}),setTransform:jest.fn(function(){}),stroke:jest.fn(function(){}),strokeRect:jest.fn(function(){}),strokeText:jest.fn(function(){}),transform:jest.fn(function(){}),translate:jest.fn(function(){})}});var api$e=["canvasToTempFilePath","canvasPutImageData","canvasGetImageData"];

            wx.getFileSystemManager=jest.fn(function(){return {access:jest.fn(function(){}),accessSync:jest.fn(function(){}),appendFile:jest.fn(function(){}),appendFileSync:jest.fn(function(){}),copyFile:jest.fn(function(){}),copyFileSync:jest.fn(function(){}),getFileInfo:jest.fn(function(){}),getSavedFileList:jest.fn(function(){}),mkdir:jest.fn(function(){}),mkdirSync:jest.fn(function(){}),readdir:jest.fn(function(){}),readdirSync:jest.fn(function(){}),readFile:jest.fn(function(){}),readFileSync:jest.fn(function(){}),removeSavedFile:jest.fn(function(){}),rename:jest.fn(function(){}),renameSync:jest.fn(function(){}),rmdir:jest.fn(function(){}),rmdirSync:jest.fn(function(){}),saveFile:jest.fn(function(){}),saveFileSync:jest.fn(function(){}),stat:jest.fn(function(){}),statSync:jest.fn(function(){return {isDirectory:jest.fn(function(){}),isFile:jest.fn(function(){})}}),unlink:jest.fn(function(){}),unlinkSync:jest.fn(function(){}),unzip:jest.fn(function(){}),writeFile:jest.fn(function(){}),writeFileSync:jest.fn(function(){})}});var api$f=["saveFile","removeSavedFile","openDocument","getSavedFileList","getSavedFileInfo","getFileInfo"];

            var api$g=["login","checkSession","navigateToMiniProgram","navigateBackMiniProgram","getAccountInfoSync","getUserInfo","reportMonitor","reportAnalytics","requestPayment","authorize","openSetting","getSetting","chooseAddress","openCard","addCard","chooseInvoiceTitle","chooseInvoice","startSoterAuthentication","checkIsSupportSoterAuthentication","checkIsSoterEnrolledInDevice","getWeRunData"];

            var api$h=["stopBeaconDiscovery","startBeaconDiscovery","onBeaconUpdate","onBeaconServiceChange","offBeaconUpdate","offBeaconServiceChange","getBeacons","stopWifi","startWifi","setWifiList","onWifiConnected","onGetWifiList","getWifiList","getConnectedWifi","connectWifi","addPhoneContact","writeBLECharacteristicValue","readBLECharacteristicValue","onBLEConnectionStateChange","onBLECharacteristicValueChange","notifyBLECharacteristicValueChange","getBLEDeviceServices","getBLEDeviceCharacteristics","createBLEConnection","closeBLEConnection","stopBluetoothDevicesDiscovery","startBluetoothDevicesDiscovery","openBluetoothAdapter","onBluetoothDeviceFound","onBluetoothAdapterStateChange","getConnectedBluetoothDevices","getBluetoothDevices","getBluetoothAdapterState","closeBluetoothAdapter","getBatteryInfoSync","getBatteryInfo","setClipboardData","getClipboardData","stopHCE","startHCE","sendHCEMessage","onHCEMessage","offHCEMessage","getHCEState","onNetworkStatusChange","offNetworkStatusChange","getNetworkType","setScreenBrightness","setKeepScreenOn","onUserCaptureScreen","offUserCaptureScreen","getScreenBrightness","makePhoneCall","stopAccelerometer","startAccelerometer","onAccelerometerChange","offAccelerometerChange","stopCompass","startCompass","onCompassChange","offCompassChange","stopDeviceMotionListening","startDeviceMotionListening","onDeviceMotionChange","offDeviceMotionChange","stopGyroscope","startGyroscope","onGyroscopeChange","offGyroscopeChange","onMemoryWarning","scanCode","vibrateShort","vibrateLong"];

            wx.createWorker=jest.fn(function(){return {onMessage:jest.fn(function(){}),postMessage:jest.fn(function(){}),terminate:jest.fn(function(){})}});

            var api$i=["getExtConfigSync","getExtConfig"];

            wx.createSelectorQuery=jest.fn(function(){return {exec:jest.fn(function(){}),in:jest.fn(function(){}),select:jest.fn(function(){return {boundingClientRect:jest.fn(function(){}),context:jest.fn(function(){}),fields:jest.fn(function(){}),node:jest.fn(function(){}),scrollOffset:jest.fn(function(){})}}),selectAll:jest.fn(function(){return {boundingClientRect:jest.fn(function(){}),context:jest.fn(function(){}),fields:jest.fn(function(){}),node:jest.fn(function(){}),scrollOffset:jest.fn(function(){})}}),selectViewport:jest.fn(function(){})}}),wx.createIntersectionObserver=jest.fn(function(){return {disconnect:jest.fn(function(){}),observe:jest.fn(function(){}),relativeTo:jest.fn(function(){}),relativeToViewport:jest.fn(function(){})}});

            wx.createRewardedVideoAd=jest.fn(function(){return {destroy:jest.fn(function(){}),load:jest.fn(function(){}),offClose:jest.fn(function(){}),offError:jest.fn(function(){}),offLoad:jest.fn(function(){}),onClose:jest.fn(function(){}),onError:jest.fn(function(){}),onLoad:jest.fn(function(){}),show:jest.fn(function(){})}}),wx.createInterstitialAd=jest.fn(function(){return {destroy:jest.fn(function(){}),load:jest.fn(function(){}),offClose:jest.fn(function(){}),offError:jest.fn(function(){}),offLoad:jest.fn(function(){}),onClose:jest.fn(function(){}),onError:jest.fn(function(){}),onLoad:jest.fn(function(){}),show:jest.fn(function(){})}});

            function setToWx(api){api.forEach(function(item){global$1.wx[item]=jest.fn(function(){});});}setToWx(api),setToWx(api$1),setToWx(api$9),setToWx(api$a),setToWx(api$b),setToWx(api$c),setToWx(api$d),setToWx(api$e),setToWx(api$f),setToWx(api$g),setToWx(api$h),setToWx(api$i);var wxMock=wx;

            return wxMock;

}));
//# sourceMappingURL=weapp-mock.js.map
