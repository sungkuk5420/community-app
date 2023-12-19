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
import { getCategories } from "src/service/category";

const categories = getCategories();
</script>
