<template>
  <div style="margin-left: 10%">
    <h1 style="font-size:30px; margin:25px 0px">{{caseName}}</h1>
    <div class="panel panel-default" style="width:70%">
      <div class="panel-heading">
        <h3>症状</h3>
      </div>
      <div class="panel-body">
        <p>{{caseContent.symptom.description}}</p>
        <img :src="'/static'+caseContent.symptom.picture" style="max-width:70%"/>
        <video :src="'/static'+caseContent.symptom.video" controls style="width:70%"></video>
      </div>
    </div>
    <div class="panel panel-default" style="width:70%">
      <div class="panel-heading">
        <h3>诊断</h3>
      </div>
      <div class="panel-body">
        <p>{{caseContent.exam.description}}</p>
        <img :src="'/static'+caseContent.exam.picture" style="max-width:70%"/>
        <video :src="'/static'+caseContent.exam.video" controls style="width:70%"></video>
      </div>
    </div>
    <div class="panel panel-default" style="width:70%">
      <div class="panel-heading">
        <h3>症状</h3>
      </div>
      <div class="panel-body">
        <p>{{caseContent.symptom.description}}</p>
        <img :src="'/static'+caseContent.symptom.picture" style="max-width:70%"/>
        <video :src="'/static'+caseContent.symptom.video" controls style="width:70%"></video>
      </div>
    </div>
    <div class="panel panel-default" style="width:70%">
      <div class="panel-heading">
        <h3>诊断结果</h3>
      </div>
      <div class="panel-body">
        <p>{{caseContent.result.description}}</p>
        <img :src="'/static'+caseContent.result.picture" style="max-width:70%"/>
        <video :src="'/static'+caseContent.result.video" controls style="width:70%"></video>
      </div>
    </div>
    <div class="panel panel-default" style="width:70%">
      <div class="panel-heading">
        <h3>处理方法</h3>
      </div>
      <div class="panel-body">
        <p>{{caseContent.method.description}}</p>
        <img :src="'/static'+caseContent.method.picture" style="max-width:70%"/>
        <video :src="'/static'+caseContent.method.video" controls style="width:70%"></video>
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

