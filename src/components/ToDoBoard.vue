<template>
    <div class="board-wrapper">
        <div class="input-wrapper">
            <input type="text" @keypress.enter="add" :placeholder="$t('Question')" v-model="toDoItem" id="todoinput">
        <span @click=add id="add">+</span>
        </div>
        <div class="toggles" v-if="list.length">
            <span @click="filter = 'all'" :class="{selected: filter === 'all'}">All</span>
            <span @click="filter = 'todo'" :class="{selected: filter === 'todo'}" v-if="(list.filter(item => !item.completed)).length">ToDo</span>
            <span @click="filter = 'done'" :class="{selected: filter === 'done'}" v-if="(list.filter(item => item.completed)).length">Done</span>
        </div>
        <div class="list" :class="filter">
            <div class="list-item" v-for="(item, index) in list" :key="item.id" :class="{done: item.completed}">
                <div class="text">
                    <span :class="{active: item.completed}"><input type="checkbox" name="completed" :id="'item_' + Math.floor(item.id)" v-model="item.completed" class="completed-check"><label :for="'item_'+Math.floor(item.id)">{{item.value}}</label></span>
                </div>
                <div class="remove" @click="remove(index)">x</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// Main todo component
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Board extends Vue {
    private list = [];
    private toDoItem = '';
    private filter = 'all';

created(){
    this.$store.commit('loadItems');
    this.list = this.$store.state.list
}
    // Add item to list
    add(){
        this.toDoItem && this.$store.commit('addItem', {id: Math.floor(Math.random() * 100), value: this.toDoItem, completed: false});
        this.toDoItem = '';
    }

    // Remove item from list
    remove(index: number){
        this.$store.commit('removeItem', index);
    }

    // Mark task as completed
    completeTask(item: any){
        item.completed = true;
    }
    // Save the status of the list before destroying
    beforeDestroy(){
        this.$store.commit('updateItems');
    }
}

</script>
<style lang="scss">
.list{
    padding: 0 1rem;
}
.toggles{
    display: flex;
    padding: 0 1rem;
    margin-top: 4rem;
    width: 250px;
    span{
    padding: 4px 10px;
    border: 1px solid var(--contrast-color);
    margin-right: 16px;
    cursor: pointer;
    min-width: 50px;
    border-radius: 35px;
    &.selected{
            background-color: var(--contrast-color);
            color: var(--base-color);
    }
    }
}

.list.todo > .done{
    display: none;
}

.list.done > *:not(.done){
    display: none;
}
.list-item{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 4px;
    margin: 1rem 0;
    border: 1px solid var(--contrast-color);
    label{
        cursor: pointer;
    }
    .active label{
        text-decoration: line-through;
    }
    .completed-check{
        margin-right: 10px;
    }
}
#todoinput{
    max-width: 350px;
    width: 100%;
    height: 40px;
    color: var(--contrast-color);
    font-size: 20px;
    background: transparent;
    border: 1px solid var(--contrast-color);
    border-radius: 55px;
    padding-left: 20px;
    outline: none;
}
.board-wrapper{
    max-width: 500px;
    margin: 0 auto;
}
.remove{
    cursor: pointer;
    transform: scaleX(1.2);
    font-weight: 500;
}
#add{
        position: absolute;
    height: 34px;
    display: flex;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    right: 70px;
    border-radius: 50%;
    width: 34px;
    background: var( --contrast-color);
    color: var( --base-color);
    font-size: 32px;
    text-align: center;
    opacity: 0.9;
    font-weight: 500;
    justify-content: center;
    cursor: pointer;
}
.input-wrapper{
    position: relative;
    outline: none;
}
</style>