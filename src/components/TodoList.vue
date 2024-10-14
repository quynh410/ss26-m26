<template>
  <div>
    <p>Todo List</p>
    <input type="text" v-model="inputValue" />
    <button @click="handleAddJob">Them</button>
    <ul v-for="job in listJobs" :key="job.id">
      <li>{{ job.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const inputValue = ref("");
const store = useStore();
const listJobs = computed(() => store.state.todoListModules.jobs);
const handleAddJob = () => {
  const jobInfo = {
    id: Math.ceil(Math.random() * 10000000),
    name: inputValue.value,
    status: false,
  };
  store.commit("addJob", jobInfo);
  inputValue.value = "";
};
</script>

<style></style>
