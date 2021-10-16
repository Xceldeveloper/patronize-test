<template>
  <div class="social-handles">
    <p-input
      v-model="handles.abeg"
      class="social-handles__input"
      label="Choose your Abeg Tag (required)"
    >
      <template v-slot:prefix>
        <p-text margin="5px" color="#7D8DA7"> @ </p-text>
      </template>
    </p-input>

    <!-- please ignore -->
    <div class="social-handles__redundant"></div>

    <p-input
      v-model="handles.instagram"
      class="social-handles__input"
      label="Instagram"
    >
      <template v-slot:prefix>
        <p-text margin="5px" color="#7D8DA7"> @ </p-text>
      </template>
    </p-input>

    <p-input
      v-model="handles.twitter"
      class="social-handles__input"
      label="Twitter"
    >
      <template v-slot:prefix>
        <p-text margin="5px" color="#7D8DA7"> @ </p-text>
      </template>
    </p-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      handles: {
        abeg: "",
        instagram: "",
        twitter: "",
      },
    };
  },
  watch: {
    handles: {
      deep: true,
      immediate: true,
      handler(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.social-handles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  margin-top: 40px;
  padding-bottom: 50px;
  border-bottom: 1px solid #e9eef4;

  &__input {
    width: 100%;
  }
}

//smal devices
@media screen and (max-width: 767px) {
  .social-handles {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 30px;
    margin-top: 40px;
    padding-bottom: 50px;
    border-bottom: 1px solid #e9eef4;

    &__input {
      width: 100%;
    }

    &__redundant {
      display: none;
    }
  }
}
</style>