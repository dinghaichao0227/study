import { defineStore } from 'pinia';

export const countState = defineStore('user', {
  state: () => {
    return {
      user: '丁海超',
    };
  },
  getters: {
    add: (state) => {
      return state.user + 'dinghaichao';
    },
  },
  actions: {
    handleValue(newValue) {
      this.user = newValue;
    },
  },
});
