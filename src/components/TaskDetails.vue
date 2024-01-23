<template>
  <div class="filter">
    <button @click="setFilter('all')">All Tasks</button>
    <button @click="setFilter('fav')">Fav Tasks</button>
  </div>
  <p>
    You have {{ displayCount }} {{ filter === "fav" ? "favs" : "tasks" }} left
    to do.
  </p>

  <div v-for="task in filteredTasks" :key="task.id" class="task-list">
    <div class="task">
      <h3>{{ task.title }}</h3>
      <div class="icons">
        <i @click="deleteTask(task.id)" class="material-icons">delete</i>
        <i @click="toggleFav(task.id)" class="material-icons">favorite</i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

const taskStore = useTaskStore();
const { deleteTask, toggleFav } = taskStore;
const { tasks, favs, favCount, totalCount } = storeToRefs(taskStore);

const filter = ref("all");

const setFilter = (newFilter) => {
  filter.value = newFilter;
};

const filteredTasks = computed(() => {
  return filter.value === "fav" ? favs.value : tasks.value;
});

const displayCount = computed(() => {
  return filter.value === "fav" ? favCount.value : totalCount.value;
});
</script>

<style scoped>
p {
  text-align: center;
}
</style>
