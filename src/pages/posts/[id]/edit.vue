<template>
  <q-page>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
      </q-toolbar>

      <q-separator></q-separator>
      <PostForm
        v-model:title="form.title"
        v-model:content="form.content"
        v-model:category="form.category"
      >
        <template #actions>
          <q-btn flat label="취소" v-close-popup />
          <q-btn type="submit" flat label="수정" color="primary" />
        </template>
      </PostForm>
    </BaseCard>
  </q-page>
</template>

<script>
const getInitialForm = () => ({
  title: "",
  category: "",
  content: "",
  tags: [],
});
</script>
<script setup>
import BaseCard from "src/components/base/BaseCard.vue";
import PostForm from "src/components/apps/posts/PostForm.vue";
import { ref } from "vue";
const form = ref(getInitialForm);
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  width: 800px
</route>
