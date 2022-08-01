<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title> ♣️音乐 </q-toolbar-title>

        <q-space />
        <q-avatar color="teal" text-color="white">{{
          nicknameFirstWord
        }}</q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-list padding class="text-primary">
        <q-item
          clickable
          v-ripple
          active-class="my-menu-link"
          v-for="item in menuRoutes"
          :key="item.meta.title"
          :active="item.name === route.name"
          :to="item.path"
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>

          <q-item-section>{{ item.meta.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { menuRoutes } from '../router/index'
import { useRoute } from 'vue-router'

export default {
  name: 'Layout',
  setup() {
    const store = useStore()

    const route = useRoute()

    return {
      nicknameFirstWord: computed(
        () => store.getters['user/nicknameFirstWord']
      ),
      menuRoutes,
      route
    }
  },
  data() {
    return {
      left: false
    }
  }
}
</script>

<style lang="sass">
.my-menu-link
  color: white!important
  background: #F2C037
</style>
