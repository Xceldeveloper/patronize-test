<template>
  <div class="wrapper">
    <div class="side-bar">
      <div><img
        src="/images/onboarding/image1.png"
        class="side-bar__image-background"
        alt=""
      /></div>
    </div>
    <div class="container">
      <div class="header">
        <p-button class="logout-btn" background-color="#ff6774"
          >Logout</p-button
        >
      </div>

         <div>
            <tab-header v-model="index"   />
         </div>

        <step-1/>
      </div>
  </div>
</template>

<script>
import Step1 from '~/components/pages/onboarding/step-1.vue';
import TabHeader from "~/components/views/tab-header.vue";

export default {
  components: { TabHeader, Step1 },

  data() {
    return {
      index:0
    };
  },
  methods: {},
};
</script>

<style lang="scss" >
body {
  margin: 0;
  padding: 0;
}
.wrapper {
  width: 100vww;
  height: 100vh;
  display: flex;
  background-color: #fff;
  overflow: auto;
}

.side-bar {
  width: 28vw;
  height: 100vh;
  background-color: #f3e8c9;
  position: relative;

  &__image-background {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    bottom: 12vh;
  }
}

.container {
  flex: 1;
  height: 100%;
  overflow: auto;
  padding: 0px 50px;
}

.header{
padding: 15px 0px;
  clear: both;
  overflow: auto;
}

.logout-btn {
       background-color: #ff6774;
       float: right;
    }
  






</style>