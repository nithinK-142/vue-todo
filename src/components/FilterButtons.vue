<template>
  <div class="filter">
    <button @click="setFilter('all')">All Tasks</button>
    <button @click="setFilter('fav')">Fav Tasks</button>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";

const taskStore = useTaskStore();

const setFilter = (newFilter) => {
  taskStore.filter = newFilter;
};
</script>