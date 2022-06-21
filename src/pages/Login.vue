<template>
  <div class="login-page">
    <q-card class="login-form-content">
      <div class="title">♣️音乐后台</div>
      <q-form class="q-gutter-md">
        <q-input
          filled
          label="用户名: "
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '请输入用户名']"
        />

        <q-input
          filled
          type="password"
          label="密码: "
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '请输入密码']"
        />

        <q-toggle v-model="accept" label="记住我" />

        <div>
          <q-btn
            class="full-width"
            label="登陆"
            type="submit"
            color="primary"
          />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      accept: false
    }
  }
}
</script>

<style scoped lang="less">
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-form-content {
    width: 400px;
    padding: 20px;
    .title {
      font-size: 40px;
      text-align: center;
      padding: 20px;
    }
  }
}
</style>
