<template>
  <div>
    <!-- <el-table :data="allCategory" @row-click="caseClick" :default-sort="{prop:'categoryId'}" stripe>
      <el-table-column prop="" label="Name"></el-table-column>
    </el-table> -->
    <div class="container" style="margin-left: 10%">
      <div class="title">
        <h2>病种分类</h2>
      </div>
      <div class="card-container">
        <div class="cards" v-for="category in allCategory">
          <el-card class="card">
            <span class="category">{{category}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="caseClick($event)" :id="category">病例</el-button>
          </el-card>
        </div>
      </div>

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
  methods: {
    caseClick(event) {
      if (event.currentTarget.id === '传染病') {
        this.$router.push({ path: '/caseentity/' + 'contagion' })
      } else if (event.currentTarget.id === '寄生虫病') {
        this.$router.push({ path: '/caseentity/' + 'parasitosis' })
      } else if (event.currentTarget.id === '内科病例') {
        this.$router.push({ path: '/caseentity/' + 'internal' })
      } else if (event.currentTarget.id === '外产科病例') {
        this.$router.push({ path: '/caseentity/' + 'obstetrics' })
      } else if (event.currentTarget.id === '常用手术') {
        this.$router.push({ path: '/caseentity/' + 'surgery' })
      } else if (event.currentTarget.id === '免疫') {
        this.$router.push({ path: '/caseentity/' + 'immune' })
      }
    }
  }
}
</script>
<style>
.title{
  font-size: 30px;
  margin:20px;
}
.cards {
  width:100%;
  margin-top: 1%;
}
.category {
  text-align: center;
  font-size: 20px;
  margin: 10px;
}
.card {
  height: 100px;
  margin-left: 250px;
}
</style>
