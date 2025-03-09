<script setup lang="ts">
const users = ref();

onMounted(async () => {
  const res = await fetch("http://localhost:3000/users")

  users.value = await res.json()
})
</script>

<template>
  <div class="about">
    <p>{{ users }}</p>
    <h1>This is an about page</h1>
  </div>
</template>

<style>
</style>
