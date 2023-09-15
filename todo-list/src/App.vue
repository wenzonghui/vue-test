<template>
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    />
    <button>Add</button>
  </form>
  
  <ul>
    <todo-item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :title="todo.title"
      @remove="todos.splice(index, 1)"
    ></todo-item>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from './views/TodoItem.vue'

const newTodoText = ref('')
const todos = ref([
  {
    id: 1,
    title: 'todo 1'
  },
  {
    id: 2,
    title: 'todo 2'
  },
  {
    id: 3,
    title: 'todo 3'
  }
])

let nextTodoId = 4

function addNewTodo(){
  todos.value.push({
    id: nextTodoId++,
    title: newTodoText.value
  })
  newTodoText.value = ''
}
</script>

