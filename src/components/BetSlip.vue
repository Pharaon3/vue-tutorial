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
        <div class="flex" style="align-items: baseline;">
          <div style="cursor: pointer;"><i class="fa fa-times" aria-hidden="true"></i></div>
          <div style="text-align: left; padding-left: 10px;">
            <div class="betcard-header">Man City</div>
            <div>Moneyline</div>
            <div>Brighton vs Man City</div>
          </div>
        </div>
        <div class="flex" style="align-items: baseline;">
          <div style="font-weight: bold; padding-right: 10px;">-125</div>
          <div class="inputbox">
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input type="number" placeholder="0.00">
          </div>
        </div>
      </div>
      <div class="betcard">
        <div class="flex" style="align-items: baseline;">
          <div style="cursor: pointer; padding-left: 10px;"><i class="fa fa-times" aria-hidden="true"></i></div>
          <div style="text-align: left;">
            <div class="betcard-header">Man City</div>
            <div>Moneyline</div>
            <div>Brighton vs Man City</div>
          </div>
        </div>
        <div class="flex" style="align-items: baseline;">
          <div style="font-weight: bold; padding-right: 10px;">-125</div>
          <div class="inputbox">
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input type="number" placeholder="0.00">
          </div>
        </div>
      </div>
      <div class="betButton">
        Bet Now
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
.betButton {
  border-radius: 10px;
  background-color: #6f6;
  color: white;
  padding: 10px 30px;
  cursor: pointer;
}
.betButton:hover {
  background-color: #0f0;
  color: white;
}
.betButton:active {
  background-color: #050;
  color: #eee;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
input {
  border-style: none;
  width: 100%;
  text-align: right;
  font-size: 14px;
}
input:focus {
  outline: none;
}
.inputbox {
  height: 40px;
  width: 90px;
  border-radius: 7px;
  border-style: solid;
  border-width: 1px;
  text-align: right;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
}
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
  cursor: pointer;
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