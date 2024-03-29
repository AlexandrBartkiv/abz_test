import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css"
import './styles/styles.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
createApp(App).use(Quasar, quasarUserOptions).mount('#app')
