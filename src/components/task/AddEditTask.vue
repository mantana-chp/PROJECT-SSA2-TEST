<script setup>

defineEmits(['closeModal', 'saveTask'])

const props = defineProps({
  task: {
    type: Object,
    default: {
      id: undefined,
      title: '',
      description: '',
      assignees: '',
      status: '',
      createdOn: '',
      updatedOn: ''
    }
  }
})
</script>

<template>
  <div class="flex justify-center">
    <div
      class="grid bg-white w-[650px] h-[500px] shadow-xl p-5 rounded-xl font-poppins"
    >
      <div class="text-xl font-semibold">Title</div>
      <hr />
      <div>
        <div class="text-sm">Description</div>
        <textarea
          placeholder="Type something"
          class="textarea textarea-bordered textarea-sm w-full"
        ></textarea>
      </div>

      <div>
        <div class="text-sm">Assignees</div>
        <textarea
          placeholder="Pang; Pong;"
          class="textarea textarea-bordered textarea-sm w-full max-w-xs"
        ></textarea>

        <div class="text-sm">Status</div>

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-[#B9B9B9] border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 inline-flex items-center"
          type="button"
        >
          Select Status
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            class="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li class="block px-4 py-2 hover:bg-gray-100">No Status</li>
            <li class="block px-4 py-2 hover:bg-gray-100">To Do</li>
            <li class="block px-4 py-2 hover:bg-gray-100">Doing</li>
            <li class="block px-4 py-2 hover:bg-gray-100">Done</li>
          </ul>
        </div>
      </div>

      <div class="text-sm">TimeZone:{{}}</div>
      <div class="text-sm">Created On:{{}}</div>
      <div class="text-sm">Updated On:{{}}</div>
      <div class="flex justify-end gap-6">
        <button class="text-green-500 font-medium hover:text-green-600">
          SAVE
        </button>
        <button
          class="text-slate-400 font-medium hover:text-slate-500"
          @click="$emit('closeModal', false)"
        >
          CLOSE
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
