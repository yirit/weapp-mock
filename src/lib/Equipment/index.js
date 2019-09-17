const api = [
  'stopBeaconDiscovery',
  'startBeaconDiscovery',
  'onBeaconUpdate',
  'onBeaconServiceChange',
  'offBeaconUpdate',
  'offBeaconServiceChange',
  'getBeacons',

  'stopWifi',
  'startWifi',
  'setWifiList',
  'onWifiConnected',
  'onGetWifiList',
  'getWifiList',
  'getConnectedWifi',
  'connectWifi',

  'addPhoneContact',

  'writeBLECharacteristicValue',
  'readBLECharacteristicValue',
  'onBLEConnectionStateChange',
  'onBLECharacteristicValueChange',
  'notifyBLECharacteristicValueChange',
  'getBLEDeviceServices',
  'getBLEDeviceCharacteristics',
  'createBLEConnection',
  'closeBLEConnection',

  'stopBluetoothDevicesDiscovery',
  'startBluetoothDevicesDiscovery',
  'openBluetoothAdapter',
  'onBluetoothDeviceFound',
  'onBluetoothAdapterStateChange',
  'getConnectedBluetoothDevices',
  'getBluetoothDevices',
  'getBluetoothAdapterState',
  'closeBluetoothAdapter',

  'getBatteryInfoSync',
  'getBatteryInfo',

  'setClipboardData',
  'getClipboardData',

  'stopHCE',
  'startHCE',
  'sendHCEMessage',
  'onHCEMessage',
  'offHCEMessage',
  'getHCEState',

  'onNetworkStatusChange',
  'offNetworkStatusChange',
  'getNetworkType',

  'setScreenBrightness',
  'setKeepScreenOn',
  'onUserCaptureScreen',
  'offUserCaptureScreen',
  'getScreenBrightness',

  'makePhoneCall',
  'stopAccelerometer',
  'startAccelerometer',
  'onAccelerometerChange',
  'offAccelerometerChange',

  'stopCompass',
  'startCompass',
  'onCompassChange',
  'offCompassChange',

  'stopDeviceMotionListening',
  'startDeviceMotionListening',
  'onDeviceMotionChange',
  'offDeviceMotionChange',

  'stopGyroscope',
  'startGyroscope',
  'onGyroscopeChange',
  'offGyroscopeChange',

  'onMemoryWarning',

  'scanCode',

  'vibrateShort',
  'vibrateLong',
];

export default api;
