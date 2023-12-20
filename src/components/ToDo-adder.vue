<template>
  <div class="inputForm-container">
    <div class="close"><i class="fa fa-times" aria-hidden="true" @click="toggle"></i>
    </div>
    <form @submit.prevent="TodoStore.addtask">
        <input type="text" class="input" placeholder="Add Task" v-model="TodoStore.Task">
        <input type="date" class="input" min="12/15/2023" v-model="TodoStore.duedate" >
        <input type="submit" value="add" class="addBtn">
    </form>
  </div>
</template>

<script setup>
import {useTodoStore} from '@/stores/todo'

const TodoStore = useTodoStore();
//const props= defineProps(['adclass'])
const emit= defineEmits(['child-Toggle']);

const toggle=()=>{
emit('child-Toggle');
}


</script>

<style>
.inputForm-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 180px;
    left: 730px;
    width: 500px;
    height: 300px;
    border-radius: 7px ;
    background-color: rgb(70, 126, 126);
}

/* .show{
    display: flex;
} */

.inputForm-container form{
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    padding: 20px;
    margin-top: 5px;
}

.inputForm-container form .input{
    margin-bottom: 20px;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding-left: 20px;
}

.inputForm-container form .addBtn{
    width: 100px;
    height: 50px;
}

.inputForm-container .close{
    display: flex;
    justify-content: center;
    width: 10%;
    margin-left: 320px;
    font-size: 35px;
    margin-top: 10px;
}

.inputForm-container .close i:hover{
    color: beige;
}

</style>