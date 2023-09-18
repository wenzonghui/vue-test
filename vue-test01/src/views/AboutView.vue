<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <!-- button1 -->
  <button @click="warn('button1', $event)">
    Submit
  </button>

  <!-- button2 -->
  <button @click="(event) => warn('button2', event)">
    Submit
  </button>

  <!-- 选择器 -->
  <div>
    <span>Selected: {{ selected }}</span>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>

</template>


<script setup lang="ts">
import {ref} from 'vue'

const selected = ''

function warn(message: any, event: { preventDefault: () => void; }) {
  if(event) {
    event.preventDefault()
  }
  alert(message)
}

</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
