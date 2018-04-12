<template>
  <div>
    <el-table :data="caseList">
      <el-table-column prop="caseName" label="Case Name"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  // created() {
  //   this.$ajax({
  //     url: 'http://localhost:8080/getCaseEntity',
  //     method: 'POST',
  //     data: this.$qs.stringify({
  //       id: this.$route.params.id
  //     })
  //   }).then(response => {
  //     // alert(response.data.caseEntityList)
  //     this.caseList = response.data.caseEntityList
  //   })
  // },
  data() {
    return {
      caseList: [
        {
          caseName: '骨折'
        }
      ]
    }
  }
}
</script>
