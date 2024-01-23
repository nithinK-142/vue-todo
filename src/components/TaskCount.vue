<template>
  <p>
    You have {{ displayCount }} {{ filter === "fav" ? "favs" : "tasks" }} left
    to do.
  </p>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const taskStore = useTaskStore();
const { filter, favCount, totalCount } = storeToRefs(taskStore);

const displayCount = computed(() => {
  return filter.value === "fav" ? favCount.value : totalCount.value;
});
</script>

<style scoped>
p {
  text-align: center;
}
</style>
