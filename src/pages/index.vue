<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar></PostLeftBar>

      <section class="col-7">
        <PostHeader></PostHeader>
        <PostList :items="posts"></PostList>
      </section>
      <PostRightBar></PostRightBar>
    </div>
  </q-page>
</template>

<script setup>
import PostList from "src/components/apps/posts/PostList.vue";
import PostHeader from "./components/PostHeader.vue";
import PostLeftBar from "./components/PostLeftBar.vue";
import PostRightBar from "./components/PostRightBar.vue";

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
