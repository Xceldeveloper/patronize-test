<template>
  <div class="step-2-wrapper">
    <div>
      <p-text class="step-info" block>Step 2/3</p-text>
    </div>

    <p-text class="step-title" block>Social Handles</p-text>
    <p-text class="request" block
      >Enter your business social media handles</p-text
    >

    <social-handles v-model="handles" />

    <div style="text-align: right">
      <p-button
        :disabled="cantMove"
        @click="CONFIRM_HANDLES"
        style="margin: 20px 0px"
        >Confirm Social Handles</p-button
      >
    </div>
  </div>
</template>

<script>
import socialHandles from "~/components/views/onbaording/social-handles.vue";
export default {
  components: { socialHandles },
  data() {
    return {
      handles:null,
    };
  },
  methods: {
    CONFIRM_HANDLES() {
      this.$emit("continue", this.handles);
    },
  },
  computed: {
    cantMove() {
      if(this.handles == null){return true}// null safety
      return this.handles.abeg == "";
    },
  },
};
</script>

<style lang="scss" scoped>
.step-2-wrapper {
  width: 100%;
}

.step-info {
  display: block;
  margin: 40px 0px;
  color: #a5b4cb;
  font-size: 13px;
}

.step-title {
  font-weight: 700;
  font-size: 26px;
  width: 100%;
  display: block;

  color: #141737;
}

.request {
  display: block;
  margin-top: 5px;
  color: #a5b4cb;
  font-size: 14px;
}
</style>