<template>
  <StickySideBarVue>
    <q-card flat bordered>
      <q-list bordered separator>
        <q-item clickable :active="true">
          <q-item-section>전체</q-item-section>
        </q-item>
        <q-item clickable v-ripple v-for="cate in categories" :key="cate.value">
          <q-item-section>{{ cate.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </StickySideBarVue>
</template>

<script setup>
import StickySideBarVue from "src/components/StickySideBar.vue";
const categories = [
  { label: "Q&A", value: "qna" },
  { label: "커뮤니티", value: "community" },
  { label: "공지사항", value: "notice" },
  { label: "강의", value: "lecture" },
];
</script>
