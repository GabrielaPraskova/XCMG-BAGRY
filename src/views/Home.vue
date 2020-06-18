<template>
  <div>
    <img class="celniObr" src="/ZL50G.jpg" alt="obrazekZJ50G" />
    <img class="rypadloObr" src="/XE250.jpg" alt="obrazekXE250" />

    <v-btn class="ma-2" outlined color="#3498db">Konfiguruj</v-btn>
    <v-btn class="ma-2" outlined color="#3498db">Konfiguruj</v-btn>

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
  max-width: 40%;
  height: auto;
}

.rypadloObr {
  max-width: 30%;
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
