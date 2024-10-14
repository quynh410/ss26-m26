<template>
    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.userName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.dateOfBirth }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button @click="editUser(user.id)">Sửa</button>
            <button @click="deleteUser(user.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  const store = useStore();
  
  const users = computed(() => store.state.listUSerModules);
  
  const editUser = (id) => {
    console.log(`Editing user with id: ${id}`);
  };
  
  const deleteUser = (id) => {
    console.log(`Deleting user with id: ${id}`);
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
  }
  
  button {
    margin: 0 5px;
  }
  </style>
  