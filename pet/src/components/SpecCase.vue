<template>
    <div>
        <h2>{{caseName}}</h2>
        <p>{{caseContent.symptom.description}}</p>
        <!-- <img :src="'..'+caseContent.symptom.picture"/> -->
        <video :src="caseContent.result.video" controls></video>
    </div>
</template>
<script>
export default {
  created() {
    this.$ajax({
      url: 'http://localhost:8080/learning/casedes/'+this.$route.params.id,
      method: 'GET'
    }).then(response => {
      this.caseName = response.data.caseName
      this.caseContent=response.data.caseContent
    })
  },
  data() {
    return {
      caseName:'hello',
      caseContent:''
    }
  }
}
</script>
