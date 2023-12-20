<template>
  <div class="container">

    <h1>welcome to ToDo App :) </h1>
    <RouterLink class="link" :to="{name:'todo'}">Get Started</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.container{
  margin-top: 30px;
}

.container h1{
  font-size: 70px;
  font-family: cursive;
  margin-bottom: 30px;
}

.container .link{
background-color: green;
padding: 25px;
font-weight: bold;
color: white;
border-radius: 5px;
}
</style>
