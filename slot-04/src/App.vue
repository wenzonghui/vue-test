<template>
  <SlotA v-slot="x, y">
    Mouse is at: {{ x }}, {{ y }}
  </SlotA>
</template>


<script setup lang="ts">
import SlotA from './views/SlotA.vue';
</script>