<template>
  <q-page padding>
    <PostDetails></PostDetails>
    <q-separator class="q-my-xl"></q-separator>
    <PostComment></PostComment>
  </q-page>
</template>

<script setup>
import PostDetails from "./components/PostDetails.vue";
import PostComment from "./components/PostComment.vue";
</script>

<style lang="scss" scoped></style>
<route lang="json">
{
  "meta": {
    "width": "800px"
  }
}
</route>
