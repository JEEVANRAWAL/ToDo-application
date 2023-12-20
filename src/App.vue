<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
       | <RouterLink to="/">Home</RouterLink> |
      </nav>
  </header>
  <RouterView />

</template>

<style>

#app{
  display: flex;
  flex-direction: column;
}

header {
  margin-top: 10px;
  line-height: 1.5;
  max-height: 100vh;
 
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

</style>
