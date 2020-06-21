<template>
  <div>
    <div class="kontejner">
      <div class="prvni">
        <img
          class="celniObr"
          v-bind:src="`/${$route.params.typ}/${aktivniRypadlo.obrazek}`"
          alt="obrazekBagrRypadla"
        />

        <div>
          <p>{{aktivniRypadlo.popis}}</p>
          <!-- <table class="tabulka">
            <tr v-for="(hodnota, nazev) in aktivniRypadlo.technickeParametry">
              <th>{{nazev}}</th>
              <td>{{hodnota}}</td>

            </tr>
          </table> -->

        </div>
      </div>

        <div class="tlacitkaKonfigurator">
          <div v-if="aktivniStranka === 0" class="druhy">
            <h1>ZL50G(CE)</h1>
            <button
              v-on:click="nastavAktivniRypadlo(rypadlo)"
              v-bind:class="{active: rypadlo === aktivniRypadlo}"
              v-for="(rypadlo,index) in rypadla"
              v-bind:key="index"
            >
              <div>Hmotnost:{{rypadlo.technickeParametry.hmotnost}}</div>
              <div v-if="typ === 'bagr'">Nosnost:{{rypadlo.technickeParametry.nosnost}}</div>
            </button>

            <v-col cols="12" sm="6" md="4">
              <v-radio-group v-model="aktivniMotor" hide-details>
                <v-radio
                  v-for="(motor, index) in aktivniRypadlo.motor"
                  v-bind:key="index"
                  :value="motor"
                  :label="motor.nazevMotoru"
                ></v-radio>
                <!-- <v-radio value="XD50" label={{motor.nazevMotoru}}></v-radio> -->
              </v-radio-group>
            </v-col>
        </div>

        <div class="druhy2" v-if="aktivniStranka === 1">
          <v-subheader>Nadstandartní výbava</v-subheader>

            <v-checkbox v-if="typ === 'bagr'"
              v-for="(vec, index) in Data.nadstandart"
              v-bind:key="index"
              v-model="aktivniNadstandart[vec.id]"
              :value="vec"
              :label="`${(vec.nazev)} : ${(vec.cenaBezDPH)} Kč bez DPH`"
            ></v-checkbox>

          <div class="barvy">
            <v-subheader>Barva</v-subheader>

              <button
                v-on:click="vyberBarvu(preklad)"
                v-for="(preklad, barva) in Data.barvy"
                v-bind:key="barva"
                v-bind:style="`background: ${barva}`"
                v-bind:class="{'btn-active':preklad === aktivniBarva}"
  
              ></button>
            </div>
        </div>

        <div class="druhy3" v-if="aktivniStranka === 2">
          <div v-for="(polozka, index) in vyberRypadla" v-bind:key="index">
            <!-- <img class="prislusenstvi" v-bind:src="(`/rypadla/${polozka.obrazek}`)" alt="lzice" /> -->
            <v-checkbox v-model="aktivniPrislusenstvi[polozka.id]" :label="`${polozka.nazev}: ${polozka.cenaBezDPH} Kč bez DPH`"></v-checkbox>
          </div>
        </div>
        <div>
          <v-btn
            v-on:click="prev"
            class="ma-2"
            outlined
            color="#3498db"
            v-if="aktivniStranka > 0"
            >PREVIOUS</v-btn
          >

          <v-btn
            v-on:click="next"
            class="ma-2"
            outlined
            color="#3498db"
            v-if="aktivniStranka < 2"
            >NEXT</v-btn
          >
        </div>
      </div>

      <div class="treti">
        <h1>Cena</h1>
        <div class="cenaStroje">Cena stroje: {{aktivniRypadlo.nazev}} : {{aktivniRypadlo.cenaBezDPH}} Kč bez DPH </div>
        <div v-if="aktivniMotor.cenaMotoruBez === 0" class="cenaMotoru"> Cena motoru: {{aktivniMotor.nazevMotoru}}: (zahrnuto v ceně)</div>
        <div v-if="aktivniMotor.cenaMotoruBez > 0" class="cenaMotoru"> Cena motoru: {{aktivniMotor.nazevMotoru}}: {{aktivniMotor.cenaMotoruBez}} Kč bez DPH</div>
        <div class="cenaNadstandartu"> Cena nadstandartu: {{aktivniNadstandart}}: </div>
        <div class="cenaBarva"> Vybraná barva: {{aktivniBarva}} (zahrnuto v ceně)</div>
        <div class="cenaPrislusenstvi"> Cena příslušenství: {{vyberPrislusenstvi}}</div>
        <div class="cenaCelkem"> Cena celkem: bez DPH</div>
        
        <hr />
        
        <p>Běžný čas dodání stroje je 2 měsíce od odeslání poptávky</p>

        <p>
          Máte-li zájem o konkrétní konfiguraci stroje, napište nám a my se vám
          ozveme do následujícího pracovního dne
        </p>
        <v-btn class="ma-2" outlined color="#3498db">Nezávazná Poptávka</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "./../assets/Data/data.js";

export default {
  props: ["typ"],
  data() {
    const rypadla = Data.stroje.filter((stroj) => stroj.typ === this.typ);
    console.log(rypadla);
    return {
      Data,
      aktivniRypadlo: rypadla[0],
      rypadla,
      aktivniStranka: 0,
      aktivniMotor: rypadla[0].motor[0],
      aktivniBarva: "yellow",
      aktivniPrislusenstvi: {},
      aktivniNadstandart: {},
    };
  },

  watch: {
    typ() {
      const filtrovaneStroje = Data.stroje.filter(
        (stroj) => stroj.typ === this.typ
      );

      this.rypadla = filtrovaneStroje;
      this.aktivniRypadlo = filtrovaneStroje[0];
      this.aktivniMotor = filtrovaneStroje[0].motor[0].nazevMotoru;
    },
  },

  computed: {
    vyberRypadla() {
      const rypadla = Data.prislusenstvi.filter(
        (polozka) => polozka.typ === this.typ
      );
      console.log(rypadla);
      return rypadla;
    },

    vyberNastandart() {
      const nazvyNadstandart = Object.entries(this.aktivniNadstandart)
        .filter((nadstandard) => nadstandard[1] === true)
        .map((fruit) => {
          const id = fruit[0];
          const nadstandardnaPolozka = Data.nadstandart.find(
            (polozka) => polozka.id.toString() === id.toString()
          );
          return nadstandardnaPolozka.nazev;
        });

      return nazvyNadstandart;
    },


    vyberPrislusenstvi() {
      const nazvyPrislusenstvi = Object.entries(this.aktivniPrislusenstvi)
        .filter((prislusenstvi) => prislusenstvi[1] === true)
        .map((smetak) => {
          const id = smetak[0];
          const nadstandardnaPolozka = Data.prislusenstvi.find(
            (polozka) => polozka.id.toString() === id.toString()
          );
          return nadstandardnaPolozka.nazev;
        });

      return nazvyPrislusenstvi;
    },
  },

  methods: {
    nastavAktivniRypadlo(rypadlo) {
      this.aktivniRypadlo = rypadlo;
      this.aktivniMotor = this.aktivniRypadlo.motor[0];
      
    },

    next() {
      this.aktivniStranka++;
    },

    prev() {
      this.aktivniStranka--;
    },
    vyberBarvu(color) {
      this.aktivniBarva = color;
    },
  },
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

.btn-active {
  border: solid 5px black;
}

.tabulka {
  text-align: left;
  font-size: 15px;
}
</style>
