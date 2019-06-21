import { listService } from '../_listServices';

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        listService.getAll()
            .then(
                lists => commit('getAllSuccess', lists),
                error => commit('getAllFailure', error)
            );
    },
    /*
    delete({ commit }, id) {
        commit('deleteRequest', id);

        userService.delete(id)
            .then(
                user => commit('deleteSuccess', id),
                error => commit('deleteSuccess', { id, error: error.toString() })
            );
    }
    */
};

const mutations = {
  getAllRequest(state) {
    state.all = { loading: true };
  },
  getAllSuccess(state, lists) {
    state.all = { items: lists };
  },
  getAllFailure(state, error) {
    state.all = { error };
  },
};

export const lists = {
    namespaced: true,
    state,
    actions,
    mutations
};
