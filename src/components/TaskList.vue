<template>
  <FilterButtons />
  <TaskCount />
  <div class="loading" v-if="loading">Loading tasks...</div>

  <div v-for="task in filteredTasks" :key="task.id" class="task-list">
    <div class="task">
      <h3>{{ task.title }}</h3>
      <div class="icons">
        <i @click="deleteTask(task.id)" class="material-icons">delete</i>
        <i
          @click="toggleFav(task.id)"
          :class="{ active: task.isFav }"
          class="material-icons"
          >favorite</i
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import FilterButtons from "./FilterButtons.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import TaskCount from "./TaskCount.vue";

const taskStore = useTaskStore();
const { getTasks, deleteTask, toggleFav } = taskStore;

getTasks();

const { filter, tasks, loading, favs } = storeToRefs(taskStore);

const filteredTasks = computed(() => {
  return filter.value === "fav" ? favs.value : tasks.value;
});
</script>