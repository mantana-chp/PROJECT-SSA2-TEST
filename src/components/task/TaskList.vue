<script setup>
defineProps({
  tasks: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="task-list">
    <div
      class="border border-10 border-gray-300 mt-3 ml-8 mr-8 rounded-xl pt-4"
    >
      <div class="grid grid-cols-12 text-lg font-poppins font-semibold gap-5">
        <span class="col-span-1"></span>
        <span class="col-span-5">Title</span>
        <span class="col-span-4">Assignees</span>
        <span class="col-span-2">Status</span>
      </div>

      <hr class="border-t border-gray-300 mt-4" />

      <div
        v-for="task in tasks"
        class="itbkk-item grid grid-cols-12 text-lg font-poppins break-all gap-5 py-3"
      >
        <span class="col-span-1 text-center">{{ task.id }}</span>

        <span
          class="itbkk-title col-span-5 hover:text-[#0094FF] cursor-pointer transition-all duration-300 ease-in-out"
          >{{ task.title }}</span
        >

        <div class="itbkk-assignees col-span-4">
          {{ task.assignees }}
          <div v-if="task.assignees === ''" class="itbkk-assignees text-gray-400 italic">
            Unassigned
          </div>
        </div>

        <span
          class="itbkk-status col-span-2 bg-pink-400 text-white font-medium text-base rounded-full text-center w-[120px] h-[30px] items-center content-center"
          >{{ task.status }}</span
        >
      </div>
      <h4
        v-show="tasks.length === 0"
        class="flex min-h-screen justify-center items-center text-xl text-gray-400 font-poppins"
      >
        No task
      </h4>
    </div>
  </div>
</template>

<style scoped></style>
