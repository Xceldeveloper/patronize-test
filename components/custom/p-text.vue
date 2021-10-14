<template>
  <span
    :style="styleVariables"
    style="`${style}`"
    class="p-text p-text__element"
    :class="[propsClasses, eventClasses]"
  >
    <slot> {{ text }} </slot>
  </span>
</template>

<script>
export default {
  name: "p-text",
  props: {
    text: { default: "" },
    class: { default: "" },
    style: { default: "" },
    color: { default: "#000" },
    fontSize: { default: "16px" },
    margin: { default: "0px" },
    padding: { default: "0px" },
    block: { type: Boolean, default: false },
    fontFamily: { default: "DM Sans, sans-serif" },
  },
  name: "p-text",

  computed: {
    propsClasses() {
      return this.class;
    },
    eventClasses() {
      this.variables = [];
      return {
        "p-text__element--block": this.block,
      };
    },

    styleVariables() {
      return {
        "--text-color": this.color,
        "--font-size":
          typeof this.fontSize === "number"
            ? this.fontSize + "px"
            : this.fontSize,
        "--font-family": this.fontFamily,
        "--padding":
          typeof this.padding === "number" ? this.padding + "px" : this.padding,
        "--margin":
          typeof this.margin === "number" ? this.margin + "px" : this.margin,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.p-text {
  color: var(--text-color);
  font-size: var(--font-size);
  font-family: var(--font-family);
  padding: var(--padding);
  margin: var(--margin);

  &__element {
    &--block {
      display: block;
    }
  }
}
</style>