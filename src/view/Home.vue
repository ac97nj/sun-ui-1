<template>
  <div>
    <Topnav></Topnav>
    <div class="banner">
      <h1>小太阳 UI</h1>
      <h2>一个初步的 UI</h2>
      <p class="actions">
        <a href="https://github.com/FrankFang/GEIUHH6wQRwj/commit/">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-TS"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-Lamp"></use>
    </svg>


  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';



export default {
  components: {Topnav}
};


</script>

<style lang="scss" scoped>


.features {

  > svg {
    width: 64px;
    height: 64px;
  }

}


.banner {
  color: #1e40c8;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(90deg, rgba(238, 243, 250, 1) 0%, rgba(229, 236, 248, 1) 36%, rgba(128, 174, 244, 1) 100%);


  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #1e40c8;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 25px;

      &:hover {
        text-decoration: none;
      }
    }

  }
}

</style>