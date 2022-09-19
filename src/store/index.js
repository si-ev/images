import { createStore } from 'vuex';
// import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

export default createStore({ 
    modules: {
        auth,
        images
    }
});
