<template>
  <div>
    <el-table :data="allCategory" @row-click="caseClick" :default-sort="{prop:'categoryId'}" stripe>
      <el-table-column prop="categoryId" label="ID"></el-table-column>
      <el-table-column prop="categoryName" label="Name"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCategory: [
        {
          categoryId: 1,
          categoryName: '1'
        }
      ]
    }
  },
  created() {
    this.$ajax({
      url: 'http://localhost:8080/getAllCategory',
      methods: 'GET'
    }).then(response => {
      this.allCategory = response.data.categoryList
    })
  },
  methods: {
    caseClick(row) {
      this.$router.push({ path: '/caseentity/' + row.categoryId })
    }
  }
}
</script>
