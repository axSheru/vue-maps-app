<template>
    <div v-if="distance"
        class="trip-container column">
        <div class="col">Distancia: <strong>{{ distance }} kms.</strong></div>
        <div class="col">Duración: <strong>{{ duration }} minutos.</strong></div>
    </div>
</template>

<script lang="ts">
import { useMapStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TripDetails',
    setup() {

        const { distance, duration } = useMapStore();

        return {
            distance,
            duration,
        }

    }
});
</script>

<style scoped>
.trip-container {
    background-color: white;
    border-radius: 10px;
    bottom: 20px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 15px;
    left: 500px;
    padding: 10px;
    position: fixed;
    width: 240px;
}

strong {
    color: #42b983;
}
</style>