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
      url: 'http://localhost:8080/getCaseEntity',
      method: 'POST',
      data: this.$qs.stringify({
        id: this.$route.params.id
      })
    }).then(response => {
      this.caseList = response.data.caseEntityList
    })
  },
  data() {
    return {
      caseList: [
        {
          caseName: '骨折',
          categoryId: 1,
          exam: 1,
          method: 1,
          result: 1,
          symptom: 3
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
