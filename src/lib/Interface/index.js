
import Animation from './Animation';
import Background from './Background';
import Font from './Font';
import Interactive from './Interactive';
import NavigationBar from './NavigationBar';
import PullDown from './PullDown';
import Scroll from './Scroll';
import TabBar from './TabBar';

const api = [
  'setTopBarText', // 置顶
  'nextTick',
  'getMenuButtonBoundingClientRect', // 菜单
  'onWindowResize', // 窗口
  'offWindowResize', // 窗口
  'onKeyboardHeightChange', // 键盘
  'hideKeyboard', // 键盘
  'getSelectedTextRange', // 键盘
  ...Animation,
  ...Background,
  ...Font,
  ...Interactive,
  ...NavigationBar,
  ...PullDown,
  ...Scroll,
  ...TabBar,
];

export default api;
