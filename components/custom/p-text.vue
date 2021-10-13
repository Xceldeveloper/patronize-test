<template>
  <span
    :style="styleVariables"
    style="`${style}`"
    class="p-text p-text__element"
    @click="clicked"
    :class="[propsClasses, eventClasses]"
  >
    <slot> {{ text }} </slot>
  </span>
</template>

<script>
export default {
  props: {
    text: { default: "" },
     class: { default: "" },
     style: { default: "" },
     color:{default:'#000'},
     fontSize:{default:'16px'},
     block:{type:Boolean,default:false}

  },
  name: "p-text",

   computed:{
         propsClasses() {
    return this.class;
  },
  eventClasses() {
    this.variables = [];
    return {
        'p-text__element--block':this.block
    };
  },

   styleVariables() {
    return{
        '--text-color':this.color,
        '--font-size': typeof this.fontSize === 'number' ? this.size+'px' : this.fontSize
    }
   }
   }
};
</script>

<style lang="scss" scoped>
.p-text{
    color: var(--text-color);
    font-size: var(--font-size);

    &__element{
        
        &--block{
        display: block;
    }
    }
}
</style>