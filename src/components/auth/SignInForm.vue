<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSignInEmail">
      <q-input
        v-model="form.email"
        placeholder="이메일"
        outlined
        dense
      ></q-input>
      <q-input
        type="password"
        v-model="form.password"
        placeholder="비밀번호"
        outlined
        dense
      ></q-input>
      <div>
        <q-btn
          type="submit"
          label="로그인하기"
          class="full-width"
          unelevated
          color="primary"
        ></q-btn>
        <div class="flex justify-between">
          <q-btn
            label="비밀번호찾기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'FindPasswordForm')"
          ></q-btn>
          <q-btn
            label="이메일 가입하기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'SignUpForm')"
          ></q-btn>
        </div>
      </div>
      <q-separator></q-separator>
      <q-btn
        label="구글 계정으로 로그인하기"
        class="full-width"
        unelevated
        color="primary"
        outline
        @click="handleSignInGoogle"
      ></q-btn>
    </q-form>
  </div>
</template>

<script setup>
import { signInWithGoogle } from "src/service/auth";
import { ref } from "vue";
import { signInWithEmail } from "src/service";
import { useQuasar } from "quasar";
const emit = defineEmits(["changeView", "closeDialog"]);
const $q = useQuasar();
const form = ref({
  email: "",
  password: "",
});

const handleSignInEmail = async () => {
  await signInWithEmail(form.value);
  $q.notify("환영합니다.");
  emit("closeDialog");
};
const handleSignInGoogle = async () => {
  await signInWithGoogle();
  $q.notify("환영합니다.");
  emit("closeDialog");
};
</script>

<style lang="scss" scoped></style>
