<template>
  <button
      class="sun-button"
      :class="classes"
      :disabled="disabled"
  >
    <span v-if="loading" class="sun-loading-icon"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'GButton',
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }

  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`sun-theme-${theme}`]: theme,
        [`sun-size-${size}`]: size,
        [`sun-level-${level}`]: level
      };
    });
    return {classes};
  }
};


</script>

<style lang="scss">
.sun-button {
  box-sizing: border-box;
  height: 32px;
  padding: 0 12px;
  cursor: pointer; //设置光标样式
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: #333;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 1px fade-out(black, 0.95); //淡化黑色
  transition: backgroun 250ms;

  > .sun-loading-icon {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #40a9ff #40a9ff #40a9ff transparent;
    border-style: solid;
    border-width: 2px;
    animation: sun-spin 1s infinite linear;
  }

  @keyframes sun-spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  &.sun-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: grey;

      &:hover {
        border-color: grey;
      }
    }
  }

  &.sun-theme-text, &.sun-theme-link {
    &[disabled] {
      cursor: not-allowed;
      color: grey;
    }

  }


  &.sun-theme-button {
    &.sun-level-main {
      background: #40a9ff;
      color: white;
      border-color: #40a9ff;

      &:hover,
      &:focus {
        background: darken(#40a9ff, 10%);
        border-color: darken(#40a9ff, 10%);
      }
    }

    &.sun-level-danger {
      background: red;
      border-color: red;
      color: white;

      &:hover,
      &:focus {
        background: darken(red, 10%);
        border-color: darken(red, 10%);
      }
    }
  }

  &.sun-theme-link {

    &.sun-level-danger {
      color: red;

      &:hover,
      &:focus {
        color: darken(red, 10%);
      }
    }
  }

  &.sun-theme-text {
    &.sun-level-main {
      color: #40a9ff;

      &:hover,
      &:focus {
        color: darken(#40a9ff, 10%);
      }
    }

    &.sun-level-danger {

      color: red;

      &:hover,
      &:focus {
        color: darken(red, 10%);
      }
    }
  }

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: #40a9ff;
    border-color: #40a9ff;
  }

  &:focus {
    outline: none
  }

  &::-moz-focus-inner { //去掉点击的出现线
    border: 0;
  }

  &.sun-theme-link {
    //border-color: transparent;
    box-shadow: none;
    color: #40a9ff;

    &:hover, &:focus {
      color: lighten(#40a9ff, 10%)
    }

  }

  &.sun-theme-text {
    //border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);
      border-color: transparent

    }
  }

}


</style>