<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加用户" @click="showDialog" />
    </div>
    <q-table
      :rows="data"
      :columns="columns"
      row-key="name"
      @request="fetchData"
      v-model:pagination="pagination"
    />
    <create-dialog v-if="show" @hide="hideDialog" @create-success="fetchData" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserSearch } from '../../composables/useUserSearch'
import { useToggleDialog } from '../../composables/useToggleDialog'
import CreateDialog from './CreateDialog.vue'

const columns = [
  {
    field: 'id',
    label: 'ID',
    align: 'center'
  },
  {
    field: 'username',
    label: '用户名',
    align: 'center'
  },
  {
    field: 'nickname',
    label: '昵称',
    align: 'center'
  }
]

const show = ref(false)

const { showDialog, hideDialog } = useToggleDialog(show)

const { data, pagination, pagesNumber, fetchData } = useUserSearch()
</script>

<style scoped></style>
