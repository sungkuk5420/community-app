<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="(val) => $emit('update:modelValue', val)"
    @hide="changeViewMode('SignInForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space></q-space>
        <q-btn icon="close" flat round dense v-close-popup></q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <!-- <SignInForm
          v-if="viewMode === 'SignInForm'"
          @change-view="changeViewMode"
        />
        <SignUpForm
          v-else-if="viewMode === 'SignUpForm'"
          @change-view="changeViewMode"
        />
        <FindPassword v-else @change-view="changeViewMode" /> -->

        <component
          :is="authViewComponents[viewMode]"
          @change-view="changeViewMode"
          @close-dialog="closeDialog"
        ></component>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
// import SignUpForm from "./SignUpForm.vue";
// import SignInForm from "./SignInForm.vue";
// import FindPasswordForm from "./FindPasswordForm.vue";
import { ref, defineAsyncComponent } from "vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const viewMode = ref("SignInForm");
const changeViewMode = (mode) => {
  viewMode.value = mode;
};
const authViewComponents = {
  SignUpForm: defineAsyncComponent(() => import("./SignUpForm.vue")),
  SignInForm: defineAsyncComponent(() => import("./SignInForm.vue")),
  FindPasswordForm: defineAsyncComponent(() =>
    import("./FindPasswordForm.vue")
  ),
};

const closeDialog = () => {
  emit("update:modelValue", false);
};
</script>

<style lang="scss" scoped></style>
