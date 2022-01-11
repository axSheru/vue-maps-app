import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { isLoadingPlaces, places } = usePlacesStore();

        return {
            isLoadingPlaces,
            places,
        }

    }
});