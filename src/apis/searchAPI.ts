import axios from 'axios';
export const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYXhzaGVydSIsImEiOiJja3h6azJiM3QwNHJoMm9sNHZybHk4cDR5In0.eD1Qm9nO7zzFjTgRGjWu8Q',
    }
});

// export default searchApi;