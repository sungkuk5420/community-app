<template>
  <div class="q-gutter-y-md">
    <BaseCard>
      <q-form @submit.prevent="handleSubmitProfile">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">프로필 변경</div>
          <q-input v-model="displayName" oulined dense label="닉네임" />
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <q-space></q-space>
          <q-btn type="submit" label="저장하기" flat color="primary"></q-btn>
        </q-card-section>
      </q-form>
    </BaseCard>
    <BaseCard>
      <q-form @submit.prevent="handleSubmitEmail">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">이메일 변경</div>
          <q-input v-model="email" oulined dense label="이메일" />
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <q-space></q-space>
          <q-btn type="submit" label="저장하기" flat color="primary"></q-btn>
        </q-card-section>
      </q-form>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "src/components/base/BaseCard.vue";
import { updateUserEmail, updateUserProfile } from "src/service";
import { useAuthStore } from "src/stores/auth";
import { ref, watchEffect } from "vue";
import { useQuasar } from "quasar";

const authStore = useAuthStore();
const $q = useQuasar();

const displayName = ref("");
const handleSubmitProfile = async () => {
  await updateUserProfile(displayName.value);
  $q.notify("프로필 수정 완료");
};
const email = ref("");
const handleSubmitEmail = async () => {
  await updateUserEmail(email.value);
  $q.notify("이메일 수정 완료");
};

watchEffect(() => {
  displayName.value = authStore.user?.displayName;
  email.value = authStore.user?.email;
});
</script>

<style lang="scss" scoped></style>
