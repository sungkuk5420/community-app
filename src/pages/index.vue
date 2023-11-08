<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <PostList :items="posts"></PostList>
    </section>
  </q-page>
</template>

<script setup>
import PostList from "src/components/apps/posts/PostList.vue";
const posts = Array.from(Array(20), (_, index) => {
  return {
    id: index,
    title: "Vue3 Firebase 강의" + index,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae quibusdam nobis facere, at laborum corrupti rerum blanditiis itaque libero repellat quia quidem cumque culpa repudiandae vel, quaerat quis dolorem.",
    readCount: 1,
    commentCount: 2,
    likeCount: 3,
    bookmarkCount: 4,
    tags: ["html", "css", "javascript"],
    uid: "uid",
    category: "카테고리" + index,
  };
});
</script>

<style lang="scss" scoped></style>
