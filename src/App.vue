<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Vue Todos</h1>
    </header>
    <div v-for="task in tasks" :key="task.id" class="tasks">
      <p>{{ task.id }}</p>
      <p>
        {{ task.title }}
      </p>
      <p>{{ task.isFav ? "fav" : "unfav" }}</p>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { storeToRefs } from "pinia";

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
