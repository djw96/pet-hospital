<template>
  <div class="container">
    <img src="../assets/img/TnPgXl4.jpg" class="background-img"/>
    <h3 style="color:white;margin:20px 120px;">请选择功能——</h3>
    <div class="col-md-3 col-md-offset-1">
      <button class="button button-plain button-border button-circle button-giant " style="margin-top: 45%">
        <span class="glyphicon glyphicon-film"></span>
        3  D导览
      </button>
    </div>
    <div class="col-md-3 col-md-offset-1" style="padding-left: 40px">
      <button class="button button-plain button-border button-circle button-giant " style="margin-bottom: 30%" onclick="window.location.href='http://localhost:8000/#/cosplay'">
        <span class="glyphicon glyphicon-user"></span>
        角色扮演
      </button>
      <button class="button button-plain button-border button-circle button-giant "  onclick="window.location.href='http://localhost:8000/#/case'">
        <span class="glyphicon glyphicon-tasks"></span>
        病例学习
      </button>
    </div>
    <div class="col-md-3 col-md-offset-1" style="padding-left: 40px">
      <button class="button button-plain button-border button-circle button-giant " style="margin-top: 45%" >
        <span class="glyphicon glyphicon-list-alt"></span>
        测试
      </button>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  .container {
    font-family:'Microsoft YaHei','微软雅黑';
    margin: 0;
    padding: 0;
  }
  .button-giant,
  .button-circle.button-giant {
    height:8em;
    width:8em;
  }

  .button span{
    font-size:10px;
    display:block;
  }

  .button span.glyphicon{
    font-size:3em;
  }
  .background-img {
    position: absolute;
    z-index: -1;
    height: 90%;
    width: 100%;
    margin: 0;
  }

</style>
