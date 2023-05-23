<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ item.title }}
        <span><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
      </div>
      <div v-show="activeIndex === index" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      items: [
        { title: 'Item 1', content: 'Content of Item 1' },
        { title: 'Item 2', content: 'Content of Item 2' },
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
