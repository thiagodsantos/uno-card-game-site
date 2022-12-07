import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/arya-blue/theme.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.use(router);

app.mount('#app')
