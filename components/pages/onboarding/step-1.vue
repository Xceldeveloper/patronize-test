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
        @click="clicked('BVN')"
        class="verification-method__tab-button"
        :class="{
          'verification-method__tab-button--active':
            verification_method == 'BVN',
        }"
      >
        BVN
      </p-button>

      <p-button
        @click="clicked('ACCOUNT')"
        class="verification-method__tab-button"
        :class="{
          'verification-method__tab-button--active':
            verification_method == 'ACCOUNT',
        }"
      >
        Personal Account Number
      </p-button>
    </div>

    <div class="bvn-verification-block" v-if="verification_method == 'BVN'">
        <p-input class="bvn-verification-block__bvn" label="Bank Verification Number (11-digits)" /> 

    </div>


   <div class="bank-verication-block" v-if="verification_method == 'ACCOUNT'">
        <p-input class="bank-verication-block__account-number" label="Account Number" /> 

         <p-input class="bank-verication-block__account-name" disabled label="Select Bank">
             <template v-slot:suffix>
                 <p-icon icon="mdi-menu-down" style="cursor:pointer" color="#A5B4CB" />
             </template>
         </p-input>
       
        
   </div>



   <p-button @click="$emit('continue')" style="float:right;margin-top:20px">Continue</p-button>
  </div>
</template>

<script>
import pText from "~/components/custom/p-text.vue";
export default {
  components: { pText },
  data() {
    return {
      verification_method: "BVN",
      bvn: "",
      account_number: "",
    };
  },
  methods: {
    clicked(val) {
      console.log(val);
      this.verification_method = val;
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
  margin-top: 35px;
  color: #a5b4cb;
  font-size: 13px;
}

.step-title {
  font-weight: 700;
  font-size: 26px;
  width: 100%;
  display: block;
  margin-top: 20px;

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

    &--active {
      border: 1.8px solid $Blue;
      background-color: #dceaff;
    }
  }
}


  .bvn-verification-block {
       padding: 30px 0px;
     border-bottom: 1px solid #E9EEF4;

    &__bvn {
        width: 100%;
    }
  }


 .bank-verication-block {
     padding: 30px 0px;
     border-bottom: 1px solid #E9EEF4;
  
     align-items: center;
     display: flex;
     gap:60px;
    &__account-number {
     flex: 1;
    }

      &__account-name {
          flex: 1;
      }
  }

</style>