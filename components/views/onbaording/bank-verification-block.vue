<template>
  <div class="bank-verication-block">
    <p-input
      class="bank-verication-block__account-number"
      label="Account Number"
      v-model="bank.number"
    />

    <p-input
      class="bank-verication-block__account-name"
      v-model="bank.name"
      label="Select Bank"
    >
      <template v-slot:suffix>
        <p-icon icon="mdi-menu-down" style="cursor: pointer" color="#A5B4CB" />
      </template>
    </p-input>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      bank: {
        number: "",
        name: "",
      },
    };
  },
  watch: {
    bank: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.bank-verication-block {
  padding: 30px 0px;
  border-bottom: 1px solid #e9eef4;
  align-items: center;
  display: flex;
  gap: 60px;
  &__account-number {
    flex: 1;
  }

  &__account-name {
    flex: 1;
  }
}

//smal devices
@media screen and (max-width: 767px) {
  .bank-verication-block {
    padding: 30px 0px;
    border-bottom: 1px solid #e9eef4;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__account-number {
      flex: 1;
      width: 100%;
    }

    &__account-name {
      flex: 1;
      width: 100%;
    }
  }
}
</style>