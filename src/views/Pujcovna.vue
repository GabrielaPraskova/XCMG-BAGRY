<template>
  <div class="kontejnerRodic">
    <div class="kontejnerDite">
      <div class="pujcovnaSloupecJedna">
        <div class="pujcovnaPopis">
          <h1>Půjčovna strojů</h1>
          <p class="pujcovnaPrvniOdstavec">
            Každý stavař zná situaci, kdy termíny realizace zakázek tlačí a
            stávající technika vypoví službu. Ať už jste malý podnikatel s velkými
            záměry nebo velký podnikatel s malými záměry, anebo úplně jinak,
            věříme, že jsme schopni pokrýt jakoukoliv vaší poptávku, dlouhodobého
            i krátkodobého charakteru, na zapůjčení techniky pro realizaci toho,
            co jste si předsevzali.
          </p>

          <p class="pujcovnaDruhyOdstavec">
            Pokud v uvedeném seznamu strojů z půjčovny nenaleznete takový, jaký
            potřebujete, nezoufejte, sdílíme sklad s Německým partnerem a
            poptávaný stroj dokážeme dodat během několika dní až k vám na stavbu.
          </p>

          <h3 class="pujcovnaAdresaNadpis">Administrátor půjčovny</h3>
          <ul class="pujcovnaAdresa">
            <li>​Martin Prášek</li>
            <li>Telefon: +420 733 798 032</li>
            <li>E-Mail: pujcovna@xcmg.cz​​​​</li>
          </ul>

        </div>
      </div>

      <div class="pujcovnaSloupecDva">
      
        <div class="obrazky">
          <div class="prvniObrazek">
            <img class="celniObr" src="/LW800KN.jpg" alt="obrazekLW800KN" />
            <div>
              <h3>LW800KN</h3>
              <p>Kolový nakladač série LW s nosností 1.8 t.</p>
               <h4> od 1500 Kč / den</h4>
            </div>
          </div>
          <div class="druhyObrazek">
            <img class="celniObr" src="/ZL50G.jpg" alt="obrazekLW800KN" />
            <div>
              <h3>ZL50G</h3>
              <p>Kolový nakladač série ZL s nosností 5 t.</p>
              <h4>od 2 500 Kč / den</h4>

            </div>
          </div>
          <div class="tretiObrazek">
            <img class="celniObr" src="/bagr/ZL30G.jpg" alt="obrazekLW800KN" />
            <div>
              <h3>ZL3OG</h3>
              <p>Kolový nakladač série ZL s nosností 3 t.</p>
              <h4>od 2 000 Kč / den</h4>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.kontejnerRodic{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  line-height: 1.5;
  }

.kontejnerDite {
  display: flex;
  width:1150px;
  flex-wrap: wrap;
  margin: 30px;
  }


h1 {
  margin-bottom: 20px;
  color:#3498db
}

h3 {
  text-align: left;
} 

.celniObr {
  max-width: 40%;
  margin-right: 20px;
}

.prvniObrazek,
.druhyObrazek,
.tretiObrazek {
  display: flex;
}

.pujcovnaAdresa {
  list-style: none;
}

.pujcovnaAdresaNadpis{
  margin-top: 50px;
}

.pujcovnaDruhyOdstavec,
.pujcovnaPrvniOdstavec {
  padding-bottom: 30px;
  text-align: justify;
  line-height: 1.5;
 
}

.pujcovnaSloupecJedna,
.pujcovnaSloupecDva{
  flex:1;
  flex-basis: 500px;
}

.pujcovnaSloupecDva{
  display: flex;
  margin-left:50px;
  margin-top: 30px;
}

.pujcovnaSloupecDva h4{
  margin: 0px;
  color:black;
  }
.pujcovnaSloupecDva h3{
  padding-top: 30px;
  color:#3498db;
  margin: 0;
}

.pujcovnaSloupecJedna p,
.pujcovnaSloupecDva p{
  font-size: 14px
}


</style>
