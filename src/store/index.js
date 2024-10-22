import { createStore } from "vuex";
export const mutation = {
    SET_CURRENT_USER_PROFILE: "SET_CURRENT_USER_PROFILE",
};
export default createStore({
    state: {
        currentUserProfile: null,
    },
    getters: {
        currentUserProfile: (state) => state.currentUserProfile,
    },
    mutations: {
        [mutation.SET_CURRENT_USER_PROFILE]: (state, value) => {
            state.currentUserProfile = value;
        },
    },
    actions: {
        setCurrentUserProfile({ commit, dispatch, getters }, value) {
            commit(mutation.SET_CURRENT_USER_PROFILE, value);
        },
    },
    modules: {},
});
