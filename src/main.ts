import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYXhzaGVydSIsImEiOiJja3h6azJiM3QwNHJoMm9sNHZybHk4cDR5In0.eD1Qm9nO7zzFjTgRGjWu8Q';

if ( !navigator.geolocation ) {
    alert("Tu navegador no soporta el GeoLocation");
    throw new Error("Tu navegador no soporta el GeoLocation");
}

createApp(App).use(store).use(router).mount('#app')
