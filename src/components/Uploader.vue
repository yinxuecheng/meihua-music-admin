<template>
  <q-uploader
    style="max-width: 300px"
    :url="url"
    label="文件上传"
    @added="onFileAdded"
  />
</template>

<script setup>
import { ref } from '@vue/reactivity'
import COS from 'cos-js-sdk-v5'
import { initUpload } from '../api/file'

const url = ref(null)
const files = ref([])

let cos = COS({
  getAutherization: (options, callback) => {
    const file = files.value[0]
    const uploadFile = {
      name: file.name.substring(0, file.name.lastIndexOf('.')),
      ext: file.name.substring(file.name.lastIndexOf('.')),
      size: file.size,
      fileKey: file.key
    }
    initUpload(uploadFile).then(res => {
      callback({
        TmpSecretId: res.secretId,
        TmpSecretKey: res.secretKey,
        SecurityToken: res.sessionToken,
        ScopeLimit: true
      })
    })
  }
})

const onFileAdded = (data) => {
  files.value = data
}
</script>

<style></style>
