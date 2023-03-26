<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li>
        <to-do-item></to-do-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";
export default {
  name: 'App',
  components: {
    ToDoItem,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
