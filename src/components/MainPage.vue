<template>
  <div class="mainpage">
    <AdCards id="adcards"/>
  </div>
</template>

<script>
import AdCards from "./mainpage/AdCards.vue";
export default {
  components: {
    AdCards,
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
  background-color: #111;
  margin: 10px;
}
</style>