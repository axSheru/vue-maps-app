import axios from 'axios';
const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 4,
        language: 'es',
        access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
    }
});

export default searchApi;