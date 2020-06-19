<template>
  <div>
    <img class="celniObr" src="/LW800KN.jpg" alt="obrazekLW800KN" />
    <img class="rypadloObr" src="/LP500JK.jpg" alt="obrazekLP500JK" />

    <v-btn class="ma-2" outlined color="#3498db"><router-link  to="/Konfigurator1">Konfiguruj</router-link></v-btn>
    <v-btn class="ma-2" outlined color="#3498db"><router-link  to="/Konfigurator2">Konfiguruj</router-link></v-btn>

    <v-footer>
      <div class="paticka">
        <ul class="kont">
          <li>Kontakty</li>
          <li>Dolní 141</li>
          <li>582 91 Světlá nad Sázavou</li>
          <li>733 798 032</li>
          <li>xcmg@servis.com</li>
        </ul>

        <ul class="servis">
          <li>Servisní hodiny</li>
          <li>Po - Pá: 8 - 17</li>
          <li>nebo dle dohody</li>
        </ul>
      </div>
      
    </v-footer>
    <div>copyright &copy; {{ new Date().getFullYear() }}  XCMG/GM </div>
  </div>
</template>

<script>
export default {};
</script>


<style>

.celniObr {
  max-width: 5%;
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

.paticka {
  display: flex;
  list-style: none; 
}

.kont,
.servis {
  list-style: none;
  text-align: left;
  font-size: 13px;
}

.kont {
  margin-right: 50px;
}

/* .footer {
   background-color: cadetblue;
} */
</style>
