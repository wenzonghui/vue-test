<template>
  <SlotA>
    Click Me
  </SlotA>

  <SlotA>
    <span>Click Me</span>
    <SlotB />
  </SlotA>

  <SlotA>
    <span>out</span>
    <SlotA>
      <span>in</span>
      <SlotB />
    </SlotA>
  </SlotA>
</template>

<script setup lang="ts">
import SlotA from './views/SlotA.vue';
import SlotB from './views/SlotB.vue';
</script>
