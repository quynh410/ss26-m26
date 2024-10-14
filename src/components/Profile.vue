<template>
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Id: {{ user.id }}</p>
      <p>Họ và tên: {{ user.userName }}</p>
      <p>Giới tính: {{ user.gender }}</p>
      <p>Ngày sinh: {{ user.dateOfBirth }}</p>
      <p>Địa chỉ: {{ user.address }}</p>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  const store = useStore();
  
  const user = computed(() => store.state.profileModules);
  </script>
  
  <style scoped>
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
  }
  </style>
  