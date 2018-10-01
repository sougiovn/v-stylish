import VClass from './v-class';
import VStyle from './v-style';

export const vClass = VClass;
export const vStyle = VStyle;

export default {
  install
};

function install(Vue) {
  Vue.directive(VClass.name, VClass);
  Vue.directive(VStyle.name, VStyle);
}
