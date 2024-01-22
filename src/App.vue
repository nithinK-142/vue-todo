<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pineapple" />
      <h1>Vue Todos</h1>
    </header>
    <TaskDetails :tasks="tasks" :favs="favs" />
  </main>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { storeToRefs } from "pinia";
import TaskDetails from "@/components/TaskDetails.vue";

const taskStore = useTaskStore();

const { tasks, favs } = storeToRefs(taskStore);
</script>
