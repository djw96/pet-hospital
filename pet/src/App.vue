<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 导航栏 -->
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-1">
            <img src="./assets/img/icon.jpeg" class="img-responsive img-rounded" alt="Responsive img">
          </div>
          <div class="col-md-6">
            <div class="navbar-header">
              <a class="navbar-brand" href="SignIn.html">虚拟宠物医院学习系统</a>
            </div>
          </div>
          <div class="col-md-1 col-md-offset-4">
            <button class="button button-small button-plain button-border button-circle" id="back">
              <i class="glyphicon glyphicon-circle-arrow-left"></i>Back</button>
            <button class="button button-small button-plain button-border button-circle" id="logout" @click="LogoutClicked">
              <i class="glyphicon glyphicon-share"></i>Logout</button>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    LogoutClicked() {
      sessionStorage.removeItem('username')
      this.$alert('您已退出系统', '系统提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.push({ path: '/' })
              }
            })
    }
  }
}
</script>

<style>
@import 'assets/css/buttons.css';
@import 'assets/css/navbar.css';
body {
  padding: 0;
  margin: 0;
}
</style>
