import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

components.forEach(component => app.component(component.name, component));

app.mount('#app')
