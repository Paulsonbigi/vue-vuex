import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos"

Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        todos
    }
})
