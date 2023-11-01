<template>
  <div>
    <div class="text-h4">home</div>
    <div>
      {{ $route.name }}
      {{ $route.meta }}
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>

<route lang="json">
  {
    "name": "name-override",
    "meta": {
      "requiresAuth": false
    }
  }
  </route>