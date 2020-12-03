<template>

  <div class="container">
    <h1>欢迎使用cloud TodoList</h1>
    <todo-add></todo-add>
    <todo-filter></todo-filter>
    <todo-list></todo-list>

  </div>
</template>

<script>
  import TodoAdd from './TodoAdd'
  import TodoFilter from './TodoFilters'
  import TodoList from './TodoList'

  export default {

    name: 'TodoCon',
    components: {
      TodoAdd,
      TodoFilter,
      TodoList
    }
  }
</script>

<style>
  /* 内容区 */
  .container {
    width: 60vw;
    height: 70vh;
    min-height: 540px;
    position: relative;
    padding: 48px 28px;
    border-radius: 24px;
    background: rgb(245, 246, 252);
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
    padding-bottom: 20px;

  }

  /* 标题 */
  h1 {

    margin: 24px 0;
    font-size: 2rem;
    color: #414873;
  }
</style>