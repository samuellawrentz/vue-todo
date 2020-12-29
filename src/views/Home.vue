<template>
  <div class="home">
    <div class="logout">
      <em @click="logout">{{ $t('Logout') }}</em>
    </div>
   <div class="board">
     <h1>{{$t('Welcome')}}, {{username}}!</h1>
     <Board></Board>
   </div>
   <Toggle></Toggle>
  </div>
</template>

<script lang="ts">
import store from '../store/index';
// @ is an alias to /src
import Board from '@/components/ToDoBoard.vue'
import authMixin from '../mixins/auth.vue'
import Toggle from '@/components/localeToggle.vue'

export default {
  name: 'Home',
  components: {Board, Toggle},
  mixins: [authMixin],
  data(){
    return {
      username: store.state.username
    }
  }
}
</script>
