<template>
  <div class="kontejner">
    <div class="kontakt">
      <div class="formular">
        <h1>Kontakt</h1>

          <h3>Adresa</h3>
            <p>
              Dolní 141
              <br />582 91 Světlá nad Sázavou
              <br />IČ: 08757127 | DIČ: CZ08757127
              <br />info@pkbau.cz
            </p>
          <hr />
          <br />
          <h3>Vedení společnosti</h3>
            <p>
                <span>Ing. Martin Prášek – jednatel
                <br />tel: +420 777 728 275
                <br />e-mail: prasek@xcmg.cz</span>
                <span class="druhyspan"> <br />Ing. Radek Klofáč – jednatel
                <br />tel: +420 777 728 063
                <br />e-mail: klofac@xcmg.cz</span>
            </p>
        <hr />
        <br />
          <h3>Kancelář</h3>
        <!-- <p>
          Ivana Jarošová – asistentka
          <br />tel: +420 601 300 140
          <br />e-mail: xcmg@xcmg.cz
        </p>
        <hr />
        <br />-->
        <h3>Otevírací doba:</h3>
          <p>
            Po – Pá 8:00 – 17:30
            <br />nebo dle telefonické dohody
          </p>
        <div class="napisteNam"> 
          <h3>Napište nám</h3>
          <br />

            <div class="jmenoPrijmeni">
              <v-col cols="12" sm="6" md="10">
                <v-text-field label="Jméno a příjmení" outlined color="#3498db"></v-text-field>
              </v-col>
              <!-- <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Příjmení" outlined color="#3498db"></v-text-field>
              </v-col>-->
            </div>
            <v-col cols="12" sm="6" md="10">
              <v-text-field label="Email" outlined color="#3498db"></v-text-field>
            </v-col>

              <v-textarea outlined color="#3498db" name="input-7-4" label value></v-textarea>
              <v-btn class="ma-2" outlined color="#3498db">Odeslat</v-btn>
          </div>
        </div>
    </div>
    <div class="obrazek">
      <div>
        <img class="mapa" src="mapa.jpg" alt="mapa" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.kontejner {
  display: flex;
  justify-content: space-around;

}
.kontakt h3 {
  color: #3498db;
  text-align: left;
  margin-left: 20px;
}

.kontakt h1 {
  text-align: left;
  margin-left:20px;
  
}
.kontakt p {
  text-align: left;
  padding: 20px;
}

.jmenoPrijmeni {
  display: flex;
}

.mapa {
  max-width: 100%;
}
</style>