<template>
  <div class="categories-block">
    <p-input
      class="categories-block__input"
      label="Type of your business"
      v-model="business.type"
    >
      <template v-slot:suffix>
        <p-icon icon="mdi-menu-down" style="cursor: pointer" color="#A5B4CB" />
      </template>
    </p-input>

    <p-input
      class="categories-block__input"
      label="Business Category"
      v-model="business.category"
    >
      <template v-slot:suffix>
        <p-icon icon="mdi-menu-down" style="cursor: pointer" color="#A5B4CB" />
      </template>
    </p-input>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      business: {
        type: "",
        category: "",
      },
    };
  },
  watch: {
    business: {
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
.categories-block {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  margin-top: 40px;

  &__input {
    width: 100%;
  }
}

//smal devices
@media screen and (max-width: 767px) {
  .categories-block {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 30px;
    margin-top: 40px;

    &__input {
      width: 100%;
    }
  }
}
</style>