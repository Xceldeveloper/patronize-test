<template>
  <div class="step-1-wrapper">
    <div>
      <p-text class="step-info" block>Step 1/3</p-text>
    </div>

    <div><p-text class="step-title" block>Verify Account</p-text></div>

    <div class="verification-method">
      <p-text class="verification-method__title"
        >Select a verification method
      </p-text>
      <p-button
        @click="selectMethod('BVN')"
        class="verification-method__tab-button"
        :class="{
          'verification-method__tab-button--active':
            verification_method == 'BVN',
        }"
      >
        BVN
      </p-button>

      <p-button
        @click="selectMethod('ACCOUNT')"
        class="verification-method__tab-button"
        :class="{
          'verification-method__tab-button--active':
            verification_method == 'ACCOUNT',
        }"
      >
        Personal Account Number
      </p-button>
    </div>

    <transition name="component-fade" mode="out-in">
      <bvn-verification-block
        v-model="bvn"
        v-if="verification_method == 'BVN'"
      />
      <bank-verification-block
        v-model="bankAccount"
        v-if="verification_method == 'ACCOUNT'"
      />
    </transition>

    <div style="text-align: right">
      <p-button :disabled="cantMove" @click="CONTINUE" style="margin: 20px 0px"
        >Continue</p-button
      >
    </div>
  </div>
</template>

<script>
import pText from "~/components/custom/p-text.vue";
import BankVerificationBlock from "../../views/onbaording/bank-verification-block.vue";
import BvnVerificationBlock from "../../views/onbaording/bvn-verification-block.vue";
export default {
  components: { pText, BvnVerificationBlock, BankVerificationBlock },
  data() {
    return {
      verification_method: "BVN",
      bvn: "",
      bankAccount: null,
      extract: null,
    };
  },
  methods: {
    selectMethod(val) {
      this.verification_method = val;
    },

    CONTINUE() {
      this.$emit("account-verified", this.extract);
    },
  },
  computed: {
    cantMove() {
      if (this.verification_method == "BVN") {
        this.extract = this.bvn; //prepare data to send out
        return this.bvn.length != 11;
      } else {
        this.extract = this.bankAccount; // up
        if (this.bankAccount == null) {
          return true;
        } // null safety
        return (
          this.bankAccount.details == null ||
          this.bankAccount.number.length != 10
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.step-1-wrapper {
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

.verification-method {
  margin-top: 30px;

  &__title {
    color: #141737;
    font-size: 13px;
    display: block;
    margin-bottom: 6px;
  }

  &__tab-button {
    background-color: #f5f6fa;
    color: #000;
    height: 41px;
    padding: 0px 20px;
    border: 1.8px solid #1417371a;
    border-radius: 10px;
    margin-right: 20px;
    margin-top: 20px;

    &--active {
      border: 1.8px solid $Blue;
      background-color: #dceaff;
    }
  }
}
</style>