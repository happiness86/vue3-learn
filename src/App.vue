<template>
  <div class="wrapper">
    <!-- <input type="text" name="" id="content" /> -->
    <!-- <hello-world :msg="msg"></hello-world> -->
    <input type="radio" name="user" value="hongliang" checked @change="getUser">hongliang
    <input type="radio" name="user" value="liangxiao" @change="getUser">liangxiao
    <user-reponsitories :user="user"></user-reponsitories>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UserReponsitories from '@/components/UserReponsitories'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    UserReponsitories
  },
  data() {
    return {
      msg: 'test',
      user: 'hongliang'
    }
  },
  methods: {
    getUser(e) {
      console.log(e)
      this.user = e.target.value
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
