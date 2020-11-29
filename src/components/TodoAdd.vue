<template>
  <div>
      <div class="input-add">
         <input type="text" name="todo-input" :value="inputValue" @input="changeInput" autocomplete="off">
         <button @click='addTodo'>
           <i class="plus"></i>
         </button>
       </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'TodoAdd',
    computed:{
      ...mapState(['inputValue'])
    },
    methods:{
      // 监听文本框内容变化
      changeInput(e){
        this.$store.commit('setInputValue',e.target.value) 
      },
      // 添加todo事项
      addTodo(){
        if(this.inputValue.trim().length<=0){
          return alert('请输入内容')
        }
        this.$store.commit('addTodoListItem')
      }
    }
}
</script>

<style>
/* 添加todo文本输入框容器*/
.input-add{
     position: relative;
     display: flex;
     
     align-items: center;
   }

   .input-add input {
     padding:16px 65px 16px 18px;
     background: #fff;
     width: 100%;
     border-radius:24px ;
     outline: none;
     border: none;
    font-size: 1rem;
    box-shadow: rgba(0,0,24,0.1);
    color: #626262;
   }
   .input-add button{
     position: absolute;
     right: 0;
     border:none;
     width: 46px;
     height: 46px;
     border-radius: 50%;
     background: linear-gradient(90deg,#c0a5f3,#7f95f7,#2ad4da,#da2ac3,#7ff7cf,#c0a5f3);
     background-size: 500%;
     border:none;
     outline: none;
    cursor: pointer;
   }
    .input-add button:hover{
        animation: sun 8s infinite;
    }
   .input-add .plus{
     display: block;
     width: 100%;
     height: 100%;
     background: linear-gradient(#fff,#fff),linear-gradient(#fff,#fff);
     background-size: 50% 2px,2px 50%;
     background-position: center;
     background-repeat: no-repeat;
     outline: none;
     border: none;
   }
   @keyframes sun{
     100%{
       background-position:-500% 0;
     }
   }
</style>