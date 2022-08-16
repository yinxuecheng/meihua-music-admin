<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px; padding: 20px 0">
      <q-card-section>
        <div class="text-h6">添加歌曲</div>
      </q-card-section>

      <q-form @submit="createMusic" class="q-gutter-md">
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="music.name"
            label="歌曲名"
            autofocus
            @keyup.enter="show = false"
            :rules="[(val) => (val && val.length > 0) || '请填写歌曲名！']"
          />
          <q-input
            dense
            v-model="music.description"
            label="简介"
            autofocus
            @keyup.enter="show = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="确认" type="submit" color="primary" />
          <q-btn flat label="取消" v-close-popup />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { create } from '../../api/music.js'
import notify from '../../utils/notify'

const show = ref(true)
const music = reactive({ name: '', description: '' })
const emmit = defineEmits(['create-success'])

const createMusic = () => {
  create(music).then((createMusic) => {
    show.value = false
    notify.success(`歌曲《${createMusic.name}》创建成功!`)
    emmit('create-success')
  })
}
</script>

<style></style>
