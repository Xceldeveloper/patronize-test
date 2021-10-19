<template>
  <div class="p-select" @click="show" v-on-clickaway="hide">
    <p-input
      class="p-select__view"
      style="width: 100%"
      v-model="selectedData"
      disabled
      :label="label"
    >
      <template v-slot:suffix>
        <p-icon color="#A5B4CB" icon="mdi-menu-down" />
      </template>
    </p-input>
    <div
      class="p-select__overlay"
      :class="{
        'p-select__overlay--show': this.showContents,
        'p-select__overlay--hide': !this.showContents,
      }"
    >
      <slot v-if="items.length > 0">

        <p-text  v-for="(item, index) in items"  :key="index"  @clicked="selectedItem(item)"
         class="p-select__overlay__items" style="padding:10px">
           {{ selectKey == null ? item : item[selectKey] }}
        </p-text>       
      </slot>
       <p-text v-else class="p-select__overlay__items" style="padding:10px">No Data Available</p-text>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  props: {
    value: {},
    label: { default: "" },
    items: { default: [] },
    selectKey: { default: null },
    valueKey: { default: null },
  },
  data() {
    return {
      content: this.value,
      showContents: false,
      activated: false,
      selectedData: "",
    };
  },
  methods: {
    selectedItem(item) {
      this.selectedData = this.selectKey == null ? item : item[this.selectKey];
      this.$emit("input", this.valueKey == null ? item : item[this.valueKey]);

      setTimeout(() => {
        this.hide();
      }, 100);
    },
    hide() {
      this.showContents = false;
    },
    show(val) {
      this.showContents = val;
    },
  },
  computed: {
    propsClasses() {
      return this.class;
    },
    eventClasses() {
      this.variables = [];
      return {
        "p-select__view--show": this.showContents,
        "p-select__view--hide": !this.showContents,
      };
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
      showContents(val) {
        if (val) {
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.p-select {
  position: relative;
  z-index: 50;
  display: inline-block;
  cursor: pointer;

  &__overlay {
    width: calc(100% - 2px);
    background-color: #fff;
    position: absolute;
    z-index: 55px;
    min-height: 50px;
    border: 1px solid #e4e9ef;
    border-radius: 12px;
    top: 0px;

    transition: 0.2s all;

    &__items {
      cursor: pointer;
      display: block;

      &:hover {
        background-color: #f8f7f7;
      }
    }

    &--show {
      display: block;
    }

    &--hide {
      display: none;
    }
  }
}
</style>