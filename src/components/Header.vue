<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <div id="sidebarHeader" class="flex" style="justify-content: space-between;">
      <div>
        <img src="../../public/img/logo.png" class="logo" />
      </div>
      <div>
        <div class="header-upper"> EZ </div>
        <div class="header-lower"> Live </div>
      </div>
    </div>
    <div style="width: 100%;" class="navbar">
      <div class="header-bot-titles">
        <div>Home</div>
        <div>My Bets</div>
        <div>Live In-Game</div>
        <div>Promos</div>
        <div>How To Bet</div>
        <div>VIP</div>
        <div>Pools</div>
      </div>
      <div class="navbar-mobile" style="height: 100%;">
        <div class="navbar-bar"><i class="fa fa-bars" style="font-size: 30px; cursor: pointer;"
            @click="showMenu = !showMenu" aria-hidden="true"></i></div>
        <ul :style="showMenu ? 'display: block;' : 'display: none;'" class="navbar-list">
          <div>Home</div>
          <div>My Bets</div>
          <div>Live In-Game</div>
          <div>Promos</div>
          <div>How To Bet</div>
          <div>VIP</div>
          <div>Pools</div>
        </ul>
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
      showMenu: true,
    }
  }
};
</script>
<style>
.col15 {
  width: 15%;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #555;
}

.header-bot-titles {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.header-titles {
  display: flex;
  padding-top: 10px;
}

.header-titles div {
  text-transform: uppercase;
  font-size: 14px;
  color: #ddd;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  padding-bottom: 3px;
}

.header-titles div:hover {
  font-weight: bold;
  color: green;
}

.header-bot-titles div {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
}

.header-bot-titles div:hover {
  color: #fff;
}

.header {
  display: flex;
  background-color: #333;
  height: 80px;
}

.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  height: 80px;
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

.navbar-bar {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: end;
  padding-right: 20px;
}

.navbar-mobile {
  display: none;
}

.navbar-list {
  background-color: #333;
  margin: 0px;
  text-align: right;
  font-size: 30px;
  position: relative;
  z-index: 1000;
}
.navbar-list div {
  padding: 3px;
  padding-right: 20px;
  cursor: pointer;
}

.navbar-list div:hover {
  background-color: #555;
}

@media (max-width: 789px) {

  .header-bot-titles {
    display: none;
  }

  .navbar-mobile {
    display: block;
  }
}
</style>