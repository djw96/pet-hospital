<template>
  <div style="margin-left: 10%">
    <h1 style="font-size:30px; margin:25px 0px">{{caseName}}</h1>
    <div class="panel panel-default" style="width:70%">
      <div class="panel-heading">
        <h3>症状</h3>
      </div>
      <div class="panel-body">
        <p>{{caseContent.symptom.description}}</p>
        <img src="./assets/pet/pet8.jpg" />
        <video :src="caseContent.symptom.video" controls></video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$ajax({
      url: 'http://localhost:8080/learning/casedes/' + this.$route.params.id,
      method: 'GET'
    }).then(response => {
      this.caseName = response.data.caseName
      this.caseContent = response.data.caseContent
    })
  },
  data() {
    return {
      caseName: 'hello',
      caseContent: ''
    }
  }
}
</script>
<style>

