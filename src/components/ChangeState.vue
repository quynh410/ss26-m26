<!-- ChangeState.vue -->
<template>
    <div>
      <h1>{{ companyName }}</h1>
      <button @click="changeState">Change state</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const companyName = computed(() => store.getters.getCompany);
  
  const changeState = () => {
    store.commit('CHANGE_COMPANY_NAME');
  };
  </script>
  
  <style scoped>
  button {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #f0f0f0;
  }
  </style>
  