<template>
  <div class="topnavBanner">
    <Topnav></Topnav>
    <div class="banner">
      <h1>Totoro-UI</h1>
      <h2>基于 Vue 3开发的极简UI框架</h2>
      <p class="actions">
        <a href="https://github.com/FrankFang/GEIUHH6wQRwj/commit/">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-TS"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-Lamp"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';


export default {
  components: {Topnav}
};


</script>

<style lang="scss" scoped>

.topnavBanner {
  background: linear-gradient(90deg, rgba(238, 243, 250, 1) 0%, rgba(229, 236, 248, 1) 36%, rgba(128, 174, 244, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

}


.features {

  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }

  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }


  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }

}


.banner {
  color: #1e40c8;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


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