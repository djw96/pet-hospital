<template>
    <div id="question">
        <p>{{text}}</p>
        <div class="options" v-for="option in options">
            <input type="radio" name="option.name" />
            <label>{{option.text}}</label>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
        text:'',
        options:[]
    }
  },
  props: ['text', 'options']
}
</script>
