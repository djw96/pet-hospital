<template>
  <div>
    <h1>Online Test</h1>
    <p>{{message}}</p>
    <time-down @time-end="message = '计时结束'" :endTime="endTime"></time-down>
    <div v-for="question in questions">
      <question :text="question.text" :options="question.options"></question>
    </div>
  </div>
</template>

<script>
import TimeDown from './TimeDown'
import Question from './Question'
export default {
  components: {
    'time-down': TimeDown,
    question: Question
  },
  data() {
    return {
      message: '正在计时',
      endTime: '2018-04-23 16:31:00',
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
