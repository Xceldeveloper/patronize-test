<template>
  <div class="categories-block">
    <p-select
      :items="businessTypes"
      v-model="business.type"
      class="categories-block__input"
      label="Type of your business"
    />

    <p-select
      :items="businessCategory"
      v-model="business.category"
      class="categories-block__input"
      label="Business Category"
    />
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

      businessTypes: [
        "Sole proprietorship",
        "Partnership",
        "Limited liability company (LLC)",
        "NGO",
        "Other",
      ],
      businessCategory: ["FintTech", "Ecommerce", "Logistics", "Other"],
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