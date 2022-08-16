import { ref, computed, onMounted } from 'vue'
import { search } from '../api/user'

export const useUserSearch = () => {
  const data = ref([])

  const pagination = ref({
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 10
  })

  const fetchData = () => {
    const pageable = {
      page: pagination.value.page - 1,
      size: pagination.value.rowsNumber
    }
    search({ pageable }).then((res) => {
      data.value = res.content
      pagination.value.page = res.number + 1
      pagination.value.rowsPerPage = res.size
      pagination.value.rowsNumber = res.totalElements
    })
  }

  const pagesNumber = computed(() =>
    Math.ceil(data.value.length / pagination.value.rowsPerPage)
  )

  onMounted(fetchData)

  return {
    data,
    pagination,
    pagesNumber,
    fetchData
  }
}
