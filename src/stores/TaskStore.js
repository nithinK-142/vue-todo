import { defineStore } from "pinia";

export const useTaskStore = defineStore("todos", {
  state: () => ({
    tasks: [
      { id: 1, title: "get milk", isFav: false },
      { id: 2, title: "buy bread", isFav: true },
    ],
  }),
});
