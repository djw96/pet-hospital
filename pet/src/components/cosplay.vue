<template>
  <div class="container" style="margin-left: 10%">
    <div class="page-header">
      <h1 style="font-size: 30px">角色扮演
      </h1>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="前台" name="first">
          <player :active="activeName"/>
        </el-tab-pane>
        <el-tab-pane label="助理" name="second">
          <player :active="activeName"/>
        </el-tab-pane>
        <el-tab-pane label="医师" name="third">
          <player :active="activeName"/>          
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Player from './Player'
export default {
  data() {
    return {
      activeName: 'first',
      role:'前台'
    }
  },
  components:{
    'player':Player
  },
  methods: {
    selectChanged(index) {
      this.selected = index
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  font-family: 'Microsoft YaHei', '微软雅黑';
  margin: 0;
  padding: 0;
}

.button span {
  font-size: 10px;
  display: block;
}

.button span.glyphicon {
  font-size: 3em;
}
.left-instruction h4 {
  text-align: center;
  margin-top: 1em;
}
</style>
