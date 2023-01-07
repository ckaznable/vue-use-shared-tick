<script setup lang="ts">
import { ref } from "vue"
import useSharedTick from "../../lib/main"

const time = ref(Date.now())
const onTick = (t: number) => {
  time.value = t
}

useSharedTick(onTick, {runOnTabVisible: true})
</script>

<template>
  <div>{{ time }}</div>
</template>