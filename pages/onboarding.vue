<template>
  <div class="wrapper">
      <div class="side-bar">
        <img src="/images/onboarding/image1.png" class="side-bar__image-background" alt="">
      </div>
      <div class="container">

    <div class=" top">
               <p-button   class="top__logout-btn">Logout</p-button> 
    </div>
         

      
      </div>
  </div>
</template>

<script>

export default {


}
</script>

<style lang="scss" >
body{
    margin: 0;
    padding: 0;
}
.wrapper{
    width: 100vww;
    height: 100vh;
    display: flex;
    background-color: #fff;
    overflow: auto;
}

.side-bar{
    width: 28vw;
    height: 100vh;
    background-color: #F3E8C9;
    position: relative;

    &__image-background{
      width:100%;
      height: auto;
      object-fit: cover;
      position: absolute;
      bottom: 12vh;
    }
}

.container{
    flex: 1;
    height: 100%;
    overflow: auto;
}

.top{
    padding: 20px 50px;
    clear: both;
    overflow: auto;
    
    &__logout-btn{
       background-color: #FF6774;
     float: right;
     display: block;
    
    }
}
</style>