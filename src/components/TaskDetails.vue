<template>
  <div class="filter">
    <button @click="setFilter('all')">All Tasks</button>
    <button @click="setFilter('fav')">Fav Tasks</button>
  </div>
  <p v-if="filter === 'all'">You have {{ totalCount }} tasks left to do.</p>
  <p v-else-if="filter === 'fav'">
    You have {{ favCount }} favs left to do.
  </p>

  <div v-for="task in filteredTasks" :key="task.id" class="task-list">
    <div class="task">
      <h3>
        {{ task.title }}
      </h3>
      <div class="icons">
        <i class="material-icons">delete</i>
        <i class="material-icons">favorite</i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const { tasks, favs, favCount, totalCount } = defineProps([
  "tasks",
  "favs",
  "favCount",
  "totalCount",
]);

const filter = ref("all");

const setFilter = (value) => {
  filter.value = value;
};

const filteredTasks = computed(() => {
  if (filter.value === "all") return tasks;
  else if (filter.value === "fav") return favs;
});
</script>

<style scoped>
p {
  text-align: center;
}
</style>
