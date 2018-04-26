<template>
  <div class="container" style="margin-left: 10%">
    <div class="page-header">
      <h1 style="font-size:30px">病例学习</h1>
      </div>
      <el-table :data="caseList" @row-click="entityClick" stripe>
        <el-table-column prop="caseName" label="病例分类"></el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  computed: {
    caseList() {
      if (this.$route.params.id === 'contagion') {
        return [
          { caseName: '犬瘟热', caseId: 7 },
          { caseName: '犬细小病毒', caseId: 8 },
          { caseName: '犬传染性肝炎', caseId: 9 },
          { caseName: '犬冠状病毒', caseId: 10 },
          { caseName: '猫泛白细胞减少症', caseId: 11 },
          { caseName: '猫病毒性病气管炎', caseId: 12 },
          { caseName: '皮肤真菌感染', caseId: 13 }
        ]
      } else if (this.$route.params.id === 'parasitosis') {
        return [
          { caseName: '蛔虫病', caseId: 2 },
          { caseName: '钩虫病', caseId: 14 },
          { caseName: '绦虫病', caseId: 15 },
          { caseName: '球虫病', caseId: 16 },
          { caseName: '疥螨虫病', caseId: 17 },
          { caseName: '蚤病', caseId: 18 }
        ]
      } else if (this.$route.params.id === 'internal') {
        return [
          { caseName: '狗癫痫', caseId: 3 },
          { caseName: '肠炎', caseId: 19 },
          { caseName: '肠便秘', caseId: 20 },
          { caseName: '胰腺炎', caseId: 21 },
          { caseName: '肝炎', caseId: 22 },
          { caseName: '腹膜炎', caseId: 23 },
          { caseName: '肛门腺炎', caseId: 24 },
          { caseName: '感冒', caseId: 25 }
        ]
      } else if (this.$route.params.id === 'obstetrics') {
        return [
          { caseName: '皮炎', caseId: 1 },
          { caseName: '外伤', caseId: 4 },
          { caseName: '外科感染', caseId: 26 },
          { caseName: '骨折', caseId: 27 },
          { caseName: '关节脱位', caseId: 28 },
          { caseName: '湿疹', caseId: 29 },
          { caseName: '趾间囊肿', caseId: 30 },
          { caseName: '脓皮病', caseId: 31 },
          { caseName: '脱毛症', caseId: 32 },
          { caseName: '疝', caseId: 33 }
        ]
      } else if (this.$route.params.id === 'surgery') {
        return [
          { caseName: '绝育', caseId: 5 },
          { caseName: '剖腹产', caseId: 34 },
          { caseName: '瞬膜腺增生物切除', caseId: 35 },
          { caseName: '眼球摘除', caseId: 36 },
          { caseName: '断尾术', caseId: 37 },
          { caseName: '立耳术', caseId: 38 }
        ]
      } else if (this.$route.params.id === 'immune') {
        return [
          { caseName: '犬免疫程序', caseId: 6 },
          { caseName: '猫免疫程序', caseId: 39 }
        ]
      }
    }
  },
  methods: {
    entityClick(row) {
      this.$router.push({
        path: '/speccase/' + row.caseId
      })
    }
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}

.left-instruction h4 {
  text-align: center;
  margin-top: 1em;
}
</style>
