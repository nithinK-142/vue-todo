<template>
  <div class="filter">
    <button @click="setFilter('all')">All Tasks</button>
    <button @click="setFilter('fav')">Fav Tasks</button>
  </div>
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

const { tasks, favs } = defineProps(["tasks", "favs"]);

const filter = ref("all");

const setFilter = (value) => {
  filter.value = value;
};

const filteredTasks = computed(() => {
  if (filter.value === "all") return tasks;
  else if (filter.value === "fav") return favs;
});
</script>
