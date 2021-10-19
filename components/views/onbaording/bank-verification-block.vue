<template>
  <div class="bank-verication-block">
    <p-input
      class="bank-verication-block__account-number"
      label="Account Number"
      v-model="bank.number"
    />

    <p-select
      :items="banks"
      select-key="name"
      v-model="bank.details"
      class="bank-verication-block__account-name"
      label="Select Bank"
    />
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      bank: {
        number: "",
        details: null,
      },
      banks: [
        {
          id: 1,
          name: "Diamond Bank",
        },
        {
          id: 2,
          name: "First Bank",
        },
        {
          id: 3,
          name: "Kuda Bank",
        },
        {
          id: "4",
          name: "GT Bank",
        },
        {
          id: 4,
          name: "Zenith Bank",
        },
      ],
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