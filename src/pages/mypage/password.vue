<template>
  <BaseCard>
    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-y-md q-mt-md">
        <div class="text-h6">비밀번호 변경</div>
        <q-input
          v-model="form.newPassword"
          type="password"
          oulined
          dense
          label="새로운 비밀번호"
        />
        <q-input
          v-model="form.newPasswordConfirm"
          type="password"
          oulined
          dense
          label="새로운 비밀번호 확인"
        />
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-space></q-space>
        <q-btn type="submit" label="저장하기" flat color="primary"></q-btn>
      </q-card-section>
    </q-form>
  </BaseCard>
</template>

<script setup>
import BaseCard from "src/components/base/BaseCard.vue";
import { updateUserPassword } from "src/service";
import { useQuasar } from "quasar";
import { ref } from "vue";
const $q = useQuasar();

const form = ref({
  newPassword: "",
  newPasswordConfirm: "",
});

const handleSubmit = async () => {
  await updateUserPassword(form.value.newPassword);
  $q.notify("비밀번호가 변경되었습니다.");
  form.value.newPassword = "";
  form.value.newPasswordConfirm = "";
};
</script>

<style lang="scss" scoped></style>
