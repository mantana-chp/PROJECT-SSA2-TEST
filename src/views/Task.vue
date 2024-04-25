<script setup>
import { onMounted, ref } from 'vue'
import { getItems, getItemById } from '@/libs/fetchTasks.js'
import TaskList from '@/components/task/TaskList.vue'
import AddEditTask from '@/components/task/AddEditTask.vue'

const data = ref([])

onMounted(async () => {
  try {
    const items = await getItems(import.meta.env.VITE_BASE_URL)
    data.value = items
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

const showModal = ref(false)
const showAddEditModal = () => {
  showModal.value = true
}
const closeAddEditModal = (flag) => {
  showModal.value = flag
}
</script>

<template>
  <div class="task-view py-3">
    <div class="flex justify-start px-8">
      <button
        class="text-[#0094FF] font-Poppins text-[18px] cursor-pointer hover:text-white border border-10 border-[#0094FF] rounded-lg hover:bg-[#0094FF] transition-all duration-300 ease-in-out px-2"
        @click="showAddEditModal"
      >
        + Add New Task
      </button>
    </div>
    <TaskList :tasks="data" @click="showAddEditModal" />
    <div
      class="absolute left-0 right-0 top-0 bottom-1/3 m-auto h-96 w-1/3"
      v-show="showModal"
    >
      <AddEditTask @closeModal="closeAddEditModal" @saveTask="" />
    </div>
  </div>
</template>

<style scoped></style>
