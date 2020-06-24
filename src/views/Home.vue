<template>
  <div class="home">

    <router-link class="box" style="background-image:url(/LW800KN.jpg)" to="/konfigurator/bagr">
      <v-btn class="boxTlacitko" x-large color="success" dark>Konfiguruj</v-btn>
     
    </router-link> 


    <router-link class="box" style="background-image:url(/LP500JK.jpg)" to="/konfigurator/rypadlo">
       <v-btn class="boxTlacitko" x-large color="success" dark> Konfiguruj</v-btn>
    </router-link>

       
  </div>
    
</template>

<script>
export default {};
</script>


<style scoped>

.home{
  display: flex;
  padding: 0 100px;
  flex-wrap: wrap;
}

.obrazekStroje {
  max-width: 100%;
  height: auto;
}

.box {
  position: relative;
  padding: 50px 0;
  flex: 1 0 400px;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: contain;
}

.ikonky {
 list-style: none;
}

.linkKonfigurator{
 text-decoration:none;
 }

.v-btn:not(.v-btn--round).v-size--x-large {
  padding: 20px 50px;
}

.boxTlacitko {
  position: absolute;
  top: 20%;
  right: 10%;
}

 
</style>
