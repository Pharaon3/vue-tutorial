<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ item.title }}
        <span v-show="activeIndex === index"><i class="fa fa-chevron-up" aria-hidden="true"></i></span>
        <span v-show="activeIndex != index"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
      </div>
      <div v-show="activeIndex === index" class="accordion-content">
        <div v-if="item.content == '01'">
          <BetTable01 id="betTable01" />
        </div>
        <div v-if="item.content == '02'">
          <BetTable01 id="betTable01" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetTable01 from './BetTable/BetTable01.vue';
export default {
  components: {
    BetTable01,
  },
  data() {
    return {
      activeIndex: null,
      items: [
        { title: 'MLB', content: '01' },
        { title: 'Item 2', content: '02' },
        { title: 'Item 3', content: 'Content of Item 3' }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    }
  }
};
</script>

<style>
.accordion {
  background-color: #111;
  color: white;
}

.accordion-item {
  margin-bottom: 10px;
}

.accordion-header {
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.accordion-content {
  padding: 10px;
  cursor: pointer;
}

.rotate-icon {
  transform: rotate(180deg);
}
</style>
