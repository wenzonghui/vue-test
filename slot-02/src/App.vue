<template>
  <SlotA>
    
    <template #header>
      <p>header</p>
    </template>

    <template #default>
      <p>main</p>
    </template>

    <template #footer>
      <p>footer</p>
    </template>

  </SlotA>
</template>


<script setup lang="ts">
import SlotA from './views/SlotA.vue';
</script>
