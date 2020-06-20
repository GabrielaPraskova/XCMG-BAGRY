<template>
  <div>
    <div class="kontejner">
      <div class="prvni">
        <img
          class="celniObr"
          v-bind:src="(`/kolove/${aktivniBagr.obrazek}`)"
          alt="obrazekBagrKolove"
        />
        <p>{{aktivniBagr.technickeParametry}}</p>
      </div>

      <div class="tlacitkaKonfigurator">
        <div v-if="aktivniStranka === 0" class="druhy">
          <h1>ZL50G(CE)</h1>
          <button
            v-on:click="nastavAktivnibagr(bagr)"
            v-bind:class="{active: bagr === aktivniBagr}"
            v-for="(bagr,index) in bagry"
            v-bind:key="index"
          >
            <div>Nosnost: {{bagr.technickeParametry.nosnost}}t</div>
            <div>Hmotnost:{{bagr.technickeParametry.hmotnost}}t</div>
          </button>

          <v-col cols="12" sm="6" md="4">
            <v-subheader>{{aktivniMotor}}</v-subheader>
            <v-radio-group v-model="aktivniMotor" hide-details>
              <v-radio v-for="(motor, index) in aktivniBagr.motor" 
            v-bind:key="index" :value="motor.nazevMotoru" :label="motor.nazevMotoru"></v-radio>
              <!-- <v-radio value="XD50" label={{motor.nazevMotoru}}></v-radio> -->
            </v-radio-group>
          </v-col>
        </div>

        <div class="druhy2" v-if="aktivniStranka === 1">
          <v-subheader>Nadstandartní výbava</v-subheader>

          <v-checkbox
            v-for="(vec, index) in Detail.nadstandart"
            v-bind:key="index"
            v-model="aktivniNadstandart[vec.id]"
            :label="`${(vec.nazev)}`"
          ></v-checkbox>
          <div class="barvy">
            <v-subheader>Barva</v-subheader>

            <button
              v-on:click="vyberBarvu(barva)"
              v-for="(barva, index) in Detail.barvy"
              v-bind:key="index"
              v-bind:style="`background: ${barva}`"
            ></button>
          </div>
        </div>

        <div class="druhy3" v-if="aktivniStranka === 2">
          <div v-for="(polozka, index) in vyberKolove" v-bind:key="index">
            <img class="prislusenstvi" v-bind:src="(`/kolove/${polozka.obrazek}`)" alt="lzice" />
            <v-checkbox v-model="checkbox1" :label="`${polozka.nazev}`"></v-checkbox>
          </div>
        </div>
        <div>
          <v-btn
            v-on:click="prev"
            class="ma-2"
            outlined
            color="#3498db"
            v-if="aktivniStranka > 0"
          >PREVIOUS</v-btn>

          <v-btn
            v-on:click="next"
            class="ma-2"
            outlined
            color="#3498db"
            v-if="aktivniStranka < 3"
          >NEXT</v-btn>
        </div>
      </div>

      <div class="treti">
        <h1>Cena</h1>
        <p>bagr 890 000,- Kč</p>
        <p>naklikane polozky {{aktivniNadstandart}}, {{aktivniBarva}}, {{aktivniMotor}}</p>
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

console.log(Detail.prislusenstvi);
let bagry = Detail.stroje.filter(stroj => stroj.typ === "bagr");

export default {
  data() {
    return {
      Detail,
      aktivniBagr: bagry[0],
      bagry,
      aktivniStranka: 0,
      aktivniMotor: bagry[0].motor[0].nazevMotoru,
      aktivniBarva: "yellow",
      aktivniNadstandart:{}
    };
  },

  computed: {
    vyberKolove() {
      const kolove = Detail.prislusenstvi.filter(
        polozka => polozka.typ === "bagr"
      );
      console.log(kolove);
      return kolove;
     },
     
  },

  methods: {
    nastavAktivnibagr(bagr) {
      this.aktivniBagr = bagr;
      this.aktivniMotor = this.aktivniBagr.motor[0].nazevMotoru;
    },


    next() {
      this.aktivniStranka++;
    },

    prev() {
      this.aktivniStranka--;
    },
    vyberBarvu(color){
      this.aktivniBarva = color
    }
  }
};
</script>

<style>
.kontejner {
  display: flex;
}

.prvni,
.tlacitkaKonfigurator,
.treti {
flex-basis: 33.3%;
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

.prislusenstvi {
  max-width: 10%;
  display: block;
}
</style>