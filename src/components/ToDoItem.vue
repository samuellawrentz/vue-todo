<template>
    <div>
        <div class="text">
                <span :class="{active: item.completed}"><input type="checkbox" name="completed" :id="'item_' + Math.floor(item.id)" v-model="item.completed" class="completed-check"><label :for="'item_'+Math.floor(item.id)">{{item.value}}</label></span>
        </div>
        <div class="remove" @click="remove(index)">x</div>
    </div>
</template>
<script>
import store from '../store/index'
export default {
    props:['item', 'index'],
    methods: {
    remove(index){
        store.commit('removeItem', index);
    }
    }
}
</script>