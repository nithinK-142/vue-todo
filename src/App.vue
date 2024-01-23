<template>
  <main>
    <Header />
    <div class="new-task-form">
      <TaskForm />
    </div>
    <TaskList />
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
</script>
