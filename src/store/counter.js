export default {
  state: {
    counter: 0,
  },
  getters: {
    computedCouner(state) {
      return state.counter * 10;
    },
  },
  mutations: {
    chanchCounter(state, payLoad) {
      state.counter += payLoad;
    },
  },
  actions: {
    asyncChanchCounter({ commit }, payLoad) {
      setTimeout(() => {
        commit('chanchCounter', payLoad.counterValue);
      }, payLoad.timeoutDaley);
    },
  },
};
