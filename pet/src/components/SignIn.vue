<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <!-- 图片轮播 -->
        <div id="first-carousel" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#first-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#first-carousel" data-slide-to="1"></li>
            <li data-target="#first-carousel" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner" role="listbox">
            <div class="active item">
              <img src="../assets/img/img2.png" class="img-responsive img-thumbnail">
            </div>
            <div class="item">
              <img src="../assets/img/img1.jpg" class="img-responsive img-thumbnail">
            </div>
            <div class="item">
              <img src="../assets/img/img3.jpg" class="img-responsive img-thumbnail">
            </div>
          </div>

          <a class="left carousel-control" href="#first-carousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#first-carousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="col-md-4">
        <form class="form-sign">
          <h2>登录</h2>
          <input type="text" id="username" class="form-control" placeholder="用户名" v-model="LogUser">
          <input type="password" id="password" class="form-control" placeholder="密码" v-model="LogPass">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="remember-me"> 记住密码
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="button" id="login" @click="LoginClicked">登录</button>
        </form>

        <!-- 注册弹窗 -->
        <button class="btn btn-info btn-lg btn-block" data-toggle="modal" data-target="#myModal" id="singup">注册</button>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog" style="width: 400px">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
                <h4 class="modal-title" id="myModalLabel">
                  用户信息
                </h4>
              </div>
              <div class="modal-body">
                <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label for="inputEmail3" class="col-sm-4 control-label">用户名</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="inputEmail3" placeholder="请输入用户名" v-model="UserName">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-4 control-label">密码</label>
                    <div class="col-sm-8">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="PassWord">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-4 control-label">确认密码</label>
                    <div class="col-sm-8">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="请确认密码" v-model="ConfirmPass">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-4 col-sm-4">
                      <button type="button" class="btn btn-success btn-block" @click="SignClicked">注册</button>
                    </div>
                    <div class="col-sm-4">
                      <button type="button" class="btn btn-danger btn-block">取消</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      UserName: '',
      PassWord: '',
      ConfirmPass: ''
    }
  },
  methods: {
    SignClicked() {
      if (this.UserName === '' || this.PassWord === '') {
        alert('用户名和密码不能为空')
      } else {
        if (this.PassWord === this.ConfirmPass) {
          this.$ajax({
            url: 'http://localhost:8080/register',
            method: 'POST',
            data: this.$qs.stringify({
              username: this.UserName,
              password: this.PassWord
            })
          }).then(response => {
            alert(response.data.msg)
          })
        } else alert('两次输入的密码不一致')
      }
    },
    LoginClicked() {
      this.$ajax({
        url: 'http://localhost:8080/login',
        method: 'POST',
        data: this.$qs.stringify({
          username: this.LogUser,
          password: this.LogPass
        })
      })
        .then(response => {
          console.log(response.data.msg)
          if (response.data.retCode === '0000') {
            sessionStorage.setItem('username', this.LogUser)
            document.getElementById('username').value = ''
            document.getElementById('password').value = ''
            this.$alert('登陆成功', '登陆提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.push({ path: '/index' })
              }
            })
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#first-carousel {
  margin: 5% 5% 20% 6%;
}

.form-sign {
  margin: 13% 5% auto auto;
}

#password {
  margin: 3% auto;
  height: auto;
  font-size: 18px;
}

#username {
  margin: 3% auto;
  height: auto;
  font-size: 18px;
}

.form-sign label {
  margin: 1% auto;
}

#login {
  margin-bottom: 3%;
}

#singup {
  width: 95%;
}

.form-group {
  margin-bottom: 10px;
}
</style>
