<template>
		<div class="grid-container">

	<div class="obrazek">
		<img class="vybranyStroj" v-bind:src="`/${$route.params.typ}/${aktivniRypadlo.obrazek}`"
			alt="obrazekBagrRypadla" />
	</div>

	<div class="ponuka">
		<div v-if="aktivniStranka === 0" class="druhy">
			<h1 class="nadpisKonfigurator">{{aktivniRypadlo.nazev}}</h1>
			<button v-on:click="nastavAktivniRypadlo(rypadlo)" v-bind:class="{active: rypadlo === aktivniRypadlo}"
				v-for="(rypadlo,index) in rypadla" v-bind:key="index" class="tlacitkoNosnostHmotnost">
				<div class="hmotnost">Hmotnost: {{rypadlo.technickeParametry.hmotnost}}t</div>
				<div v-if="typ === 'bagr'" class="nosnost">Nosnost: {{rypadlo.technickeParametry.nosnost}}t
				</div>
			</button>

			<h2>Výběr motoru:</h2>

			<v-col cols="12" sm="6" md="4">
				<v-radio-group v-model="aktivniMotor" hide-details>
					<v-radio v-for="(motor, index) in aktivniRypadlo.motor" v-bind:key="index" :value="motor"
						:label="motor.nazevMotoru"></v-radio>
					<!-- <v-radio value="XD50" label={{motor.nazevMotoru}}></v-radio> -->
				</v-radio-group>
			</v-col>
			<div v-if="typ === 'rypadlo'" class="barvy">
				<button class="tlacitkaBarvy" v-on:click="vyberBarvu(preklad)" v-for="(preklad, barva) in Data.barvy"
					v-bind:key="barva" v-bind:style="`background: ${barva}`"
					v-bind:class="{'btn-active':preklad === aktivniBarva}"></button>
			</div>
		</div>

		<div class="druhy2" v-if="aktivniStranka === 1 && typ === 'bagr' ">
			<!-- <h1>Nadstandartní výbava</h1> -->
			

			<v-checkbox v-if="typ === 'bagr'" v-for="(vec, index) in Data.nadstandart" v-bind:key="index"
				v-model="aktivniNadstandart[vec.id]" :value="vec" :label="`${(vec.nazev)} : ${(vec.cenaBezDPH)} Kč`">
			</v-checkbox>

			<div  class="barvy">
				<button class="tlacitkaBarvy" v-on:click="vyberBarvu(preklad)" v-for="(preklad, barva) in Data.barvy"
					v-bind:key="barva" v-bind:style="`background: ${barva}`"
					v-bind:class="{'btn-active':preklad === aktivniBarva}"></button>
			</div>


			<!-- <h2>Barva</h2>             -->
			
		</div>

		<div class="druhy3" v-if="aktivniStranka === 2">
			<!-- <h1>Výběr příslušenství</h1> -->
			<div v-for="(polozka, index) in vyberRypadla" v-bind:key="index">
				<img class="obrazekPrislusenstvi" v-bind:src="(`/${typ}/${polozka.obrazek}`)" alt="lzice" />
				<v-checkbox v-model="aktivniPrislusenstvi[polozka.id]" :value="polozka"
					:label="`${polozka.nazev}: ${polozka.cenaBezDPH} Kč bez DPH`"></v-checkbox>
			</div>
		</div>
	</div>

	<div class="strankovani">
		<div class="tlacitkoPredchozi">
			<v-btn v-on:click="prev" class="ma-2" outlined color="#3498db" v-if="aktivniStranka > 0">Předchozí</v-btn>
		</div>
		<div class="tlacitkoDalsi">
		<v-btn v-on:click="next" class="ma-2" outlined color="#3498db" v-if="aktivniStranka < 2">Další</v-btn>
		</div>
	</div>
	

	<div class="kalkulace">
		<div class="cenaStroje">
			<div class="napisyZaklikanychPolozek">Stroj</div>

			<div class="rodic">
				<div class="prvniSloupec">{{aktivniRypadlo.nazev}} </div>
				<div class="druhySloupec">
					<div class="vybranePolozky">{{aktivniRypadlo.cenaBezDPH}} Kč</div>
				</div>
			</div>

			<div v-if="aktivniMotor.cenaMotoruBez === 0" class="cenaMotoru">
				<div class="napisyZaklikanychPolozek">Motor</div>
				<div class="vybranePolozky">{{aktivniMotor.nazevMotoru}} (zahrnuto v ceně)</div>
			</div>
			<div v-if="aktivniMotor.cenaMotoruBez > 0" class="cenaMotoru">
				<div class="napisyZaklikanychPolozek">Motor</div>
				<div class="vybranePolozky">{{aktivniMotor.nazevMotoru}}: {{aktivniMotor.cenaMotoruBez}} Kč
				</div>
			</div>


			<div v-for="(polozka, index) in nadstandartHezky" v-bind:key="index" class="cenaNadstandartu">
				<div class="napisyZaklikanychPolozek">Nadstandart</div>
				<div class="vybranePolozky"> {{polozka.nazev}}:{{polozka.cenaBezDPH}} Kč</div>
			</div>
			<div class="cenaBarva">
				<div class="napisyZaklikanychPolozek">Barva</div>
				<div class="vybranePolozky">{{aktivniBarva}} (zahrnuto v ceně)</div>
			</div>
			<div v-if="prislusenstviHezky.length > 0" class="napisyZaklikanychPolozek">Příšlušenství </div>
			<div v-for="(polozka, index) in prislusenstviHezky" v-bind:key="index" class="cenaPrislusenstvi">
				{{polozka.nazev}}
				{{polozka.cenaBezDPH | numeralFormat}} Kč
			</div>

		</div>

	</div>
	<div class="celkem">

		<div class="cenaCelkem">
			<div class="cenaCelkem">Cena bez DPH</div>
			<div class="vypsanaCenaCelkem"> {{celkovaCena}} Kč</div>
		</div>

		<v-btn class="tlacitkoPoptavka" outlined color="#3498db">Nezávazná Poptávka</v-btn>

		<p class="casDodani">Běžná doba dodání stroje od odeslání závazné objednávky je 2 měsíce</p>

		<p class="ozvemeSe">Máte-li zájem o konkrétní konfiguraci stroje, napište nám a my se vám
			ozveme do následujícího pracovního dne.
		</p>

	</div>

</div>
</template>

<script>
import Data from "./../assets/Data/data.js";

export default {
  props: ["typ"],
  data() {
    const rypadla = Data.stroje.filter((stroj) => stroj.typ === this.typ);

    return {
      Data,
      aktivniRypadlo: rypadla[0],
      rypadla,
      aktivniStranka: 0,
      aktivniMotor: rypadla[0].motor[0],
      aktivniBarva: "žlutá",
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

    nadstandartHezky() {
      const nadstandartNice = Object.entries(this.aktivniNadstandart)
      .filter(polozka => polozka[1] !== null)
      .map(y => y[1])
     
      return nadstandartNice

    },

    celkovaCena(){
      const cenaNadstandartu = this.nadstandartHezky.reduce((sucet, radek) => sucet + radek.cenaBezDPH, 0)
      const cenaPrislusenstvi = this.prislusenstviHezky.reduce((sucet, radek) => sucet + radek.cenaBezDPH, 0)
      return cenaNadstandartu + this.aktivniRypadlo.cenaBezDPH + this.aktivniMotor.cenaMotoruBez + cenaPrislusenstvi

    },

     prislusenstviHezky() {
      const prislusenstviNice = Object.entries(this.aktivniPrislusenstvi)
      .filter(polozka => polozka[1] !== null)
      .map(y => y[1])
     
      return prislusenstviNice

    },

  



    // vyberNastandart() {
    //   const nazvyNadstandart = Object.entries(this.aktivniNadstandart)
    //     .filter((nadstandard) => nadstandard[1] === true)
    //     .map((fruit) => {
    //       const id = fruit[0];
    //       const nadstandardnaPolozka = Data.nadstandart.find(
    //         (polozka) => polozka.id.toString() === id.toString()
    //       );
    //       return nadstandardnaPolozka.nazev;
    //     });

    //   return nazvyNadstandart;
    // },


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
	 if (this.typ === 'rypadlo' && this.aktivniStranka === 0){
		 this.aktivniStranka = 2
		 return
	 }	 
	 this.aktivniStranka++;
    },

    prev() {
		 if (this.typ === 'rypadlo' && this.aktivniStranka === 2){
		 this.aktivniStranka = 0
		 return
	 }
      this.aktivniStranka--;
    },
    vyberBarvu(color) {
      this.aktivniBarva = color;
    },
  },
};
</script>

<style scoped>
.grid-container {
	height:100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1.5fr 1fr 0.5fr;
	gap: 1px 1px;
	grid-template-areas: "obrazek obrazek ponuka kalkulace" "obrazek obrazek ponuka celkem" "obrazek obrazek strankovani celkem";

	max-height: 100%;
    overflow: hidden;
}


.obrazek { grid-area: obrazek; }

.ponuka {
	grid-area: ponuka;
	overflow: auto;
	min-height: 0;
}

.strankovani { grid-area: strankovani; }
.kalkulace { grid-area: kalkulace; }
.celkem { grid-area: celkem; }







.kontejner {
	display: flex;
}

.prvni {
	flex-basis: 50%
}
.tlacitkaKonfigurator,
.treti {
	flex-basis: 30%;
	text-align: left;
	margin-top: 30px
	
}

/* .popisStroje {
	text-align: left;
	margin-left: 20px;
	
} */

.vybranyStroj {
	max-width: 100%;
}

.active {
	border: 2px solid #3498db;
	padding: 10px;
	border-radius: 5px;
	text-align: left;
	margin: 10px;
}

.tlacitkoNosnostHmotnost {
	border: 1px solid #3498db;
	padding: 10px;
	border-radius: 5px;
	text-align: left;
	margin: 10px;
	width: 150px;
}

.strankovani {
	display: flex;
	justify-content: space-around;

}

.tlacitkaBarvy {
	border: 1px solid #3498db;
	padding: 10px;
	border-radius: 5px;
	text-align: left;
	margin: 10px;
}
.obrazekPrislusenstvi {
	max-width: 80%;
	display: block;
}

.btn-active {
	border: solid 5px black;
}

.tabulka {
	text-align: left;
	font-size: 15px;
}

.nadpisKonfigurator{
	color:#2c3e50;
	margin: 15px;
	text-align: left;
}

.infoPoptavka{
	text-align: left;
	margin: 20px;
}

.cenik{
	margin: 20px;
}

.napisyZaklikanychPolozek {
	font-weight: 700;
	font-size: 20px;
	color: #3498db;
	padding-bottom: 10px;
	text-transform: uppercase;
}

.vybranePolozky {
	padding-bottom:15px;
}

.cenaCelkem {
	font-weight: 700;
	font-size: 20px;
	color: #3498db;
	padding-top: 10px;
	text-transform: uppercase;
}

/* .tlacitkoPoptavka{
	text-align: right;
} */
.hmotnost{
	font-weight: bold
}

h2{
	margin-top: 15px;
	;
}

/* .druhy,
.druhy2,
.druhy3 {
	text-align: left;
	margin-top: 30px
} */

.barvy{
	text-align: left;
}

.casDodani {
	padding: 30px 0;
	font-style: italic;
}

.ozvemeSe{
	 font-style: italic;
}

.rodic{
	display: flex;
}

.prvniSloupec{
	flex-grow: 1;
}
.druhySloupec{
	flex-grow: 1;
	text-align: right;
}


</style>
