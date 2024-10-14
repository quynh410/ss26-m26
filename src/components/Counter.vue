<template>
  <div>
    <p>Counter : {{ count }}</p>
    <p>Double Counter : {{ dbCount }}</p>
    <button @click="handleIncrement">Counter</button>
    <button @click="handleDecrement">Decrement</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.state.countModules.count);
const dbCount = computed(() => store.getters.doubleCount);

console.log(store);

const handleIncrement = () => {
  store.commit("increment");
};

const handleDecrement = () => {
  store.commit("decrement");
};
</script>

<style></style>

