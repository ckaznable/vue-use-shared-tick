<script setup lang="ts">
import { computed, ref } from "vue"
import Timer from "./components/Timer.vue"

const count = ref(100)
const list = computed(() => Array(count.value).fill(""))
</script>

<template>
  <input type="text" v-model="count" />
  <div class="counter-wrap">
    <Timer v-for="_ in list" />
  </div>
</template>

<style scoped>
.counter-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
</style>
