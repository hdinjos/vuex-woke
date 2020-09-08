import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  count: 0,
  todos: [
    {id:1, text: "ngoding", done: false},
    {id:2, text: "tidur", done: true},
  ],
  posts:[]
};

const mutations = {
  countChange(state) {
    state.count++;
  },
  countChangeByTen(state, num){
    state.count += num;
  },
  clearCount(state){
    state.count = 0;
  },
  getPost(state, data) {
    state.posts = data;
  }
};

const actions = {
  incrementAsync({commit}){
    setTimeout(()=>{
      commit("countChangeByTen")
    }, 1000);
  },
  async posts({commit}) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      commit('getPost', data);
    } catch (error) {
      console.log(error);
    }
  },
};

const getters = {
  getCount: function (state){
    return state.count;
  },
  doneTodos: function (state){
    return state.todos.filter(todo => todo.done);
  },
  doneTodosCount: function(state, getters){
    return getters.doneTodos.length
  },
  getUpPosts: function(state) {
    let limitTen = state.posts.filter(item=>item.id <= 10);
    return limitTen
  }
};

const modules = {
  
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
})
