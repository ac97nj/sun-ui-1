<template>
  <div class="sun-tabs">
    <div class="sun-tabs-nav" ref="container">
      <div class="sun-tabs-nav-item  " v-for="(t,index) in titles"
           :ref="el=>{if(el)navItems[index]=el}"
           :key="index"
           :class="{selected: t === selectedValue}"
           @click="select(t)"
      >{{ t }}
      </div>
      <div class="sun-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="sun-tabs-content">
      <component class="sun-tabs-content-item"
                 :is="current" :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">


import {
  ref,
  computed,
  onMounted,
  onUpdated,
} from 'vue';
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  components: {Tab},
  props: {
    selectedValue: {
      type: String
    }
  },


  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    const X = () => {
      const divs = navItems.value;
      const result = divs.find(div => div.classList.contains('selected'));
      const {width} = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {
        left: left1
      } = container.value.getBoundingClientRect();

      const {
        left: left2
      } = result.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    };

    onMounted(X);  //重要的第一次执行
    onUpdated(X);  //后面更新时刻执行

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    let titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    const  current = computed( ()=>{
      return  defaults.find( tag=> tag.props.title === props.selectedValue )
    } )
    console.log(current)

    return {
      defaults,
      titles,
      select,
      navItems,
      indicator,
      container,
      current
    };
  }
};


</script>

<style lang="scss">

.sun-tabs {
  &-nav {
    display: flex;
    border-bottom: 1px solid #d9d9d9;
    color: #333333;
    position: relative;

    &-indicator {
      position: absolute;
      height: 3px;
      background: #40a9ff;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: #40a9ff;
      }
    }

  }

  // sun-tabs-content-item
  &-content {
    padding: 8px 0;
  }
}


</style>