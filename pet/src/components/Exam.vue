<template>
  <div>
    <h1>Online Test</h1>
    <p>{{message}}</p>
    <div v-for="question in questions">
      <question :text="question.text" :options="question.options"></question>
    </div>
  </div>
</template>

<script>
import Question from './Question'
export default {
  components: {
    question: Question
  },
  data() {
    return {
      message: '正在计时',
      questions: [
        {
          text: '试题1',
          options: [
            {
              name: 'A',
              text: '选项A'
            },
            {
              name: 'B',
              text: '选项B'
            },
            {
              name: 'C',
              text: '选项C'
            },
            {
              name: 'D',
              text: '选项D'
            }
          ]
        },
        {
          text: '试题2',
          options: [
            {
              name: 'A',
              text: '选项A'
            },
            {
              name: 'B',
              text: '选项B'
            },
            {
              name: 'C',
              text: '选项C'
            },
            {
              name: 'D',
              text: '选项D'
            }
          ]
        }
      ]
    }
  }
}
</script>
