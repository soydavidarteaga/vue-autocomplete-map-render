import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue'
import App from './App.vue'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBEbY8kluEYZJe4c9T6W_ougIDh1oTyPXM'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
