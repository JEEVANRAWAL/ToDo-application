<template>
  <div class="container">
    <ToDoadder v-if="show" @child-Toggle="toggleShow"/>
    <div class="header">
        <h3>To Do App</h3>
        <button @click="toggleShow">Add</button>
    </div>

    <div class="wrapper">
        <div class="section">
            <h3>Tasks Section</h3>
            <div class="section_child-wrapper" v-for="todoTask in TodoStore.todoList" :key="todoTask.id">
                <div class="data">
                  <span>{{ todoTask.task }}</span>
                  <div class="date-wrapper">
                    <div class="duedate">
                        <i>Due Date:</i>
                        <span class="date">{{ todoTask.DueDate}}</span>
                    </div>

                    <div class="remaining-days">
                        <i>{{todoTask.remaining_days}} days remains</i>
                    </div>
                  </div>
                </div>
                <div class="Delete" @click="TodoStore.Deletetodo(todoTask.id)">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
                <div class="Complete" @click="TodoStore.completetask(todoTask.id)">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="section">
            <h3>Complete Section</h3>
            <div class="section_child-wrapper" v-for="completeTask in TodoStore.completeList" :key="completeTask.id">
                <div class="data">{{ completeTask.task }}</div>
                <div class="Delete" @click="TodoStore.Deletetodo(completeTask.id)">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="section">
            <h3>Due Over Section</h3>
            <div class="section_child-wrapper" v-for="dueOver in TodoStore.DueoverList" :key="dueOver.id">
                <div class="data">{{ dueOver.task }}</div>
                <div class="Delete" @click="TodoStore.Deletetodo(dueOver.id)">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import {useTodoStore} from '@/stores/todo'
import ToDoadder from '@/components/ToDo-adder.vue'
import { ref, onMounted } from 'vue';

const show= ref(false);

const TodoStore = useTodoStore();
// const todoTasks= TodoStore.todoList;

const toggleShow=()=>{
    show.value= !show.value ;
}

    onMounted(()=>{
            console.log('hello from template');
            TodoStore.dueOver();
        })

</script>

<style scoped>
.container{
    display: inline-block;
    width: 50vw;
    padding: 30px;
    box-sizing: border-box;
    border:2px solid white;
    border-radius: 7px;
    margin-top: 30px;
    font-family:New Century Schoolbook, TeX Gyre Schola, serif;
    background-color:darkslategrey;
}

.container .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
}

.container .header h3{
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 1px;
}

.container .header button{
    width: 70px;
    font-size: 17px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
}

.container .wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.container .wrapper .section{
    border: 2px solid white;
    padding: 10px;
    width: 100%;
    border-radius: 0px 15px 0px 15px;
    overflow: hidden;
    margin-bottom: 70px;
}

.container .wrapper .section .section_child-wrapper{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 15px;
}

.container .wrapper .section .section_child-wrapper .data{
    display: flex;
    justify-content: space-between;
    width: 70%;
    background-color:darkgray;
    padding: 15px 20px 15px 20px;
    border-radius: 5px;
    color:beige;
    font-weight: bold;
    font-size: 20px;
}

.container .wrapper .section .section_child-wrapper .data .date-wrapper{
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: black;
    background-color: rgb(201, 197, 197);
    padding: 7px;
    border-radius: 8px 0px 8px 0px;
}

.container .wrapper .section .section_child-wrapper .data .date-wrapper .duedate .date{
    margin-left: 5px;
    color: rgb(138, 32, 32);
    font-weight: bold;
}
.container .wrapper .section .section_child-wrapper .Delete, .container .wrapper .section .section_child-wrapper .Complete{
    background-color: green;
    width: 10%;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color:#fff;
    font-size: 25px;
}
.container .wrapper .section .section_child-wrapper .Delete:hover{
    background: red ;
    color: black;
    font-weight:bolder;
    font-size: 21px;
    
    
}

.container .wrapper .section .section_child-wrapper .Complete:hover{
    background: rgb(2, 83, 2) ;
    color: black;
    font-weight:bolder;
    font-size: 21px;
}

.section h3{
    margin-bottom: 10px;
}
</style>