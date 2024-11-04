import { createStore } from "vuex";
import state from "./modules/dolarState";
import actions from "./modules/actions";
import mutations from "./modules/mutations";

export default createStore({
    state,
    actions,
    mutations
});