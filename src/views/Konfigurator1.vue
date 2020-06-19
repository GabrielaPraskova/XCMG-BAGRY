<template>
  <div>
    <div class="kontejner">
      <div class="prvni">
      <img class="celniObr" src="/ZL50G.jpg" alt="obrazekZJ50G" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae fugiat, alias libero quas quibusdam nisi? Labore magnam eum, exercitationem adipisci dolore velit architecto quae ipsa facilis aspernatur hic, odit aperiam!</p>
</div>
      <div class="druhy">
        <h1>ZL50G(CE)</h1>
        
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Nosnost" dense solo></v-select>
        </v-col>
      
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Hmotnost" dense outlined></v-select>
        </v-col>
          <v-col cols="12" sm="6" md="4">
          <v-subheader>Motor</v-subheader>
          <v-radio-group v-model="direction" hide-details>
            <v-radio value="top" label="MT30"></v-radio>
            <v-radio value="right" label="XD50"></v-radio>
          
          </v-radio-group>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" filled label="Interiér" dense></v-select>
        </v-col>

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
export default {};
</script>

<style>
.kontejner {
  display: flex;
  margin: 50px;
}

.druhy,
.treti {
  text-align: left;
}

.celniObr {
  max-width: 50%;
  height: auto;
}
</style>