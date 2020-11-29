import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        List: [

        ],
        inputValue: "",
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
        // 改变状态
        changeStatus(state, params) {
            console.log(params.id);
            const i = state.List.findIndex(x => x.id == params.id)
            console.log('i', i);
            if (i != -1) {
                console.log("params.status", params.status);
                state.List[i].done = params.status
                console.log("state.List[i].done", state.List[i].done);
            }
            // console.log(123);
        },
        // 切换tab
        changeTabs(state, key) {
            console.log(state.selected);
            state.selected = key;
        }


    },
    getters: {
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