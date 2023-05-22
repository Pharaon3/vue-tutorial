<template>
  <div class="sidebar">
    <div id="popularGames">
      <div class="sidebar-menus">
        <div class="sidebar-title">
          Popular
        </div>
        <div id="popularMenus" class="sidebar-menu">
          <div>NBA</div>
          <div>NHL</div>
          <div>MLB</div>
          <div>NFL</div>
          <div>French Open Qual.(M)</div>
          <div>Boxing</div>
          <div>USA-MLS</div>
          <div>Champions League</div>
        </div>
      </div>
      <div class="sidebar-menus sidebar-title">
        Sports teams
      </div>
      <div class="sidebar-menus">
        <div class="sidebar-title">
          A-Z Sports
        </div>
        <div id="popularMenus" class="sidebar-menu">
          <div>aussie rules</div>
          <div>baseball</div>
          <div>basketball</div>
          <div>boxing</div>
          <div>cricket Open Qual.(M)</div>
          <div>Boxing</div>
          <div>cycling</div>
          <div>darts</div>
          <div>football</div>
          <div>golf</div>
        </div>
      </div>
      <div class="sidebar-menus">
        <div class="sidebar-title">
          Popular
        </div>
        <div id="popularMenus" class="sidebar-menu">
          <div>NBA</div>
          <div>NHL</div>
          <div>MLB</div>
          <div>NFL</div>
          <div>French Open Qual.(M)</div>
          <div>Boxing</div>
          <div>USA-MLS</div>
          <div>Champions League</div>
        </div>
      </div>
      <div class="sidebar-menus sidebar-title">
        Sports teams
      </div>
      <div class="sidebar-menus">
        <div class="sidebar-title">
          A-Z Sports
        </div>
        <div id="popularMenus" class="sidebar-menu">
          <div>aussie rules</div>
          <div>baseball</div>
          <div>basketball</div>
          <div>boxing</div>
          <div>cricket Open Qual.(M)</div>
          <div>Boxing</div>
          <div>cycling</div>
          <div>darts</div>
          <div>football</div>
          <div>golf</div>
        </div>
      </div>
      <div class="sidebar-menus">
        <div class="sidebar-title">
          Popular
        </div>
        <div id="popularMenus" class="sidebar-menu">
          <div>NBA</div>
          <div>NHL</div>
          <div>MLB</div>
          <div>NFL</div>
          <div>French Open Qual.(M)</div>
          <div>Boxing</div>
          <div>USA-MLS</div>
          <div>Champions League</div>
        </div>
      </div>
      <div class="sidebar-menus sidebar-title">
        Sports teams
      </div>
      <div class="sidebar-menus">
        <div class="sidebar-title">
          A-Z Sports
        </div>
        <div id="popularMenus" class="sidebar-menu">
          <div>aussie rules</div>
          <div>baseball</div>
          <div>basketball</div>
          <div>boxing</div>
          <div>cricket Open Qual.(M)</div>
          <div>Boxing</div>
          <div>cycling</div>
          <div>darts</div>
          <div>football</div>
          <div>golf</div>
        </div>
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
<style>
.sidebar-menus{
  margin-bottom: 20px;
}
.sidebar-menu {
  text-align: left;
}

.sidebar-menu div {
  text-align: left;
  padding-left: 30px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 14px;
  cursor: pointer;
}
.sidebar-menu div:hover {
  background-color: #555;
}

.sidebar-title {
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  text-align: left;
  padding-left: 10px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}
.sidebar-title:hover {
  color: #58d7af;
  background-color: #555;
}

.horizontalDivider {
  background-color: #888;
  width: 98%;
  height: 1px;
  margin: auto;
}

.sidebar {
  background-color: #333;
  /* width: 200px; */
  padding-top: 20px;
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
}</style>