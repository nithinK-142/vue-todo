<template>
  <FilterButtons />
  <TaskCount />
  <div class="loading" v-if="loading">Loading tasks...</div>

  <div v-for="task in filteredTasks" :key="task.id" class="task-list">
    <Task :task="task" />
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import FilterButtons from "./FilterButtons.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import TaskCount from "./TaskCount.vue";
import Task from "./Task.vue";

const taskStore = useTaskStore();

taskStore.getTasks();

const { filter, tasks, loading, favs } = storeToRefs(taskStore);

const filteredTasks = computed(() => {
  return filter.value === "fav" ? favs.value : tasks.value;
});
</script>
