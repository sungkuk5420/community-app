<template>
  <q-item clickable :to="`/posts/${id}`">
    <q-item-section avatar top>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex items-center">
        <span>닉네임 &nbsp;&middot;&nbsp;3일 전</span>
        <q-chip
          class="q-ml-sm"
          dense
          color="primary"
          text-color="white"
          icon="event"
          >{{ category }}</q-chip
        >
      </div>
      <div class="text-h6 q-mt-sm">{{ title }}</div>
      <div class="text-primary text-caption">
        <span v-for="tag in tags" :key="tag" class="q-mr-sm">#{{ tag }}</span>
      </div>
      <div class="text-grey-6 q-my-sm ellipsis-2-lines">{{ content }}</div>
      <div class="row items-center">
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              :label="readCount"
              tooltip="조회수"
              name="sym_o_visibility"
            ></PostIcon>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              :label="commentCount"
              tooltip="댓글수"
              name="sym_o_sms"
            ></PostIcon>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn class="full-width" flat dense @click.prevent>
              <PostIcon
                :label="likeCount"
                tooltip="좋아요"
                name="sym_o_favorite"
              ></PostIcon>
            </q-btn>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn flat dense @click.prevent>
              <PostIcon
                :label="bookmarkCount"
                tooltip="북마크"
                name="sym_o_bookmark"
              ></PostIcon>
            </q-btn>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import PostIcon from "./PostIcon.vue";

defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  readCount: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  bookmarkCount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  createTime: {
    type: Date,
  },
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
