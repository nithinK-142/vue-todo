<template>
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
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";

const props = defineProps(["task"]);

const taskStore = useTaskStore();
const { deleteTask, toggleFav } = taskStore;
</script>

<style scoped>
.icons :first-child:hover {
  color: black;
}
</style>
