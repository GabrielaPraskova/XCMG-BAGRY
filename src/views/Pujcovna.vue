<template>
<div class="pujcovnaKontejner">
  <div class="pujcovna">
    <div class="pujcovnaSloupec">
      <div class="pujcovnaPopis">
        <h1>PUJČOVNA</h1>
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

    <div class="pujcovnaSloupec">
    
      <div class="obrazky">
        <div class="prvniObrazek">
          <img class="celniObr" src="/LW800KN.jpg" alt="obrazekLW800KN" />
          <div>
            <h3>LW800KN</h3>
            alsdkfj;asdifj
            <h3>Cena</h3>
            od 1500 Kč
          </div>
        </div>
        <div class="druhyObrazek">
          <img class="celniObr" src="/ZL50G.jpg" alt="obrazekLW800KN" />
          <div>
            <h3>LW800KN</h3>
            alsdkfj;asdifj
            <h3>Cena</h3>
            od 1500 Kč
          </div>
        </div>
        <div class="tretiObrazek">
          <img class="celniObr" src="/bagr/ZL30G.jpg" alt="obrazekLW800KN" />
          <div>
            <h3>LW800KN</h3>
            alsdkfj;asdifj
            <h3>Cena</h3>
            od 1500 Kč
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
.pujcovnaKontejner{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  line-height: 1.5;
  }

.pujcovna {
  display: flex;
  width:1150px;
  }

.pujcovna h1 {
  margin-bottom: 20px;
  color:#3498db
}
h3 {
  text-align: left;
} 

.celniObr {
  max-width: 30%;
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

.pujcovnaSloupec{
  flex:1;
}


</style>
