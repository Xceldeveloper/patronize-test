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

    <p-button   class="box">Logout</p-button> 
    <br />

    hh
    <div></div>
    <div></div>
    <br />
    <p-select />

    <div class="top">
      <p-button class="top__logout-btn">Logout</p-button>
    </div>

    <div class="stepper">
      <div class="stepper__step stepper__step--completed">
        <p-button class="step__btn step__btn--completed"> 
            <p-icon class="step__btn step__btn--completed__marker" icon="mdi-check" /> </p-button>
        <p-text class="step__text step__text--completed">Verify Account</p-text>
      </div>

      <div class="stepper__step stepper__step--selected">
        <p-button class="step__btn step__btn--selected"> 2 </p-button>
        <p-text class="step__text step__text--selected">Social Handles</p-text>
      </div>

       <div class="stepper__step stepper__step">
        <p-button class="step__btn step__btn"> 3 </p-button>
        <p-text class="step__text step__text">Social Handles</p-text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.top {
  padding: 20px 50px;
  clear: both;
  overflow: auto;

  &__logout-btn {
    background-color: #ff6774;
    float: right;
    display: block;
  }
}

.stepper {
  display: flex;
  gap: 50px;
  padding-top: 70px;

  &__step {
    display: flex;
    cursor: not-allowed;
    align-items: center;
    gap: 10px;

    &--selected {
      cursor: pointer;
    }
    &--completed {
      cursor: pointer;
    }

    .step__btn {
      height: 31px;
      width: 31px;
      padding: 0px;
      border-radius: 3.1px;
      font-size: 13.64px;
      font-weight: normal;
      color: #a5b4cb;
      background-color: #e4e9ef;
      &--selected {
        background-color: #006aff;
        color: #fff;
      }
      &--completed {
        color: #a5b4cb;
        background-color: #e4e9ef;

        &__marker{
            visibility: visible;
            font-size: 16px;
            color: #006AFF;
        }
      }
    }
    .step__text {
      font-size: 18px;
      color: #a5b4cb;
      &--selected {
        color: #141737;
      }

      &--completed {
        color: #a5b4cb;
      }
    }
  }
}

.box{
  background-color: red;
  color: yellow;
}
</style>
