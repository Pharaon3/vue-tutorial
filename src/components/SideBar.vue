<template>
  <div class="sidebar">
    <div id="sidebarHeader" class="flex">
      <div>
        <img src="../../public/img/logo.png" class="logo" />
      </div>
      <div>
        <div class="header-upper"> EZ </div>
        <div class="header-lower"> Live </div>
      </div>
    </div>
    <div class="horizontalDivider" />
    <div id="popularGames">
      <div class="sidebar-title">
        Popular
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // label: { required: true, type: String },
    },
    data() {
      return {
        // isDone: this.done,
      }
    }
  };
</script>
<style scoped>
  .sidebar-title {
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    text-align: left;
    padding-left: 10px;
    font-weight: bold;
  }

  .horizontalDivider {
    background-color: #888;
    width: 98%;
    height: 1px;
    margin: auto;
  }

  .sidebar {
    background-color: #333;
    width: 200px;
  }
  .sidebar * {
    margin: 5px;
  }

  .flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .flex div {
    margin: 5px;
  }

  .logo {
    width: 80px;
    height: 50px;
  }

  .header-upper {
    color: white;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }

  .header-lower {
    color: green;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
  }
</style>