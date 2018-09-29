import Vue from 'vue';
import Demo from './Demo';

import vStylish from './lib';

Vue.use(vStylish);

new Vue({
  el: '#app',
  render: (h) => h(Demo)
});