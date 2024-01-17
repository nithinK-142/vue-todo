<template>
  <h1>Vue Todo</h1>

  <div class="todo-input">
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Enter something!"
    />
    <button @click="addTodo">Add Todo</button>
  </div>

  <div v-for="(todo, index) in todos" class="todolist">
    <input type="checkbox" v-model="todo.isComplete" />
    <li :class="{ complete: todo.isComplete }">
      {{ todo.task }}
    </li>
    <button @click="deleteTodo(index)">x</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todos = ref([
  { task: "make a todo app", isComplete: true },
  { task: "learn vuex", isComplete: false },
]);

const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim() === "") return alert("Enter something!");
  todos.value.push({ task: newTodo.value, isComplete: false });
  newTodo.value = "";
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<style>
h1 {
  text-align: center;
}
.todolist {
  display: flex;
  padding-block: 10px;
}
input[type="checkbox"] {
  padding: 10px;
}

input[type="text"] {
  font-size: 1.3em;
  padding: 10px;
  outline: transparent;
}
li {
  width: 100%;
  list-style: none;
  font-size: 1.3em;
  background-color: beige;
  padding: 10px;
}
button {
  font-size: 1.3em;
  padding: 10px;
}
.complete {
  opacity: 0.5;
}
</style>
