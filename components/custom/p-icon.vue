<template>
  <span class="mdi " :style="`font-size:${size};color:${color}`" :class="icon"></span>
</template>

<script>
export default {
  props:{
      icon:{default:""},
      size:{default:"25px"},
      color:{default:"#000"}
  }
}
</script>

<style>

</style>