<template>
  <div class="step-3-wrapper">
    <div>
      <p-text class="step-info" block>Step 3/3</p-text>
    </div>

    <p-text class="step-title" block>Business Category</p-text>

    <!--  -->
    <business-type v-model="business" />

    <div class="pos-verification">
      <p-text class="pos-verification__title">
        Do you use POS machines for your business?
      </p-text>
      <p-button
        @click="usesPos = true"
        class="pos-verification__tab-button"
        :class="{
          'pos-verification__tab-button--active': usesPos === true,
        }"
      >
        YES
      </p-button>

      <p-button
        @click="usesPos = false"
        class="pos-verification__tab-button"
        :class="{
          'pos-verification__tab-button--active': usesPos === false,
        }"
      >
        NO
      </p-button>
    </div>

    <div style="text-align: right">
      <p-button :disabled="cantMove" @click="COMPLETE" style="margin: 20px 0px"
        >Complete</p-button
      >
    </div>
  </div>
</template>

<script>
import BusinessType from "~/components/views/onbaording/business-type.vue";
export default {
  components: { BusinessType },
  data() {
    return {
      usesPos: null,
      business: null,
      extract: null,
    };
  },
  methods: {
    COMPLETE() {
      this.extract = { busines: this.business, pos: this.usesPos };
      this.$emit("continue", this.extract);
    },
  },
  computed: {
    cantMove() {
    if(this.business == null){return true} // null safety and disable
      return (
        this.business.type == "" ||
        this.business.category == "" ||
        this.usesPos == null
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.step-3-wrapper {
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

.pos-verification {
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9eef4;

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
</style>