import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';

import HomeVue from '@/views/HomeView.vue';
import messages from '@/locale';
import router from '@/router';

import '@/assets/main.css';

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'enUS',
  fallbackLocale: 'enUS',
  messages,
});

const app = createApp(HomeVue);

app.use(createPinia());
app.use(PrimeVue);
app.use(i18n);
app.use(router);

app.mount('#app');
