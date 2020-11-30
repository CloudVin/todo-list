<template>
  <div class="filters">
           <span class="filter" 
                :class="{'active':selected==item.key}" 
                v-for='item in viewType' 
                :key="item.key"  
                @click="choose(item.key)">{{item.text}}</span>
           
       </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name:'TodoFilter',
   
    data(){
      return {
        viewType:[
          {
            text:'全部',
            key:'all'
          },
          {
            text:'已完成',
            key:'done'
          },
          {
            text:'未完成',
            key:'undone'
          }
        ],
        
      }
    },
    computed:{
      ...mapState(['selected'])
    },
    methods:{
      // 监听点击tab的切换，点击了谁就将key传给changeTabs，然后显示对应的列表
      choose(key){
        this.$store.commit('changeTabs',key)
      }
    }
 }

</script>

<style>
 .filters{
     display: flex;
     color:#c0c2ce;
     margin: 24px 2px;
   }
   .filters .filter{
     margin-right: 16px;
     transition: 0.5s;
     cursor: pointer;
   }
   .filters .filter.active{
     color:#6b729c;
     transform: scale(1.2);
   }
</style>