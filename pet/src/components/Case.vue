<template>
  <div>
    <!-- <el-table :data="allCategory" @row-click="caseClick" :default-sort="{prop:'categoryId'}" stripe>
      <el-table-column prop="" label="Name"></el-table-column>
    </el-table> -->
    <div class="cards" v-for="category in allCategory">
      <el-card>
        <span>{{category}}</span>
        <el-button tyle="float: right; padding: 3px 0" type="text" @click="caseClick($event)" :id="category">按钮</el-button>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCategory: [
        '传染病',
        '寄生虫病',
        '内科病例',
        '外产科病例',
        '常用手术',
        '免疫'
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
    caseClick(event) {
      // this.$router.push({ path: '/caseentity/' + row.categoryId })
      if (event.currentTarget.id === '传染病') {
        this.$router.push({ path: '/caseentity/' + 'contagion' })
      }
    }
  }
}
</script>
