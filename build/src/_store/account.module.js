import {userService} from '../_userServices';
import {listService} from '../_listServices';
import {router} from '../_helpers';

const user = JSON.parse(localStorage.getItem('user'));
const list = JSON.parse(localStorage.getItem('list'));

const state = user ? {status: {loggedIn: true}, user} : {status: {}, user: null};

const actions = {
  login({dispatch, commit}, {username, password}) {
    commit('loginRequest', {username});

    userService.login(username, password)
      .then(
        user => {
          commit('loginSuccess', user);
          router.push('/admin');
        },
        error => {
          commit('loginFailure', error);
          dispatch('alert/error', error, {root: true});
        }
      );
  },
  logout({commit}) {
    commit('logout');
    userService.logout();
  },
  register({dispatch, commit}, user) {
    commit('registerRequest', user);

    userService.register(user)
      .then(
        user => {
          commit('registerSuccess', user);
          router.push('/login');
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', {root: true});
          })
        },
        error => {
          commit('registerFailure', error);
          dispatch('alert/error', error, {root: true});
        }
      );
  },
  listRegister({dispatch, commit}, list) {
    listService.listRegister(list)
    .then(
      list => {
        commit('listRegisterSuccess', list);
        router.push('/all');
        setTimeout(() => {
          // display success message after route change completes
          dispatch('alert/success', 'Registration successful', {root: true});
        })
      },
      error => {
        commit('registerFailure', error);
        dispatch('alert/error', error, {root: true});
      }
    );
  },
  update({dispatch, commit}, list) {
    listService.update(list)
      .then(
        list => {
          commit('listUpdateSuccess', list);
          router.push('/all');
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', {root: true});
          })
        },
        error => {
          commit('listUpdateSuccess', error);
          dispatch('alert/error', error, {root: true});
        }
      );
  }
};

const mutations = {
  loginRequest(state, user) {
    state.status = {loggingIn: true};
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = {loggedIn: true};
    state.user = user;
  },
  loginFailure(state) {
    state.status = {loginFailure: true};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest(state, user) {
    state.status = {registering: true};
  },
  registerSuccess(state, user) {
    state.status = {};
  },
  registerFailure(state, error) {
    state.status = {};
  },
  listRegisterSuccess(state, list) {
    state.status = {loggedIn: true};
  },
  listUpdateSuccess(state, list) {
    state.status = {loggedIn: true};
  }
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};