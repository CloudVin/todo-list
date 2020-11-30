import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        List: [

        ],
        inputValue: "",
        // 
        selected: 'all'
    },
    mutations: {
        // 初始化列表
        initList(state, data) {
            // console.log(data);
            state.List = data;
            // console.log('state', state.List);
        },
        // 双向绑定input值
        setInputValue(state, value) {
            state.inputValue = value;
        },
        // 添加todo事项
        addTodoListItem(state) {
            const obj = {
                id: state.List.length,
                content: state.inputValue,
                done: false
            }
            state.List.unshift(obj);
            state.inputValue = ''
        },
        // 删除todo，findindex返回的是索引值，
        removeTodoItem(state, id) {
            const i = state.List.findIndex(x => x.id == id)
                // 从第i个位置起删除就是删除自己。
            state.List.splice(i, 1)
        },
        // 改变点击的todo项的完成或未完成的状态，
        changeStatus(state, params) {
            // console.log(params.id);
            // 通过id来选择对应的项
            const i = state.List.findIndex(x => x.id == params.id)
                // console.log('i', i);
            if (i != -1) {
                // console.log("params.status", params.status);
                state.List[i].done = params.status
                    // console.log("state.List[i].done", state.List[i].done);
            }
            // console.log(123);
        },
        // 监听tabs的变化，修改selected的值
        changeTabs(state, key) {
            // console.log(state.selected);
            state.selected = key;
        }


    },
    getters: {
        //根据tabs的key来过滤显示符合的列表
        infoList(state) {
            if (state.selected == 'all') {
                return state.List
            } else if (state.selected == 'done') {
                return state.List.filter(x => x.done === true)
            } else if (state.selected == 'undone') {
                return state.List.filter(x => x.done === false)
            } else {
                return state.List
            }
        }
    },
    actions: {
        async getList(context) {
            const { data: res } = await axios.get('/List.json');
            // console.log(res);
            context.commit('initList', res)
        }
    },
    modules: {}
})