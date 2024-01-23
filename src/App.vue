<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pineapple" />
      <h1>Vue Todos</h1>
    </header>
    <div class="new-task-form">
      <TaskForm />
    </div>
    <TaskDetails />
  </main>
</template>

<script setup>
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
</script>
