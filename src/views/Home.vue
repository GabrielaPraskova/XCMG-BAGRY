<template>
  <div>
    <img class="celniObr" src="/LW800KN.jpg" alt="obrazekLW800KN" />
    <img class="rypadloObr" src="/LP500JK.jpg" alt="obrazekLP500JK" />

    <v-btn class="ma-2" outlined color="#3498db"><router-link  to="/Konfigurator1">Konfiguruj</router-link></v-btn>
    <v-btn class="ma-2" outlined color="#3498db"><router-link  to="/Konfigurator2">Konfiguruj</router-link></v-btn>

    <footer>
      <div class="paticka">
        <ul class="kont">
          <li class="k">Kontakty</li>
          <li>Dolní 141</li>
          <li>582 91 Světlá nad Sázavou</li>
          <li>733 798 032</li>
          <li>xcmg@servis.com</li>
        </ul>

        <ul class="servis">
          <li class="s">Servisní hodiny</li>
          <li>Po - Pá: 8 - 17</li>
          <li>nebo dle dohody</li>
        </ul>

        <ul class="ikonky">
          <li class="i">
          <li class="facebook"><a href="https://www.facebook.com/zetor" target="_blank"><img class="obrazekFb" src="/fb.png"></a></li>
          <li class="linked"><a href="https://www.linkedin.com/company/zetor-tractors-a-s-?trk=nav_account_sub_nav_company_admin" target="_blank"><span class="icon icon-linkedin"></span></a></li>
          <li class="youtube"><a href="https://www.youtube.com/channel/UCMNdnC74YttvjNuTzkYoigQ" target="_blank"><span class="icon icon-youtube"></span></a></li>
        </ul>

      </div>
      
    </footer>

    <div class="copy">copyright &copy; {{ new Date().getFullYear() }}  XCMG/GM </div>
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

.paticka {
  display: flex;
  list-style: none; 
  background-color: #eeeeee;
  
}

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

.copy {
   background-color: #3498db;
   padding: 10px;
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

.obrazekFb {
  max-width: 5%;
  border-radius: 50%;
}
</style>
