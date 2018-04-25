<template>
    <div>
        <h2>{{$route.params.caseName}}</h2>
        <p>{{caseExam}}</p>
        <p>{{caseSymptom}}</p>
        <p>{{caseMethod}}</p>
        <p>{{caseResult}}</p>
    </div>
</template>
<script>
export default {
  created() {
    this.$ajax({
      url: 'http://localhost:8080/learning/casedes/'+this.$route.params.id,
      method: 'GET'
    }).then(response => {
      // 待修改
      this.caseExam = 'Exam: ' + response.data.caseResource.description
    })

    this.$ajax({
      url: 'http://localhost:8080/getCaseResource',
      method: 'POST',
      data: this.$qs.stringify({
        id: this.$route.params.symptom
      })
    }).then(response => {
      this.caseSymptom = 'Symptom: ' + response.data.caseResource.description
    })

    this.$ajax({
      url: 'http://localhost:8080/getCaseResource',
      method: 'POST',
      data: this.$qs.stringify({
        id: this.$route.params.method
      })
    }).then(response => {
      this.caseMethod = 'Method: ' + response.data.caseResource.description
    })

    this.$ajax({
      url: 'http://localhost:8080/getCaseResource',
      method: 'POST',
      data: this.$qs.stringify({
        id: this.$route.params.result
      })
    }).then(response => {
      this.caseResult = 'Restlt: ' + response.data.caseResource.description
    })
  },
  data() {
    return {
      caseExam: 0,
      caseSymptom: 0,
      caseMethod: 0,
      caseResult: 0,
      caseTest:'hallo world'
    }
  }
}
</script>
