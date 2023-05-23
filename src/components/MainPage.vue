<template>
  <div class="mainpage">
    <AdCards id="adcards"/>
    <MainTable id="maintable" />
  </div>
</template>

<script>
import AdCards from "./mainpage/AdCards.vue";
import MainTable from "./mainpage/MainTable.vue";
export default {
  components: {
    AdCards,
    MainTable,
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
.mainpage {
  background-color: #000;
  margin: 10px;
}
</style>