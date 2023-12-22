<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
    <q-header elevated class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
            짐코딩 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space></q-space>
        <q-btn stretch flat label="HOME" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="온라인 강의"
          href="https://edu.gymcoding.co"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="유튜브"
          href="https://youtube.com/@gymcoding"
          target="_blank"
        />
        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          label="로그인/회원가입"
          unelevated
          rounded
          color="primary"
          @click="openAuthDialog"
          v-if="!authStore.isAuthenticated"
        ></q-btn>
        <q-btn round flat v-if="authStore.isAuthenticated">
          <q-avatar>
            <img
              :src="
                authStore.user.photoURL ||
                gernerateDefaultPhotoURL(authStore.user.uid)
              "
            />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                v-if="authStore.user.emailVerified"
                clickable
                v-close-popup
                to="/mypage/profile"
              >
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item v-else clickable v-close-popup>
                <q-item-section class="text-red" @click="verifyEmail"
                  >이메일을 인증해주세요</q-item-section
                >
              </q-item>
              <q-item clickable v-close-popup @click="handleLogout">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authDialog"></AuthDialog>
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import AuthDialog from "src/components/auth/AuthDialog.vue";
import { useAuthStore } from "src/stores/auth";
import { useQuasar } from "quasar";
import {
  logout,
  gernerateDefaultPhotoURL,
  sendVerificationEmail,
} from "src/service";

const $q = useQuasar();
const route = useRoute();

const authStore = useAuthStore();
console.dir(route.meta.width);
const pageContainerStyles = computed(() => {
  return {
    maxWidth: route.meta.width ? route.meta.width : "1080px",
    margin: "0 auto",
  };
});
const authDialog = ref(false);
const openAuthDialog = () => {
  authDialog.value = true;
};
const handleLogout = async () => {
  await logout();
  $q.notify("로그아웃 되었습니다.");
};
const verifyEmail = async () => {
  await sendVerificationEmail();
  $q.notify("이메일을 확인해주세요.");
};
</script>
