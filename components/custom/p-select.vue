<template>
  <div class="p-select">
    <p-input
      class="p-select__view"
      @clicked="show"
      disabled
     
      label="Select"
    >
      <template v-slot:suffix>
        <p-icon color="#A5B4CB" icon="mdi-menu-down" />
      </template>
    </p-input>

    <div v-on-clickaway="testx"
      class="p-select__overlay"
      :class="{
        'p-select__overlay--show': this.showContents,
        'p-select__overlay--hide': !this.showContents,
      }"
    ></div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  mixins:[clickaway],
  props: { value: {} },
  data() {
    return {
      content: this.value,
      showContents: false,
    };
  },
  methods: {
    picked() {
      console.log("cliked");
    },
    hide(){
        if(this.showContents){ this.showContents = false}
    },
    show(){
       if(!this.showContents){this.showContents = true}
    }
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
.p-select {
  display: inline-block;
  position: relative;
  z-index: 50;

  &__overlay {
    width: 100%;
    background-color: #fff;
    position: absolute;
    z-index: 55px;
    min-height: 50px;
    border-radius: 5px;
    box-shadow: 1px 0px 5px grey;
    bottom: 0px;
    transition: 0.2s all;

    &--show {
      display: block;
    }

    &--hide {
      display: none;
    }
  }
}
</style>