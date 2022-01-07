<template>
  
  <MapView />
  <SearchBar />
  <MyLocationBtn />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';

import MapView from '@/components/mapview/MapView.vue';
import SearchBar from '@/components/searchBar/SearchBar.vue';
import MyLocationBtn from '@/components/myLocationBtn/MyLocationBtn.vue';

export default defineComponent({
  name: 'Home',
  components: { MapView, MyLocationBtn, SearchBar },
  setup() {

    usePlacesStore();

  }
});
</script>
