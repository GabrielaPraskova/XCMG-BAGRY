<template>
		<div class="grid-container">

	<div class="obrazek">
		<img class="vybranyStroj" v-bind:src="`/${$route.params.typ}/${aktivniRypadlo.obrazek}`"
			alt="obrazekBagrRypadla" />
	</div>

	<div class="ponuka">
		<div v-if="aktivniStranka === 0" class="druhy">
			<h1 class="nadpisKonfigurator">{{aktivniRypadlo.nazev}}</h1>
			<button class="tlacitkoNosnostHmotnost" v-on:click="nastavAktivniRypadlo(rypadlo)" v-bind:class="{'btn-active': rypadlo === aktivniRypadlo}" 
				v-for="(rypadlo,index) in rypadla" v-bind:key="index">
				<div class="hmotnost">Hmotnost: {{rypadlo.technickeParametry.hmotnost}}t</div>
				<div v-if="typ === 'bagr'" class="nosnost">Nosnost: {{rypadlo.technickeParametry.nosnost}}t
				</div>
			</button>

			<h2>Typ motoru</h2>
				<v-radio-group v-model="aktivniMotor" hide-details>
					<v-radio v-for="(motor, index) in aktivniRypadlo.motor" v-bind:key="index" :value="motor"
						:label="motor.nazevMotoru"></v-radio>
				</v-radio-group>
			
			<div v-if="typ === 'rypadlo'" class="barvy">
				<button class="tlacitkaBarvy" v-on:click="vyberBarvu(preklad)" v-for="(preklad, barva) in Data.barvy"
					v-bind:key="barva" v-bind:style="`background: ${barva}`"
					v-bind:class="{'btn-active':preklad === aktivniBarva}"></button>
			</div>
		</div>



<!-- <div class="napisyZaklikanychPolozek">Stroj</div>

			<div class="rodic">
				<div class="prvniSloupec">{{aktivniRypadlo.nazev}} </div>
				<div class="druhySloupec">
					<div class="vybranePolozky">{{aktivniRypadlo.cenaBezDPH | numeralFormat}} Kč</div>
				</div>
			</div> -->



		<div class="druhy2" v-if="aktivniStranka === 1 && typ === 'bagr' ">
			
			
			<v-checkbox v-if="typ === 'bagr'" v-for="(vec, index) in Data.nadstandart" v-bind:key="index"
				v-model="aktivniNadstandart[vec.id]" :value="vec"> 
				<template v-slot:label>
						<!-- div je tam protoze vyrusi flex, ktery nastavuje label -->
						<div> 
							{{vec.nazev}} <em>({{vec.cenaBezDPH | numeralFormat}} Kč bez DPH)</em>
						</div>
				</template>
				
			
			</v-checkbox>

			<div  class="barvy">
				<button class="tlacitkaBarvy" v-on:click="vyberBarvu(preklad)" v-for="(preklad, barva) in Data.barvy"
					v-bind:key="barva" v-bind:style="`background: ${barva}`"
					v-bind:class="{'btn-active':preklad === aktivniBarva}">
				</button>
			</div>

			
		</div>

		<div class="druhy3" v-if="aktivniStranka === 2">
		
			<div v-for="(polozka, index) in vyberRypadla" v-bind:key="index">
				<img class="obrazekPrislusenstvi" v-bind:src="(`/${typ}/${polozka.obrazek}`)" alt="lzice" />
				<v-checkbox v-model="aktivniPrislusenstvi[polozka.id]" :value="polozka">
					<template v-slot:label>
						<!-- div je tam protoze vyrusi flex, ktery nastavuje label -->
						<div> 
							{{polozka.nazev}} <em>({{polozka.cenaBezDPH | numeralFormat}} Kč bez DPH)</em>
						</div>
					</template>
				</v-checkbox>
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
					<div class="vybranePolozky">{{aktivniRypadlo.cenaBezDPH | numeralFormat}} Kč</div>
				</div>
			</div>

			
			<div v-if="aktivniMotor.cenaMotoruBez === 0" class="cenaMotoru"></div>
				
				
			<div class="napisyZaklikanychPolozek">Motor</div>
			<div class="rodic">
				<div class="prvniSloupec">
					<div class="vybranePolozky">{{aktivniMotor.nazevMotoru}}</div>
				</div>
				<div class="druhySloupec" v-if="aktivniMotor.cenaMotoruBez > 0">{{aktivniMotor.cenaMotoruBez  | numeralFormat}} Kč</div>
				<div class="druhySloupec" v-if="aktivniMotor.cenaMotoruBez === 0">(zahrnuto v ceně)</div>
			</div>

			<div 

			v-if="nadstandartHezky.length > 0"
			class="napisyZaklikanychPolozek">Nadstandart</div>
			<div v-for="(polozka, index) in nadstandartHezky" v-bind:key="index"  class="cenaNadstandartu">
			
			<div class="rodic">
				<div class="prvniSloupec">
					<div class="vybranePolozky">{{polozka.nazev}}</div>
				</div>
				<div class="druhySloupec">{{polozka.cenaBezDPH  | numeralFormat}} Kč</div>
			</div>
			</div>


			<div class="cenaBarva">
				<div class="napisyZaklikanychPolozek">Barva</div>

				<div class="rodic">
					<div class="prvniSloupec">
						<div class="vybranePolozky">{{aktivniBarva}}</div> 
				</div> 
					<div class="druhySloupec">(zahrnuto v ceně)</div>
				</div>
			</div>


			<div v-if="prislusenstviHezky.length > 0" class="napisyZaklikanychPolozek">Příšlušenství </div>
			<div v-for="(polozka, index) in prislusenstviHezky" v-bind:key="index" class="cenaPrislusenstvi">
				<div class="rodic">
					<div class="prvniSloupec">
						<div class="vybranePolozky">{{polozka.nazev}}</div> 
				</div> 
					<div class="druhySloupec">{{polozka.cenaBezDPH | numeralFormat}} Kč</div>
				</div>
					
			</div>

		</div>

	</div>
	<div class="celkem">

		<div class="cenaCelkemDiv">

			<div class="rodic">
					<div class="prvniSloupec">
						<div class="cenaCelkem">Cena bez DPH</div>
					</div>
					<div class="druhySloupec">
						<div class="vypsanaCenaCelkem"> {{celkovaCena | numeralFormat}} Kč</div>
					</div>
			</div>
		</div>

		
		<div v-if="jeEmailOdeslan === false">
			<div class="label" > 
				<label> Email </label> 
			</div>
			<div class="labelEmail">
				<input  class="inputKontakt" type="email"> 
			</div>
		</div>
		
		<p v-else class="ozvemeSe">Poptávka odeslána, ozveme se Vám do dvou pracovních dnů.</p>
		
		<v-btn v-on:click="jeEmailOdeslan = true"  v-if="jeEmailOdeslan === false" class="tlacitkoPoptavka" outlined color="#3498db">Nezávazná Poptávka</v-btn>

		<p class="casDodani">Běžná doba dodání stroje od odeslání závazné objednávky je 2 měsíce</p>        

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
      aktivniBarva: "Žlutá",
      aktivniPrislusenstvi: {},
	  aktivniNadstandart: {},
	  jeEmailOdeslan:false
    };
  },

  watch: {
    typ() {
      const filtrovaneStroje = Data.stroje.filter(
        (stroj) => stroj.typ === this.typ
	  );

      this.rypadla = filtrovaneStroje;
      this.aktivniRypadlo = filtrovaneStroje[0];
	  this.aktivniMotor = filtrovaneStroje[0].motor[0];
	  this.jeEmailOdeslan = false;
	  this.aktivniStranka = 0;
    },
  },

  computed: {
    vyberRypadla() {
      const rypadla = Data.prislusenstvi.filter(
        (polozka) => polozka.typ === this.typ
	  );
	  
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
	margin-top: 50px;
	margin-right: 20px;
}

.strankovani { 
	grid-area: strankovani; 
	padding-top: 30px;
	}

.kalkulace { 
	grid-area: kalkulace; 
	margin-top: 70px;
	margin-right: 50px;
	overflow: auto;
	}

.celkem { 
	grid-area: celkem; 
	margin-right: 50px;
}

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
	outline: none;
}

.strankovani {
	display: flex;
	justify-content: space-between;
	margin-right: 70px;

}

.tlacitkaBarvy {
	padding: 20px;
	border-radius: 5px;
	text-align: left;
	margin-right: 10px;
	margin-top: 30px;
	outline: none;
}

.obrazekPrislusenstvi {
	max-width: 80%;
	display: block;
}

.btn-active {
	box-shadow: 0px 0px 7px 0px;
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
	font-weight: 500;
	font-size: 20px;
	color: #2c3e50;
	padding-bottom: 10px;
	text-transform: uppercase;
	text-align: left;
}

.vybranePolozky {
	padding-bottom:15px;
}

.cenaCelkem {
	font-weight: 700;
	font-size: 20px;
	color: #3498db;
	text-transform: uppercase;
	text-align: left;
}

.vypsanaCenaCelkem {
	color: #3498db;
	font-weight: 800;
	font-size: 20px;
}

.tlacitkoPoptavka{
	margin-top: 20px;
	text-align: right;
}

.hmotnost{
	font-weight: bold
}

h2{
	margin-top: 20px;
	text-align: left;
}

/* .druhy,
.druhy2,
.druhy3 {
	text-align: left;
	margin-top: 30px
} */

.barvy{	
	margin-left: 20px;
}
.ozvemeSe{
	 font-style: italic;
	 text-align: left;
	 margin-top: 40px;	 
}

.casDodani {
	font-style: italic;
	text-align: left;
	padding-top: 30px;
	line-height: 1.5	
}

.labelEmail{	
  border: 1px solid #3498db;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
  margin-top: 15px;
 }

 .label{
	 color: #3498db;
	 margin-top:10px
 }

.rodic{
	display: flex;
}

.prvniSloupec{
	flex-grow: 1;
	text-align: left;
}
.druhySloupec{
	flex-grow: 1;
	text-align: right;
	font-style: italic;
}

.theme--light.v-label {
    color: black
}

</style>
