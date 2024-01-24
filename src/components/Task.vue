<template>
  <div class="task">
    <h3 @click="editTaskTitle">
      <input
        ref="titleInput"
        v-if="editing"
        v-model="editedTitle"
        @blur="saveEditedTitle"
        @keyup.enter="saveEditedTitle"
      />
      <span v-else>
        {{ task.title }}
      </span>
    </h3>
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
import { ref, nextTick } from "vue";
import { useTaskStore } from "@/stores/TaskStore";

const props = defineProps(["task"]);

const { editTask, deleteTask, toggleFav } = useTaskStore();

const editing = ref(false);
const editedTitle = ref(props.task.title);

const titleInput = ref(null);
const editTaskTitle = () => {
  editing.value = true;

  nextTick(() => {
    titleInput.value.focus();
  });
};

const saveEditedTitle = () => {
  if (editedTitle.value !== props.task.title) {
    editTask(props.task.id, editedTitle.value);
  }
  editing.value = false;
};
</script>

<style scoped>
input {
  border: 0;
  outline: 0;
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
}
.icons :first-child:hover {
  color: black;
}
</style>
