<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn
        color="primary"
        label="添加歌曲"
        @click="createDialog.showDialog()"
      />
    </div>
    <q-table :rows="data" :columns="columns" row-key="name">
      <template v-slot:body-cell-operation="props">
        <q-td :props="props">
          <q-btn flat color="primary" label="编辑" @click="edit(props.value)" />
          <q-btn flat color="primary" label="删除" />
        </q-td>
      </template>
    </q-table>
    <create-dialog
      v-if="createDialogShow"
      @hide="createDialog.hideDialog()"
      @create-success="fetchData"
    />
    <edit-dialog
      v-if="editDialogShow"
      @hide="editDialog.hideDialog()"
      @edit-success="fetchData"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { list } from '../../api/music.js'
import { useToggleDialog } from '../../composables/useToggleDialog'
import CreateDialog from './CreateDialog.vue'
import EditDialog from './EditDialog.vue'

const columns = [
  {
    name: 'name',
    field: 'name',
    label: '歌曲名',
    align: 'center'
  },
  {
    name: 'description',
    field: 'description',
    label: '简介',
    align: 'center'
  },
  {
    name: 'status',
    field: 'status',
    label: '上架状态',
    align: 'center'
  },
  {
    name: 'operation',
    field: 'operation',
    label: '操作',
    align: 'center'
  }
]

const data = ref([])

const createDialogShow = ref(false)
const editDialogShow = ref(false)

const createDialog = useToggleDialog(createDialogShow)
const editDialog = useToggleDialog(editDialogShow)

const fetchData = () => {
  list().then((musicList) => {
    data.value = musicList
  })
}

onMounted(fetchData)
</script>

<style></style>
