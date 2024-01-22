import { defineStore } from "pinia";

export const useTaskStore = defineStore("todos", {
  state: () => ({
    tasks: [
      { id: 1, title: "get milk", isFav: false },
      { id: 2, title: "buy bread", isFav: true },
    ],
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
});
