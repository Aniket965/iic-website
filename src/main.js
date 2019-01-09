import Vue from 'vue';
import Icon from 'vue-awesome';
import App from './App.vue';
import './registerServiceWorker';

Vue.component('v-icon', Icon);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
