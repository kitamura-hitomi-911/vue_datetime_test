<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Datetime v-model="date1" type="datetime" input-id="date1">
      <label slot="before" for="date1">日付１</label>
    </Datetime>
    <DatePicker v-model="date2" :language="ja"></DatePicker>
    <VueCtkDateTimePicker
        v-model="date3"
        :format="'YYYY-MM-DD HH:mm'"
        :no-label="true"
        :no-header="true"
        button-now-translation="今日"
        :minute-interval="5"
        :disabled-hours="['00', '01', '02', '03', '04', '05', '06', '23']"
        :overlay="true"
        :label="placeHolder"
    ></VueCtkDateTimePicker>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import {Datetime} from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

/* これは時間できなかった */
import DatePicker from 'vuejs-datepicker'
import {ja} from 'vuejs-datepicker/dist/locale'

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
  name: 'HelloWorld',
  data(){
    return {
      date1:'2020-12-12T00:00:00+09:00',
      date2:new Date('2020-12-12'),
      ja,
      date3:'2020-12-12 11:00',
      placeHolder:'日時を選択'
    }
  },
  props: {
    msg: String
  },
  components:{
    Datetime,
    DatePicker,
    VueCtkDateTimePicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
