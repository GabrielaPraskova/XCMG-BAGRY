<template>
  <div>
    <div class="kontejner">
      <div class="prvni">
        <img class="celniObr" v-bind:src="(`/kolove/${aktivniBagr.obrazek}`)" alt="obrazekBagrKolove" />
        <p>c;lkasdpiou</p>
      </div>

      <div class="tlacitkaKonfigurator">

      <div v-if="aktivniStranka === 0" class="druhy">
        <h1>ZL50G(CE)</h1>
        <button
          v-on:click="nastavAktivnibagr(bagr)"
          v-bind:class="{active: bagr.id === aktivniId}"
          v-for="(bagr,index) in bagry"
          v-bind:key="index"
        >
          <div>Nosnost: {{bagr.technickeParametry.nosnost}}t</div>
          <div>Hmotnost:{{bagr.technickeParametry.hmotnost}}t</div>
        </button>

        <v-col cols="12" sm="6" md="4">
          <v-subheader>Motor</v-subheader>
          <v-radio-group v-model="direction" hide-details>
            <v-radio value="top" label="MT30"></v-radio>
            <v-radio value="right" label="XD50"></v-radio>
          </v-radio-group>
        </v-col>

      </div>

      <div class="druhy2" v-if="aktivniStranka === 1">
        <v-col class="d-flex" cols="12" sm="14">
          <v-select :items="items" filled label="Nadstandardní výbava" dense></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="14">
          <v-select :items="items" label="Příslušenství" dense outlined></v-select>
        </v-col>
        
      </div>

       <div  class="druhy3" v-if="aktivniStranka === 2">
        <v-col class="d-flex" cols="12" sm="14">
          <v-select :items="items" filled label="Barva" dense></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="14">
          <v-select :items="items" label="Příslušenství" dense outlined></v-select>
        </v-col>
        
      </div>
      <v-btn v-on:click="prev" class="ma-2" outlined color="#3498db" v-if="aktivniStranka > 0">PREVIOUS</v-btn>
      <v-btn v-on:click="next" class="ma-2" outlined color="#3498db" v-if="aktivniStranka < 3" >NEXT </v-btn>
    </div>


      <div class="treti">
        <h1>Cena</h1>
        <p>bagr 890 000,- Kč</p>
        <p>naklikane polozky</p>
        <hr />
        <p>Cena celkem bez DPH</p>

        <p>Běžný čas dodání stroje je 2 měsíce od odeslání poptávky</p>

        <p>Máte-li zájem o konkrétní konfiguraci stroje, napište nám a my se vám ozveme do následujícího pracovního dne</p>
        <v-btn class="ma-2" outlined color="#3498db">Nezávazná Poptávka</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from "./../assets/Data/data.js";

console.log(Detail);

let bagry = Detail.stroje.filter(stroj => stroj.typ === "bagr");
console.log(bagry);
export default {
  data() {
    return {
      aktivniBagr: "",
      bagry,
      aktivniStranka: 0,
    };
  },

  methods: {
    nastavAktivnibagr(id) {
      this.aktivniBagr = id;
    },

    next() {
      this.aktivniStranka++;
      
    },

    prev(){
      this.aktivniStranka--
      
    }


  }
};
</script>

<style>
.kontejner {
  display: flex;
}

.prvni,
.druhy {
  padding-right: 50px;
}
.druhy,
.treti {
  text-align: left;
}

.celniObr {
  max-width: 50%;
  align-self: center;
}

.active {
  border: 2px solid #3498db;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
  margin: 10px;
}

button {
  border: 1px solid #3498db;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
  margin: 10px;
}
</style>