import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import roter from './router'
import store from './store'
import './permissions'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(roter)
myApp.use(store)

myApp.use(Quasar, {
  plugins: {
    Notify
  }
})

myApp.mount('#app')
