<template>
  <div id="app">
    <main>
      <todo-con></todo-con>
    </main>
  </div>
</template>

<script>
  import TodoCon from './components/TodoCon'
  import {
    mapActions
  } from 'vuex'
  export default {
    name: 'App',
    components: {
      TodoCon
    },
    created() {
      this.getList();
    },
    methods: {
      ...mapActions(['getList'])
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Microsoft Yahei";
  }

  html {
    font-size: 16px
  }

  /* 整个页面*/
  main {
    width: 100vw;
    /* 这里设置为min-height可以防止滚动后面的背景变成白色 */
    min-height: 100vh;
    padding: 10vh 0;
    display: grid;
    align-content: start;
    justify-content: center;
    background: rgb(203, 210, 240);
  }
</style>