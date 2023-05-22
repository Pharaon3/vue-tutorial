<template>
    <!-- <div class="custom-checkbox">
      <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
      <label :for="id" class="checkbox-label">{{label}}</label>
    </div> -->
    <section :id="id" >
    <v-container fluid>
      <div class="divider colorgreen" />
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h3 class="font-weight-light leftAlign titleClass">
            {{title}}
          </h3>
        </v-col>
      </v-row>
      <v-row align="center" justify="left">
        <v-col cols="12">
          <h3 class="font-weight-light leftAlign subTitleClass">
            Current Corners:  {{currentCorners}}
          </h3>
        </v-col>
      </v-row>
      <div class="divider" />
      <v-row align="center" justify="center">
        <!-- {{corners}} -->
        <li v-for="item in JSON.parse(corners)" :key="item.id">
          <div style="display: flex; justify-content: space-around; align-items: center;">
            <v-col cols="12" md="4" class="col-12 col-md-4 eachBetButton" style="justify-content: center;">
              <p class="font-weight-light centerAlign">
                {{item[0]}}
              </p>
            </v-col>
            <div class="verticalDivider" />
            <v-col cols="12" md="4" class="col-12 col-md-4 eachBetButton" style="justify-content: center;">
              <p class="font-weight-light color">
                {{item[1]}}
              </p>
            </v-col>
            <div class="verticalDivider" />
            <v-col cols="12" md="4" class="eachBetButton" style="justify-content: center;">
              <p class="font-weight-light color">
                {{item[2]}}
              </p>
            </v-col>
            <div class="verticalDivider" />
            <v-col cols="12" md="4" class="eachBetButton" style="justify-content: center;">
              <p class="font-weight-light color">
                {{item[3]}}
              </p>
            </v-col> 
          </div>
          <div class="divider" />
        </li>
      </v-row>
      <div class="divider colorgreen" />
    </v-container>
  </section>
  </template>
  
<script>
// import uniqueId from "lodash.uniqueid";
export default {
    props: {
        title: { required: true, type: String },
        currentCorners: { required: true, type: String },
        corners: {type: String}
        // subTitle: { required: true, type: String },
        // leftTitle: { required: true, type: String },
        // middleTitle: { required: true, type: String },
        // rightTitle: { required: true, type: String },
        // leftAmount: { required: true, type: String },
        // middleAmount: { required: true, type: String },
        // rightAmount: { required: true, type: String },
        // done: { default: false, type: Boolean },
        // id: { required: true, type: String },
    },
    data() {
        return {
          // isDone: this.done,
          // subTitle: "currentCorner: " + {currentCorners}
        }
    }
};
</script>
<style scoped>
  .verticalDivider {
    width: 1px;
    background-color: grey;
    height: 30px;
  }
  .titleClass {
    cursor: pointer;
    padding: 10px;
    padding-left: 20px;
  }
  .subTitleClass {
    cursor: pointer;
    padding: 10px;
    padding-left: 20px;
    font-size: 16px;
  }
  .titleClass:hover {
    color: #58d7af;
  }
  .leftAlign {
    text-align: left;
    padding-left: 20px;
  }
  .centerAlign {
    text-align: center;
  }
  .divider {
    width: 98%;
    height: 1px;
    background-color: #777;
    margin: auto;
  }
  .colorgreen{
    background-color: green;
    width: 99%;
  }
  section {
    background-color: #505050;
    max-width: 900px;
    margin: auto;
  }
  .eachBetButton {
    display: flex; 
    width: 33%; 
    justify-content: 
    space-between;
  /*  max-width: 200px;*/
    cursor: pointer;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 14px;
  }
  .eachBetButton:hover{
    background-color: #aaa;
  }
  .color {
    color: yellow;
  }
  .custom-checkbox > .checkbox-label {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;
  }
  .custom-checkbox > .checkbox {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    height: 2.5rem;
    margin-top: 0;
    padding: 5px;
    border: 2px solid #0b0c0c;
    border-radius: 0;
    appearance: none;
  }
  .custom-checkbox > input:focus {
    outline: 3px dashed #fd0;
    outline-offset: 0;
    box-shadow: inset 0 0 0 2px;
  }
  .custom-checkbox {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
    display: block;
    position: relative;
    min-height: 40px;
    margin-bottom: 10px;
    padding-left: 40px;
    clear: left;
  }
  .custom-checkbox > input[type="checkbox"] {
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: -2px;
    left: -2px;
    width: 44px;
    height: 44px;
    margin: 0;
    opacity: 0;
  }
  .custom-checkbox > .checkbox-label {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 15px 5px;
    cursor: pointer;
    touch-action: manipulation;
  }
  .custom-checkbox > label::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid currentcolor;
    background: transparent;
  }
  .custom-checkbox > input[type="checkbox"]:focus + label::before {
    border-width: 4px;
    outline: 3px dashed #228bec;
  }
  .custom-checkbox > label::after {
    box-sizing: content-box;
    content: "";
    position: absolute;
    top: 11px;
    left: 9px;
    width: 18px;
    height: 7px;
    transform: rotate(-45deg);
    border: solid;
    border-width: 0 0 5px 5px;
    border-top-color: transparent;
    opacity: 0;
    background: transparent;
  }
  .custom-checkbox > input[type="checkbox"]:checked + label::after {
    opacity: 1;
  }
  @media only screen and (min-width: 40rem) {
    label,
    input,
    .custom-checkbox {
      font-size: 19px;
      font-size: 1.9rem;
      line-height: 1.31579;
    }
  }

</style>
