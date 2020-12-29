import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Use Local Storage as DB for now
// Replace logic with Actual API calls in production
function updateStorage(state: any){
  localStorage.setItem(state.userId, JSON.stringify({...JSON.parse(localStorage.getItem(state.userId) || '{}'), list: state.list}))
}

const listArray: any[] = [];
export default new Vuex.Store({
  state: {
    list: listArray,
    isAuthenticated: false,
    username: '',
    userId: '',
    locale: 'en'
  },
  mutations: {
    loadItems(state){
      state.list = [];
      const storedItems = JSON.parse(localStorage.getItem(state.userId) || '{}').list
      storedItems && storedItems.forEach((element: any) => {
        state.list.push(element);
      });
    },
    updateItems(state){
      updateStorage(state);
    },
    addItem(state, item){
      state.list.push(item);
      updateStorage(state);
    },
    removeItem(state, index){
      state.list.splice(index, 1);
      updateStorage(state);
    },
    setAuth(state, userDetails){
      state.isAuthenticated = userDetails.auth;
      state.username = userDetails.name;
      state.userId = userDetails.username;
    },
    removeAuth(state){
      state.isAuthenticated = false;
    },
    updateLocale(state, locale){
      state.locale = locale
    }
  }
})
