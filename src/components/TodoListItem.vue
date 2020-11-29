<template>
   <div class="todolist-item">
             <label>
               <slot name="input"></slot>
               <slot></slot>
               <span class="check-button"></span>

             </label>
             <slot name="deleteSlot"></slot>
    </div>
</template>

<script>

export default {
    name:"TodoListItem",
    created(){

    },
   
    methods:{
     
    }
}
</script>

<style>
.todolist .todolist-item{
    position: relative;
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    color: #626262;
  }
  .todolist-item label{
    position: relative;
    display:flex;
    align-items: center;

  }
  .todolist-item.done label{
    text-decoration: line-through;
    color: #c9c9c9;
  }
  /* 设置标签 */
  .todolist-item label span.check-button{
    position: absolute;
    top: 0;
  }
  /* 利用伪元素 */
.todolist-item label span.check-button::before,
.todolist-item label span.check-button::after{
  content: '';
  display: block;
  border-radius:50% ;
  width: 18px;
  height: 18px;
}
.todolist-item label span.check-button::before{
  border: 1px solid #b382f9;
}
.todolist-item label span.check-button::after{
  transition: 0.25s;
  background: #b382f9;
  transform: translate(1px,-19px) scale(0.8);
  opacity: 0;
}
/* 将原始的checkbox隐藏 */
.todolist-item label input{
  margin-right: 16px;
  opacity: 0;
}
.todolist-item label input:checked+span.check-button::after{
  opacity: 1;
}
/* 删除按钮样式 */
.delete{
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  right: 12px;
  bottom: 15px;
  cursor: pointer;
  /* background: pink; */

}
</style>