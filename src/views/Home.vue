<template>
  <div>
    <img class="celniObr" src="/LW800KN.jpg" alt="obrazekLW800KN" />
    <img class="rypadloObr" src="/LP500JK.jpg" alt="obrazekLP500JK" />

    <router-link  to="/Konfigurator1"><v-btn class="ma-2" outlined color="#3498db">Konfiguruj</v-btn></router-link>
    <v-btn class="ma-2" outlined color="#3498db"><router-link  to="/Konfigurator2">Konfiguruj</router-link></v-btn>

    
  </div>
</template>

<script>
export default {};
</script>


<style>

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


.kont,
.servis {
  list-style: none;
  text-align: left;
  font-size: 15px;
  padding: 10px;
}

.kont {
  margin-right: 50px;
  margin-left: 50px;
  
}

.k,
.s {
  border: 1px solid grey;
  border-left: none;
  border-right: none;
  margin-bottom: 15px;
  padding: 10px 0;
  font-weight: 600;
}

.ikonky {
 list-style: none;
}


</style>
