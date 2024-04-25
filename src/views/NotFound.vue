<script setup>
import { RouterLink } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col gap-3 font-Prompt">
      <div class="flex justify-center text-7xl font-bold">404</div>
      <div class="flex justify-center text-5xl font-semibold">
        Not Found x_x
      </div>
      <div class="flex justify-center font-semibold">
        The requested task does not exist
      </div>
      <div class="flex justify-center">
        <RouterLink :to="{ name: 'Task' }">
          <button
            @click="goBack"
            class="text-blue-500 font-semibold hover:bg-blue-100 hover:rounded-md p-2 transition-all duration-300 ease-in-out"
          >
            Go back to previous page
          </button></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
