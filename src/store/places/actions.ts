import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        // TODO: Colocar loading
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', coords),
            ( err ) => {
                console.log(err)
                throw new Error("No GeoLocation :(");
                
            }
        )
    }
}



export default actions;