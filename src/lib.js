import vClass from './v-class';
import vStyle from './v-style';

export const VClass = vClass;
export const VStyle = vStyle;

export default {
  install
};

function install(Vue) {
  Vue.directive(vClass.name, vClass);
  Vue.directive(vStyle.name, vStyle);
}
