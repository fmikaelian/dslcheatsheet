import Vue from 'vue'
import App from './App.vue'

import VueAnalytics from 'vue-analytics'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueAnalytics, {
  id: 'UA-129792553-1',
  trackEvent: true,
  commands: {
     download () {
        this.$ga.event('button', 'click', 'download', 1)
     }
  },
  autoTracking: {
    screenview: true
  },
  debug: {
    enabled: true, // default value
    trace: true, // default value
    sendHitTask: true // default value
  }
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
