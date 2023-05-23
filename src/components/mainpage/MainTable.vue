<template>
  <div class="mainTableHeader">
    <div style="display: flex;">
      <div class="main-table-header"> LIVE IN-GAME </div>
      <div class="main-table-header active"> GAME LINES </div>
      <div class="main-table-header"> STATS HUB </div>
    </div>
    <div class="divider" />
    <div style="display: flex;">
      <div class="main-table-roundButton active"> tennis </div>
      <div class="main-table-roundButton"> basketball </div>
      <div class="main-table-roundButton"> soccer </div>
      <div class="main-table-roundButton"> hockey </div>
      <div class="main-table-roundButton"> table tennis </div>
      <div class="main-table-roundButton"> handball </div>
    </div>
  </div>
  <div class="moneyLine">
    Moneyline
  </div>
  <div class="moneyLine-table">
    <Accordion id="accordion" />
  </div>
</template>

<script>
import Accordion from './Accordion.vue';
export default {
  components: {
    Accordion,
  },
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
.table-header {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
}
.moneyLine-table {
  background-color: #222;
  margin: 15px;
  padding: 10px;
  text-align: left;
}
.moneyLine {
  background-color: #222;
  padding: 15px;
  margin: 15px;
  text-align: left;
}
.mainTableHeader {
  margin-top: 30px;
  background-color: black;
}
.main-table-roundButton {
  padding: 7px 20px;
  cursor: pointer;
  color: #888;
  text-transform: uppercase;
  font-size: 12px;
  border-style: solid;
  border-radius: 40px;
  border-color: #888;
  margin: 5px;
}

.main-table-roundButton:hover {
  color: #eee;
  border-color: #eee;
}

.main-table-header {
  padding: 10px 20px;
  cursor: pointer;
  color: #888;
}

.main-table-header:hover {
  color: #eee;
}
.active {
  color: white;
  border-color: white;
}
</style>