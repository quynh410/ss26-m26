<template>
    <br>
    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng (kg)</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <button @click="editProduct(product.id)">Sửa</button>
            <button @click="deleteProduct(product.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  const store = useStore();
  
  const products = computed(() => store.state.listProductsModules);
  
  const editProduct = (id) => {
    console.log(`Editing product with id: ${id}`);
  };
  
  const deleteProduct = (id) => {
    console.log(`Deleting product with id: ${id}`);
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
  