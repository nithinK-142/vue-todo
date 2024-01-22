<template>
  <div v-for="task in tasks" :key="task.id" class="task-list">
    <div class="task">
      <h3>
        {{ task.title }}
      </h3>
      <div class="icons">
        <i class="material-icons">delete</i>
        <i class="material-icons">favorite</i>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["tasks"]);
</script>
