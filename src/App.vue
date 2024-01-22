<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Vue Todos</h1>
    </header>
    <TaskDetails :tasks="tasks" />
  </main>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { storeToRefs } from "pinia";
import TaskDetails from "@/components/TaskDetails.vue"

const taskStore = useTaskStore();

const { tasks } = storeToRefs(taskStore);
</script>

<style>
.tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
