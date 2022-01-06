<template>
  
  <MapView />
  <MyLocationBtn />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';

import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/myLocationBtn/MyLocationBtn.vue';

export default defineComponent({
  name: 'Home',
  components: { MapView, MyLocationBtn },
  setup() {

    usePlacesStore();

  }
});
</script>
