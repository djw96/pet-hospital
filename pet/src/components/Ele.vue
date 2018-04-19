<template>
  <div>
    <p>{{message}}</p>
    <time-down @time-end="message = '计时结束'" :endTime="endTime"></time-down>
    <question :text="text" :options="options"></question>
  </div>
</template>
<script>
import TimeDown from './TimeDown'
import Question from './Question'
export default {
  components: {
    'time-down': TimeDown,
    'question':Question
  },
  data() {
    return {
      message: '正在计时',
      endTime: '2018-04-19 14:16:00',
      text:'试题',
      options:[
        {
          name:'A',
          text:'选项A'
        },{
          name:'B',
          text:'选项B'
        },{
          name:'C',
          text:'选项C'
        },{
          name:'D',
          text:'选项D'
        }
      ]
    }
  }
}
</script>
