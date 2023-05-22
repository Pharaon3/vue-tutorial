<template>
  <div class="adcards">
    <div class="AdHeader">
      <div class="closeButton">X</div>
      <div class="flex card-header" style="justify-content: space-between;">
        <div class="card-header-left">
          <div>
            Join DraftKings Sortsbook blahblahblah
          </div>
          <div class="link">View Terms ></div>
        </div>
        <div class="flex">
          <div class="roundButton blueButton"> Log In </div>
          <div class="roundButton whiteButton"> Sign Up </div>
        </div>
      </div>
      <div class="cards flex">
        <div class="card">
          <h2> Get Up to a 100% boost </h2>
          <p> Earn bigger boosts for each MLB SGP leg added! </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
.cards {
  justify-content: flex-start;
}
.card {
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  background-color: green;
  height: 180px;
  width: 300px;
}
.whiteButton:hover {
  margin-top: -3px;
}
.whiteButton:active {
  margin-top: 3px;
}
.blueButton {
  background-color: blue;
  color: white;
}
.blueButton:hover {
  margin-top: -3px;
  margin-left: -3px;
}
.blueButton:active {
  background-color: #56d;
  color: white;
  margin-top: 3px;
  margin-left: 3px;
}
.greenBG {
  background-color: #5d5;
}
.roundButton {
  border-width: 1px;
  border-style: solid;
  border-color: #335;
  border-radius: 10px;
  padding: 10px 40px;
  cursor: pointer;
}
.card-header-left {
  width: 50%;
  text-align: left;
  padding-left: 20px;
  text-transform: uppercase;
}
.link {
  color: blue;
  cursor: pointer;
  font-size: 12px;
}
.card-header {
  height: 80px;
  color: black;
  background-color: white;
}
.closeButton {
  color: black;
  text-align: right;
  padding-top: 3px;
  padding-right: 5px;
  cursor: pointer;
  background-color: white;
}

.adcards {
  background-color: #111;
}

.AdHeader {
  height: 300px;
  background-color: #444;
}
</style>