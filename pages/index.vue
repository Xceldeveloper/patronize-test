<template>
  <div class="wrapper">
    <div class="side-bar">
      <div>
        <img
          src="/images/onboarding/image1.png"
          class="side-bar__image-background"
          alt=""
        />
      </div>
    </div>
    <div class="container">
      <div class="header">
        <p-button class="logout-btn" background-color="#ff6774"
          >Logout</p-button
        >
      </div>
      <div class="steps-header">
        <tab-header v-model="tabIndex" :completed="completed" />
      </div>

      <div class="components-wrapper">
        <step-1 v-if="tabIndex == 0" @continue="competedVerification" />
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from "~/components/pages/onboarding/step-1.vue";
import TabHeader from "~/components/views/tab-header.vue";

export default {
  components: { TabHeader, Step1 },

  data() {
    return {
      tabIndex: 0,
      completed: null,
    };
  },
  methods: {
    competedVerification() {
      this.completed = this.tabIndex;
      this.tabIndex++;
    },
  },
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
  height: 100vh;
}

.header {
  padding: 30px;
  clear: both;
  overflow: auto;
}

.logout-btn {
  background-color: #ff6774;
  float: right;
}

.steps-header {
  padding: 0px 50px;
}

.components-wrapper {
  padding: 0px 30px;
  height: 73.3vh;
  overflow: auto;
}
</style>