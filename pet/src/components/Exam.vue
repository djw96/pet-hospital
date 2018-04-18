<template>
  <div>
    <h1>Online Test</h1>
    <el-button @click="info">信息</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    info(){
      var value=sessionStorage.getItem('username')
      // var value=JSON.parse(sessionStorage.getItem('username'))
      console.log(value)
    }
  }
}
</script>
