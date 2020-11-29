import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入样式
import '../src/assets/css/index.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')