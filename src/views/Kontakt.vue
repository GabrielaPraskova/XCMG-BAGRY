<template>
  <div class="kontejner">
    <div class="kontakt">
      <div class="vedeniSpolecnosti">
        <h1>Kontakt</h1>

          <h3>Adresa</h3>
            <p>
              Dolní 141
              <br />582 91 Světlá nad Sázavou
              <br />IČ: 08757127 | DIČ: CZ08757127
              <br />info@pkbau.cz
            </p>
          
          <br />
          <h3>Vedení společnosti</h3>
             <div>
               <p>
               Ing. Martin Prášek – jednatel
                <br />tel: +420 777 728 275
                <br />e-mail: prasek@xcmg.cz <p/></div>
                <div class="druhyspan"> 
                  <p><br />Ing. Radek Klofáč – jednatel
                <br />tel: +420 777 728 063
                <br />e-mail: klofac@xcmg.cz
              </p>
            </div>
      </div>
      <div class="kancelar">
        <h3>Kancelář</h3>
       
        <h3>Otevírací doba:</h3>
          <p>
            Po – Pá 8:00 – 17:30
            <br />nebo dle telefonické dohody
          </p>
      </div>


      <div class="napisteNam"> 
          <h3>Napište nám</h3>

          <label> Jméno a přijmení
            <input type="text">
          </label>
          
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
  margin-top: 35px;

}
.kontakt h3 {
  color: #3498db;
  text-align: left;
  margin-top: 10;
  margin-bottom: 20px;
}

.kontakt h1 {
  text-align: left;
  margin-bottom:20px;
  
}

.kontakt p {
  text-align: left;
  padding: 0px;
  margin-bottom: 5px;
}

.jmenoPrijmeni {
  display: flex;
}

.mapa {
  max-width: 100%;
}

.druhyspan{
  padding-top: 5px;
}
</style>