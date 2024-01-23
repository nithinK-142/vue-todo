<template>
  <header>
    <a @click.prevent="taskStore.$reset">
      <img src="../assets/pinia-logo.svg" alt="pineapple" />
    </a>
    <h1>Vue Todos</h1>
  </header>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
const taskStore = useTaskStore();
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
