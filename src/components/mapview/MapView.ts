import { defineComponent, onMounted, ref } from 'vue';
import { usePlacesStore } from '@/composables';
import mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();

        const initMap = () => {
            if ( !mapElement.value ) throw new Error('Elemento Div no existe.');
            if ( !userLocation.value ) throw new Error('UserLocation no existe.');

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

        }

        onMounted(() => {
            console.log(mapElement.value)
        })

        return {
            isUserLocationReady,
            mapElement,
        }
    }
})