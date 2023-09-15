<template>

  <ul>
    <form v-on:submit.prevent="addNewTodo">
      <label>add a todo item </label>
      <input v-model="newTodoText" placeholder="E.g. Feed a cat">
      <button>add</button>
    </form>
    <form v-on:submit.prevent="removeTodo">
        <label>remove a todo item {{ removeTodoId }}</label>
        <input v-model="removeTodoId" placeholder="E.g. 0">
        <button>remove</button>
    </form>
  </ul>

  <ol>
    <todo-item v-for="(item, index) in todos" :key="item.id">
      <li>
        {{ item.title }}
      </li>
    </todo-item>
  </ol>

</template>


<script setup>
import { ref } from 'vue'

const newTodoText = ref('')
const todos = ref([
  {
    id: 1,
    title: "todo 1"
  },
  {
    id: 2,
    title: "todo 2"
  }
])

let nextTodoId = 3
function addNewTodo() {
  todos.value.push({
    id: nextTodoId++,
    title: newTodoText.value
  })
  newTodoText.value = ''
}

let removeTodoId = ref(0)
let removeTodoId0 = ref(0)
function removeTodo() {
  removeTodoId0.value = removeTodoId.value - 1
  todos.value.splice(removeTodoId0.value, 1)
}

</script>
