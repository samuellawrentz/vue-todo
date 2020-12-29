<template>
  <div id="app" :class="{ dark: themeToggle }">
   <div class="theme-switch-wrapper">
       <label class="theme-switch" for="checkbox">
    <input type="checkbox" id="checkbox" v-model="themeToggle"/>
    <div class="slider round"></div>
  </label>
    <em>{{ $t('Dark') }}</em>
  </div>
  <div v-if="!isAuth">
    <Toggle></Toggle>
  </div>
    <router-view/>
  </div>
</template>
<script>
import store from '../src/store/index';
import Toggle from './components/localeToggle.vue'
export default {
  components:{
    Toggle
  },
  data(){
    return{
      // theme is toggled using CSS
       themeToggle: false,
    }
  },
  computed:{
    isAuth(){
      return store.state.isAuthenticated
    }
  },
}
</script>
<style lang="scss">
body{
  margin: 0;
}
#app {
  --base-color: #fff;
  --contrast-color: #333;
  position: relative;
  margin: 0;
  min-height: 95vh;
  padding: 3rem 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--contrast-color);
  background-color: var(--base-color)
}

#app.dark{
    --base-color: #171b1f;
    --contrast-color: #fff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--contrast-color);
    }
  }
}

.loc-toggle{
    right: 6rem;
    position: absolute;
    top: 1.5rem;
    cursor: pointer;
}

/*slider switch css */
.theme-switch-wrapper, .logout {
  display: flex;
  align-items: center;
  position: absolute;
  left: 3rem;
  top: 1.5rem;
  
  em {
    margin-left: 10px;
    font-size: 1rem;
  }
}
.logout{
  right: 3rem;
  left: auto;
  cursor: pointer;
}
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media (max-width: 500px){
  #app{
    padding-top: 6rem;
  }
  .theme-switch-wrapper {
left: 10px
  }
  .loc-toggle{
    right: 0;
    bottom: 0;
    top: auto;
  }
   .logout{
     right: 10px;
   }
   #add{
     right: 7.5% !important;
   }
}

</style>
