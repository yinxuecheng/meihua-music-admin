<template>
  <div>欢迎{{ nickname }}</div>
  <q-btn @click="logout">退出 </q-btn>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'Index',
  setup() {
    const store = useStore()
    return {
      nickname: computed(() => store.state.user.nickname),
      logout: () =>
        store.dispatch('user/logout').then(() => {
          window.location.reload()
        })
    }
  }
}
</script>

<style></style>
