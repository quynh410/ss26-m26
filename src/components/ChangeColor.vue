<template>
    <div :class="{ dark: isDarkMode }" class="theme-container">
      <label>
        <input type="checkbox" v-model="isDarkMode" @change="toggleMode" />
        <span>{{ isDarkMode ? 'Tối' : 'Sáng' }}</span>
      </label>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const isDarkMode = computed({
    get: () => store.getters.isDarkMode,
    set: (value) => store.commit('SET_DARK_MODE', value)
  });
  
  const toggleMode = () => {
    store.commit('SET_DARK_MODE', isDarkMode.value);
  };
  </script>
  
  <style scoped>
  .theme-container {
    padding: 20px;
    border: 1px solid #ccc;
    display: inline-block;
    width: 200px;
    height: 100px;
  }
  
  .theme-container {
    background-color: white;
    color: black;
  }
  
  .theme-container.dark {
    background-color: black;
    color: white;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
  </style>
  