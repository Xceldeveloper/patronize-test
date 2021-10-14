<template>
  <div  @click="$emit('clicked')"
    style="display: inline-block; width: 300px; height: 80px"
    :style="styleVariables"
  >
    <p-text
      style="font-weight: 500"
      :text="label"
      :color="textColor"
      block
      font-size="14px"
      margin="5px 0px"
      :font-family="fontFamily"
    />
    <div class="p-input" :class="[propsClasses, eventClasses]">
      <button class="p-input__prefix"><slot name="prefix"></slot></button>
      <input
        :disabled="disabled"
        v-model="content"
       
        :type="type"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :placeholder="placeholder"
        class="p-input__box p-input__box--focus"
      />
      <button class="p-input__suffix"><slot name="suffix"></slot></button>
      <div class="p-input__details"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "p-input",
  props: {
    value: {},
    label: { default: "" },
    placeholder: { default: "" },
    type: { default: "text" },
    textColor: { default: "#000" },
    disabled: { type: Boolean, default: false },
    borderRadius: { default: 12 },
    margin: { default: "0px " },
    fontSize: { default: "14px" },
    fontWeight: { default: "600" },
    fontFamily: { default: "DM Sans, sans-serif" },
    border: { default: "1px solid #e4e9ef" },
    backgroundColor: { default: "transparent" },
    height: { default: 50 },
    width: { default: 300 },
    color: { default: "#000" },
  },
  data() {
    return {
      content: this.value,
      isFocused: false,
    };
  },
  computed: {
    propsClasses() {
      return this.class;
    },
    eventClasses() {
      this.variables = [];
      return {
        "p-input--focus": this.isFocused,
        // "p-input--hover": !this.isFocused,
      };
    },

    styleVariables() {
      return {
        "--text-color": this.textColor,
        "--color": this.color,
        "--border-radius":
          typeof this.borderRadius === "number"
            ? this.borderRadius + "px"
            : this.borderRadius,
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
        "--height":
          typeof this.height === "number" ? this.height + "px" : this.height,
        "--width":
          typeof this.width === "number" ? this.width + "px" : this.width,
      };
    },
  },
  watch: {
    content: {
      handler(val) {
        this.$emit("input", val);
      },
    },
    value: {
      immediate: true,
      handler(val) {
        this.content = val;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.p-input {
  $self: &;
  min-height: calc(var(--height) - 7px);
  min-width: var(--width);
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  border: var(--border);
  display: flex;
  padding: 3.5px 7px;
  box-sizing: border-box;
  margin: var(--marging);
  cursor: pointer;

  // &--hover {
  //   &:hover {
  //     border: 1.7px solid var(--text-color);
  //   }
  // }

  &--focus {
    border: 1.7px solid var(--color);
  }

  &__prefix {
    height: inherit;
    width: auto;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
  }

  &__suffix {
    height: inherit;
    padding: 0px;
    margin: 0px;
    width: auto;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
  }

  &__box {
    $self2: $self;
    height: inherit;
    min-height: inherit;
    outline-style: none;
    border: none;
    flex: 1;
    font-size: var(--font-size);
    font-family: var(--font-family);
    color: var(--text-color);
    background-color: transparent;
  }
}
</style>