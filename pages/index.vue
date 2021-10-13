<template>
  <div class="font-dm-sans text">
    Coming soon...
    <p-button> Logout </p-button>

    <br />
    <br />

    <div class="verification-method">
      <!-- <p-text >Select a verification method </p-text> -->
      <p-button
        @click="cli('BVN')"
        class="verification-method__tab-button"
        :class="{ 'verification-method__tab-button--active': method == 'BVN' }"
      >
        BVN
      </p-button>

      <p-button
        @click="cli('ACCOUNT')"
        class="verification-method__tab-button"
        :class="{
          'verification-method__tab-button--active': method == 'ACCOUNT',
        }"
      >
        Personal Account Number
      </p-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      method: "BVN",
    };
  },
  methods:{
    cli(val){
      console.log(val)
      this.method = val
    }
  }
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
