<template>
  <q-card class="q-pa-lg">
    <div class="flex">
      <q-btn
        icon="sym_o_arrow_back"
        flat
        round
        dense
        color="grey"
        size="16px"
      ></q-btn>
      <q-space></q-space>
      <q-btn
        icon="sym_o_favorite"
        flat
        round
        dense
        color="red"
        size="16px"
      ></q-btn>
      <q-btn
        icon="sym_o_bookmark"
        flat
        round
        dense
        color="blue"
        size="16px"
      ></q-btn>
    </div>
    <div class="flex items-center">
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <div class="q-ml-md">
        <div>짐코딩</div>
        <div class="text-grey-6">3일 전</div>
      </div>
      <q-space></q-space>
      <q-btn icon="more_horiz" flat round>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>수정하기</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>삭제하기</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

    <div class="q-mt-md text-h5 text-weight-bold">제목입니다.</div>
    <div class="row items-cente q-gutter-x-md justify-end">
      <PostIcon :label="1" tooltip="조회수" name="sym_o_visibility"></PostIcon>
      <PostIcon :label="2" tooltip="댓글수" name="sym_o_sms"></PostIcon>
      <PostIcon :label="3" tooltip="좋아요" name="sym_o_favorite"></PostIcon>
      <PostIcon :label="4" tooltip="북마크" name="sym_o_bookmark"></PostIcon>
    </div>
    <q-separator class="q-my-lg"></q-separator>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, non
      nam doloremque exercitationem facilis quam natus doloribus assumenda in a,
      iure omnis accusantium nobis, officiis soluta delectus illo fugit quia?<br />Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Provident, non nam
      doloremque exercitationem facilis quam natus doloribus assumenda in a,
      iure omnis accusantium nobis, officiis soluta delectus illo fugit quia?<br />Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Provident, non nam
      doloremque exercitationem facilis quam natus doloribus assumenda in a,
      iure omnis accusantium nobis, officiis soluta delectus illo fugit quia?<br />Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Provident, non nam
      doloremque exercitationem facilis quam natus doloribus assumenda in a,
      iure omnis accusantium nobis, officiis soluta delectus illo fugit quia?<br />Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Provident, non nam
      doloremque exercitationem facilis quam natus doloribus assumenda in a,
      iure omnis accusantium nobis, officiis soluta delectus illo fugit quia?<br />Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Provident, non nam
      doloremque exercitationem facilis quam natus doloribus assumenda in a,
      iure omnis accusantium nobis, officiis soluta delectus illo fugit quia?<br />Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Provident, non nam
      doloremque exercitationem facilis quam natus doloribus assumenda in a,
      iure omnis accusantium nobis, officiis soluta delectus illo fugit quia?<br />
    </div>
  </q-card>
</template>

<script setup>
import PostIcon from "src/components/apps/posts/PostIcon.vue";
</script>

<style lang="scss" scoped></style>
