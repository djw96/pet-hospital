<template>
  <div>
    <el-table :data="caseList" @row-click="entityClick">
      <el-table-column prop="caseName" label="Case Name"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  created() {
    this.$ajax({
      url: 'http://localhost:8080/learning/casenav/'+this.$route.params.id,
      method: 'GET'
    }).then(response => {
      this.caseList = response.data.caseList
    })
  },
  data() {
    return {
      caseList: [
        {
          caseName: '骨折',
          caseID:1
        }
      ]
    }
  },
  methods: {
    entityClick(row) {
      this.$router.push({
        path:
          '/speccase/' +
          row.caseName +
          '/' +
          row.exam +
          '/' +
          row.symptom +
          '/' +
          row.method +
          '/' +
          row.result
      })
    }
  }
}
</script>
