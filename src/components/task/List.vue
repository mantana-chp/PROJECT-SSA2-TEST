<script setup>
defineProps({
  tasks: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <slot v-for="(task, index) in tasks" :key="index" :task="task"> </slot>
  </div>
</template>

<style scoped></style>
