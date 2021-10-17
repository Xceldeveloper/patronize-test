<template>
  <span class="p-icon mdi" :class="[propClasses,icon]" :style="styleProps" ></span>
</template>

<script>
export default {
  props:{
      icon:{default:""},
      size:{default:"25px"},
      color:{default:"#000"},
      class:{default:""}
  },
  computed:{
    propClasses(){
      return this.class
    },

    styleProps(){
      return{
        '--color':this.color,
        '--font-size':this.size
      }
    }
  }
}
</script>

<style scoped lang="scss">
.p-icon{
  color:var(--color);
  font-size: var(--font-size);
}
</style>