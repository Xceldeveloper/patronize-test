<template>
  <div class="step-1-wrapper">
    <div>
      <p-text class="step-info" block>Step 2/3</p-text>
    </div>

    <p-text class="step-title" block>Social Handles</p-text>
    <p-text class="request" block
      >Enter your business social media handles</p-text
    >

    <div class="socia-handles">
      <p-input
        v-model="handles.abeg"
        class="social-handles__input"
        label="Choose your Abeg Tag (required)"
      >
        <template v-slot:prefix>
          <p-text margin="5px" color="#7D8DA7"> @ </p-text>
        </template>
      </p-input>

      <!-- please ignore -->
      <div></div>

      <p-input
        v-model="handles.instagram"
        class="social-handles__input"
        label="Instagram"
      >
        <template v-slot:prefix>
          <p-text margin="5px" color="#7D8DA7"> @ </p-text>
        </template>
      </p-input>

      <p-input
        v-model="handles.twitter"
        class="social-handles__input"
        label="Twitter"
      >
        <template v-slot:prefix>
          <p-text margin="5px" color="#7D8DA7"> @ </p-text>
        </template>
      </p-input>
    </div>

    <p-button
      :disabled="cantMove"
      @click="CONFIRM_HANDLES"
      style="float: right; margin: 20px 0px"
      >Confirm Social Handles</p-button
    >
  </div>
</template>

<script>
import BankVerificationBlock from "../../views/onbaording/bank-verification-block.vue";
import BvnVerificationBlock from "../../views/onbaording/bvn-verification-block.vue";
export default {
  components: { BvnVerificationBlock, BankVerificationBlock },
  data() {
    return {
      handles: {
        abeg: "",
        instagram: "",
        twitter: "",
      },
    };
  },
  methods: {
    CONFIRM_HANDLES() {
      this.$emit("continue", this.handles);
    },
  },
  computed: {
    cantMove() {
      return this.handles.abeg == "";
    },
  },
};
</script>

<style lang="scss" scoped>
.step-1-wrapper {
  width: 100%;
  height: 100%;
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

.socia-handles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  margin-top: 40px;
  padding-bottom: 50px;
  border-bottom: 1px solid #e9eef4;

  &__input {
    width: 100%;
  }
}
</style>