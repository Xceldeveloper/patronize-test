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
      <div>
        <div class="header">
          <p-button class="logout-btn" background-color="#ff6774"
            >Logout</p-button
          >
        </div>
        <div class="steps-header">
          <tab-header v-model="tabIndex" :completed="completed" />
        </div>
      </div>

      <div class="components-wrapper">
        <step-1 v-if="tabIndex == 0" @continue="completedVerification" />
        <step-2 v-else-if="tabIndex == 1" @continue="confirmedSocialHandles" />
        <step-3 v-else-if="tabIndex == 2" @continue="completedOnboarding" />
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from "~/components/pages/onboarding/step-1.vue";
import Step2 from "~/components/pages/onboarding/step-2.vue";
import Step3 from "~/components/pages/onboarding/step-3.vue";
import TabHeader from "~/components/views/tab-header.vue";

export default {
  components: { TabHeader, Step1, Step2, Step3 },

  data() {
    return {
      tabIndex: 0,
      completed: null,
    };
  },
  methods: {
    completedVerification(details) {
      this.completed = this.tabIndex;
      this.tabIndex++;
    },
    confirmedSocialHandles(handles) {
      this.completed = this.tabIndex;
      this.tabIndex++;
    },
    completedOnboarding() {
      this.completed = this.tabIndex;
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
  display: flex;
  flex-direction: column;
}

.header {
  padding: 30px;
  clear: both;
  overflow: auto;
}

.logout-btn {
  float: right;
}

.steps-header {
  padding: 0px 50px;
}

.components-wrapper {
  padding: 0px 50px;
  flex: 1;
  overflow: auto;
}

/* to show  on big screens only */
@media screen and (min-width: 767px) {
  * {
    scrollbar-width: thin;
    scrollbar-color: transparent;
  }

  *::-webkit-scrollbar {
    width: 7px;
  }
  *::-webkit-scrollbar-track {
    background: #ededed;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #f3e8c9;
    border-radius: 10px;
    border: transparent;
  }
}

//smal devices
@media screen and (max-width: 767px) {
  .side-bar {
    display: none;
  }

  .header {
    height: 50px;
    padding: 0px;
  }

  .logout-btn {
    display: none;
  }

  .steps-header {
    padding: 0px 20px;
  }

  .components-wrapper {
    padding: 0px 20px;
    overflow: auto;
  }
}

// ipads/tablets
@media screen and (min-width: 767px) and (orientation: portrait) {
  .side-bar {
    display: none;
  }
}
</style>