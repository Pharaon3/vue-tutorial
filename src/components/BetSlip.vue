<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="betslip">
    <div class="betslip-header">
      <div>
        Bet Slip
      </div>
      <div class="betslip-header-help"> Clear All <i class="fa fa-info-circle" aria-hidden="true"></i></div>
    </div>
    <div class="betInfo">
      <div class="betInfoTitle">Singles</div>
      <div class="divider" />
      <div class="betcard">
        <div class="flex">
          <div style="cursor: pointer;"><i class="fa fa-times" aria-hidden="true"></i></div>
          <div style="text-align: left;">
            <div class="betcard-header">Man City</div>
            <div>Moneyline</div>
            <div>Brighton vs Man City</div>
          </div>
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
.betcard-header {
  font-size: 14px;
  font-weight: bold;
}
.betcard {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.betInfoTitle {
  text-transform: uppercase;
  font-size: 16px;
  text-align: left;
}
.betslip-header-help {
  font-size: 14px;
  text-transform: initial;
}

.betslip-header {
  text-transform: uppercase;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.betslip {
  background-color: white;
  border-radius: 10px;
  color: black;
  margin: 10px;
  padding: 10px;
}
</style>