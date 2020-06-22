<template>
  <div id="home" class="home">
    <div class="prvniObrazek">
        <img class="celniObr" src="/LW800KN.jpg" alt="obrazekLW800KN" /> 
        <router-link class="linkKonfigurator"  to="/konfigurator2/bagr"><v-btn class="ma-2" outlined color="#3498db">Konfiguruj</v-btn></router-link> 
    </div>
    <div class="druhyObrazek">
      <img class="rypadloObr" src="/LP500JK.jpg" alt="obrazekLP500JK" />
       <router-link class="linkKonfigurator" to="/konfigurator2/rypadlo"><v-btn class="ma-2" outlined color="#3498db">Konfiguruj</v-btn></router-link>
    </div>

    
   

    
  </div>
</template>

<script>
export default {};
</script>


<style scoped>

.home{
  display: flex;
}

/*.prvniObrazek{
  background-image: url("/LW800KN.jpg")
}*/

.celniObr {
  max-width: 50%;
  height: auto;
}

.rypadloObr {
  max-width: 50%;
  height: auto;
}

/* header{
    background-image: url(hlavicka.jpg);
    background-size: cover;
    padding: 200px 30px;
} */




.ikonky {
 list-style: none;
}

.linkKonfigurator{
 text-decoration:none
}


</style>
