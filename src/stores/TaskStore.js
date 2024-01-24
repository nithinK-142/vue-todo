import { defineStore } from "pinia";

const BASE_URL = "http://localhost:3000/tasks";

export const useTaskStore = defineStore("todos", {
  state: () => ({
    tasks: [],
    filter: "",
    loading: false,
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },

    favCount() {
      return this.tasks.reduce(
        (prev, curr) => (curr.isFav ? prev + 1 : prev),
        0
      );
    },

    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      const res = await fetch(BASE_URL);
      const data = await res.json();
      this.tasks = data;
      this.loading = false;
    },

    async addTask(task) {
      this.tasks.push(task);

      const res = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) console.log(res.error);
    },

    async editTask(id, newTitle) {
      const task = this.tasks.find((t) => t.id === id);
      task.title = newTitle;

      const res = await fetch(BASE_URL + "/" + id, {
        method: "PATCH",
        body: JSON.stringify({ title: task.title }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) console.log(res.error);
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });

      const res = await fetch(BASE_URL + "/" + id, {
        method: "DELETE",
      });

      if (res.error) console.log(res.error);
    },

    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;

      const res = await fetch(BASE_URL + "/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) console.log(res.error);
    },
  },
});
