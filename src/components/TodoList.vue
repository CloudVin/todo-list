<template>
  <div class="todolist">
    <todo-list-item v-for="item in infoList" :key="item.id" :class="{'done':item.done}">
      <template v-slot:input>
        <input type="checkbox" :checked='item.done' @change="checkedChange($event,item.id)">
      </template>
      {{item.content}}
      <template v-slot:deleteSlot>
        <span class=" delete iconfont icon-delete" @click="removeItem(item.id)"></span>
      </template>
    </todo-list-item>
  </div>
</template>

<script>
  import TodoListItem from './TodoListItem'
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'TodoList',
    data() {
      return {
        isdone: false
      }
    },
    components: {
      TodoListItem
    },
    computed: {
      ...mapGetters(["infoList"]),

    },
    methods: {
      // 删除todo
      removeItem(id) {
        //  console.log(id);
        this.$store.commit('removeTodoItem', id)
      },

      //  监听todo列表的选中状态，传入id来判断对应的项
      checkedChange($event, id) {
        //  console.log($event.target.checked);
        // 当需要传过个参数时，通过对象形式
        const params = {
          id: id,
          status: $event.target.checked
        }
        this.$store.commit('changeStatus', params)
      }
    }
  }
</script>

<style>
  .todolist {
    display: grid;
    row-gap: 14px;
    overflow-x: hidden;
    overflow-y: scroll;
    max-height: 320px;
  

  }

  /* 美化滚动条 */
  .todolist::-webkit-scrollbar {
    display: none;
    transform: translateX(5px);
    width: 6px;
    height: 0px;
  }

  /*设置滚动条上的滚动滑块样式*/
  .todolist:-webkit-scrollbar-thumb {
    background: transparent;
  }

  /*鼠标位于内容上时，滚动条样式*/
  .todolist:hover::-webkit-scrollbar {
    transform: translateX(5px);
    width: 5px;
    height: 0px;
    background: rgba(238, 238, 238, 1);
    border-radius: 6px;
  }

  /*鼠标位于内容上时，滚动滑块样式*/
  .todolist:hover::-webkit-scrollbar-thumb {
    background: #b382f9;
    border-radius: 10px;
  }
</style>