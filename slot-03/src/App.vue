<template>
  <SlotA api-url="url" :per-page="10">
    <template #item="{body, username, likes}">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">by {{ username }} | {{ likes }} likes</p>
      </div>
    </template>
  </SlotA>
</template>

<script setup lang="ts">
import SlotA from './views/SlotA.vue';
</script>


<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>