import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/arya-blue/theme.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import PrimeVue from 'primevue/config';
import messages from './locale';
import router from './router'

import './assets/main.css'

const i18n = createI18n({
  locale: 'enUS',
  fallbackLocale: 'enUS',
  messages,
})

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(i18n)
app.use(router)

app.mount('#app')
