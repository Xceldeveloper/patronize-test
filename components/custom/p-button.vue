<template>
  <button
    :style="styleVariables"
    style="`${style}`"
    class="p-button p-button__element"
    @click="clicked"
    :class="[propsClasses, eventClasses]"
  >
    <div v-if="loading">Loading...</div>
    <slot v-else> </slot>
  </button>
</template>

<script>
export default {
  name: "p-button",
  props: {
    class: { default: "" },
    style: { default: "" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    borderRadius: { default: 8 },
    padding: { default: "0px 30px" },
    margin: { default: "0px " },
    fontSize: { default: "14px" },
    fontWeight: { default: "600" },
    fontFamily: { default: "DM Sans, sans-serif" },
    border: { default: "" },
    backgroundColor: { default: "#006AFF" },
    to: { default: null },
  },
  data() {
    return {};
  },
  methods: {
    clicked() {
      if (this.disabled) {
        return;
      }
      if (this.to != null) {
        location.assign(this.to);
      }

      this.$emit("click");
    },
  },

  computed: {
    propsClasses() {
      return this.class;
    },
    eventClasses() {
      this.variables = [];
      return {
        "p-button--disabled": this.disabled,
      };
    },

    styleVariables() {
      return {
        "--border-radius":
          typeof this.borderRadius === "number"
            ? this.borderRadius + "px"
            : this.borderRadius,
        "--padding":
          typeof this.padding === "number" ? this.padding + "px" : this.padding,
        "--margin":
          typeof this.margin === "number" ? this.margin + "px" : this.margin,
        "--font-size":
          typeof this.fontSize === "number"
            ? this.fontSize + "px"
            : this.fontSize,
        "--border": this.border,
        "--background-color": this.backgroundColor,
        "--font-family": this.fontFamily,
        "--font-weight": this.fontWeight + "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.p-button {
  $self: &;
  font-size: var(--font-size);
  padding: var(--padding);
  margin: var(--font-weight);
  outline-style: none;
  cursor: pointer;
  transition: 0.2s all;
  border-radius: var(--border-radius);
  outline-style: none;
  border: var(--border);
  background-color: var(--background-color);
  font-weight: var(--font-weight);
  font-family: var(--font-family);
  height: 50px;
  color: #fff;
  letter-spacing: 1px;

  &__element {
    &:active {
      transform: scale(0.98);
    }
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:active {
      //prevents animation
      transform: scale(1);
    }
  }
}
</style>