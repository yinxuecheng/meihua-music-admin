import { createApp } from 'vue'
import { Quasar } from 'quasar'
import roter from './router'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(roter)

myApp.use(Quasar, {
  plugins: {}
})

myApp.mount('#app')
