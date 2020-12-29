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
    // load saved items from local storage
    loadItems(state){
      state.list = [];
      const storedItems = JSON.parse(localStorage.getItem(state.userId) || '{}').list
      storedItems && storedItems.forEach((element: any) => {
        state.list.push(element);
      });
    },
    // Save the current status of the list items
    updateItems(state){
      updateStorage(state);
    },

    // Add an item to list
    addItem(state, item){
      state.list.push(item);
      updateStorage(state);
    },

    // Remove an item from list
    removeItem(state, index){
      state.list.splice(index, 1);
      updateStorage(state);
    },

    // Handle authentication
    setAuth(state, userDetails){
      state.isAuthenticated = userDetails.auth;
      state.username = userDetails.name;
      state.userId = userDetails.username;
    },

    // Clear authenctication while logging out
    removeAuth(state){
      state.isAuthenticated = false;
    },

    // Update locale
    updateLocale(state, locale){
      state.locale = locale
    }
  }
})
