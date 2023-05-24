<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <div id="sidebarHeader" class="flex col15">
      <div>
        <img src="../../public/img/logo.png" class="logo" />
      </div>
      <div>
        <div class="header-upper"> EZ </div>
        <div class="header-lower"> Live </div>
      </div>
    </div>
    <div style="height: 100%; width: 100%">
      <div class="header-bot-titles">
        <div>Home</div>
        <div>My Bets</div>
        <div>Live In-Game</div>
        <div>Promos</div>
        <div>How To Bet</div>
        <div>VIP</div>
        <div>Pools</div>
        <div>Social</div>
        <div>Dynasty</div>
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
<style>  .col15 {
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

  @media (max-width: 1000px) {
    .header-bot-titles div {
      /* font-size: 14px; */
    }
  }
</style>