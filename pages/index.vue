<template>
  <div class="font-dm-sans">
    Coming soon...
    <p-button> Logout </p-button>

    <p-input
      v-model="account_number"
      label="Bank Verification Number (11-digits)"
    />
    <p-input v-model="bvn" label="BVN" />
    <div></div>
    <p-input v-model="bvn" label="Instagram">
      <template v-slot:prefix>
        <p-text margin="5px" color="#7D8DA7"> @ </p-text>
      </template>
    </p-input>

    <br />
    <br />
    {{ bvn }}---------{{ account_number }}
    <br />
    <br />

    <div class="verification-method">
      <!-- <p-text >Select a verification method </p-text> -->
      <p-button
        @click="clicked('BVN')"
        class="verification-method__tab-button"
        :class="{ 'verification-method__tab-button--active': method == 'BVN' }"
      >
        BVN
      </p-button>

      <p-button
        @click="clicked('ACCOUNT')"
        class="verification-method__tab-button"
        :class="{
          'verification-method__tab-button--active': method == 'ACCOUNT',
        }"
      >
        Personal Account Number
      </p-button>
    </div>

    <br />

    hh
    <div></div>
    <div></div> <br>
    <p-select/>
  </div>
</template>

<script>
import pInput from "~/components/custom/p-input.vue";
import PText from "~/components/custom/p-text.vue";
export default {
  components: { pInput, PText },
  data() {
    return {
      method: "BVN",
      bvn: "",
      account_number: "",
    };
  },
  methods: {
    clicked(val) {
      console.log(val);
      this.method = val;
    },
  },
};
</script>
<style lang="scss" scoped>
.verification-method {
  padding: 0px 50px;

  &__tab-button {
    background-color: #f5f6fa;
    color: #000;
    height: 41px;
    padding: 0px 20px;
    border: 1.8px solid #1417371a;
    border-radius: 10px;

    &--active {
      border: 1.8px solid $Blue;
      background-color: #dceaff;
    }
  }
}
</style>
