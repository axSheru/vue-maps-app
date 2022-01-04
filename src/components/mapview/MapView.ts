import { defineComponent, onMounted, ref, watch } from 'vue';
import { usePlacesStore } from '@/composables';
import mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Elemento Div no existe.');
            if ( !userLocation.value ) throw new Error('UserLocation no existe.');

            await Promise.resolve();

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new mapboxgl.Popup({ offset: [ 0, -40 ] })
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>¡Aquí estoy!</h4>
                    <p>Actualmente en Puebla</p>
                    <p>${ userLocation.value }</p>
                `)

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map );

        }

        onMounted(() => {
            if ( isUserLocationReady.value )
                return initMap();
        });

        watch( isUserLocationReady, ( newVal ) => {
            if ( isUserLocationReady.value ) initMap();
        })

        return {
            isUserLocationReady,
            mapElement,
        }
    }
})