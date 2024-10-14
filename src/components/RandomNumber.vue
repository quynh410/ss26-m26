<template>
    <div>
      <div>
        <h3>Random Numbers:</h3>
        <p>{{ randomNumbers.length > 0 ? randomNumbers : '[]' }}</p>
      </div>
      <button @click="generateNumber">Generate Random Number</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const randomNumbers = computed(() => store.getters.getNumbers);
  
  const generateNumber = () => {
    store.dispatch('generateRandomNumber');
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
  