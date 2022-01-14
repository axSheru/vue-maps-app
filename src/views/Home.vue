<template>
  
  <MapView />
  <SearchBar />
  <MyLocationBtn />
  <TripDetails />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';

import MapView from '@/components/mapview/MapView.vue';
import SearchBar from '@/components/searchBar/SearchBar.vue';
import MyLocationBtn from '@/components/myLocationBtn/MyLocationBtn.vue';
import TripDetails from '@/components/tripDetails/TripDetails.vue';

export default defineComponent({
  name: 'Home',
  components: { MapView, MyLocationBtn, SearchBar, TripDetails },
  setup() {

    usePlacesStore();

  }
});
</script>
