<template>
  <template v-if="visible">
        <teleport to="body" >
          <div class="sun-dialog-overlay" @click="onClickOverlay"></div>
          <div class="sun-dialog-wrapper">
            <div class="sun-dialog">

              <header>
                <slot name="title"></slot>
                <span class="sun-dialog-close" @click="close"><IconOne icon="del"/></span>
              </header>


              <main>
                <slot name="content"></slot>
              </main>


              <footer>
                <GButton @click="OK">OK</GButton>
                <GButton @click="Cancel">Cancel</GButton>
              </footer>
            </div>
          </div>
        </teleport>
  </template>
</template>

<script lang="ts">
import GButton from './GButton.vue';
import IconOne from './IconOne.vue';

export default {
  name: 'GDialog',
  components: {IconOne, GButton},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    fnOK: {
      type: Function
    },
    fnCancel: {
      type: Function
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const OK = () => {
      if (props.fnOK && props.fnOK() !== false) {
        close();
      }
    };
    const Cancel = () => {
      close();
    };
    return {close, onClickOverlay, OK, Cancel};
  }
};


</script>

<style lang="scss">
.sun-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: fade-out(black, 0.5);
  z-index: 10;
}

.sun-dialog-wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: (-50%, -50%);
  z-index: 11;

}

.sun-dialog {
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid #d9d9d9;
    padding: 12px 16px;
    text-align: right;
  }

}

.sun-dialog-close {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > .icon {
    font-size: 20px;
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    color: red;
  }

}


</style>