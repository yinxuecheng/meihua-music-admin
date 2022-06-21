<template>
  <div class="page">
    <div class="error-code"></div>
    <div class="action-area">
      <q-btn
        color="primary"
        label="返回"
        @click="
          () => {
            this.$router.back()
          }
        "
      />
      <q-btn
        color="primary"
        outline
        label="首页"
        @click="
          () => {
            this.$router.push('/')
          }
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>
<style scoped lang="less">
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .error-code {
    background-image: url('../assets/404.jpeg');
    background-size: 100% 100%;
    height: 80%;
    width: 100%;
  }
  .action-area {
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>
