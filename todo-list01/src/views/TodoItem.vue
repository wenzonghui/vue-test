<template>
    <li>
        {{ title }}
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>

<script setup>
defineProps(['title'])
defineEmits(['remove'])
</script>