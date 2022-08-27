<template>
  <div class="page">
    <div>欢迎{{ nickname }}</div>
    <CosUploader label="文件上传" style="max-width: 300px" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Uploader from '../../components/Uploader.vue'
import CosUploader from '../../composables/useCosUploader'

export default {
  components: { CosUploader },
  name: 'Index',
  setup() {
    const store = useStore()
    return {
      nickname: computed(() => store.state.user.currentUser.nickname)
    }
  }
}
</script>

<style></style>
