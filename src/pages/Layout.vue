<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title> ♣️音乐盒 </q-toolbar-title>

        <q-space />
        <q-avatar color="teal" text-color="white">{{
          nicknameFirstWord
        }}</q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      drawer content
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Layout',
  setup() {
    const store = useStore()

    return {
      nicknameFirstWord: computed(() => store.getters['user/nicknameFirstWord'])
    }
  },
  data() {
    return {
      left: false
    }
  }
}
</script>
