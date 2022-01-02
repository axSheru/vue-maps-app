import { defineComponent, onMounted, ref } from 'vue';
import { usePlacesStore } from '@/composables';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();

        onMounted(() => {
            console.log(mapElement.value)
        })

        return {
            isUserLocationReady,
            mapElement,
        }
    }
})