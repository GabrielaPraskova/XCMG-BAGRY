<template>
  <div class="kontejnerRodic">
   
    <div class="kontakt">
      <div class="kancelar">
        

          <h2>Adresa</h2>
            <p>
              Dolní 141
              <br />582 91 Světlá nad Sázavou
              <br />IČ: 08757127 | DIČ: CZ08757127
              <br />xcmg@xcmg.cz
            </p>
          
          <br />
          <h2>Vedení společnosti</h2>
             <div>
               <p> Ing. Martin Prášek – jednatel
                <br />tel: +420 777 728 275
                <br />e-mail: prasek@xcmg.cz <p/>
              </div>
              <div class="druhyspan"> 
                <p><br />Ing. Radek Klofáč – jednatel
                    <br />tel: +420 777 728 063
                    <br />e-mail: klofac@xcmg.cz
                </p>
              </div>
      </div>
      <div class="kancelar">
          <h2>Kancelář</h2>
        
          <h4>Otevírací doba:</h4>
            <p>
              Po – Pá 8:00 – 17:30
              <br />nebo dle telefonické dohody
            </p>
        


        <div class="napisteNam"> 
            <h2>Napište nám</h2>

            <div class="label">
              <label> Jméno a přijmení </label> 
            </div>
            <div>
              <input class="inputKontakt" type="text">  
            </div>

            <div class="label">
              <label> Email </label> </div>
            <div>
              <input  class="inputKontakt" type="email"> 
            </div>
            <div class="label">
              <label> Text zprávy </label>     </div>
            <div>
              <textarea class="inputKontakt"></textarea>
            </div> 
           
        </div>
         <v-btn class="tlacitkoOdeslat" outlined color="#3498db">Odeslat</v-btn>
      </div>
    
      <div class="obrazek">  
          <img class="mapa" src="mapa.jpg" alt="mapa">
      </div>
    </div>
  </div>
      

  
</template>

<script>
export default {};
</script>

<style scoped>

.kontejnerRodic{
   margin-top: 30px;
   display: flex;
   justify-content: center;

}
.kontakt{
  display: flex;
  justify-content: space-around;
  max-width: 1150px;
 
}
.kontakt h2{
  color: #3498db;
  text-align: left;
  margin-bottom: 10px;

}
.kontakt h4{  
  color: #3498db;
  text-align: left;
}

.kontakt p{
  text-align: left;
  line-height: 1.5;
}


.mapa {
  width: 80%;
  margin-left: 70px;
}

.obrazek{
  margin-top: 50px;
  margin-right: 20px;
}


.druhyspan{
  padding-top: 5px;
}

.inputKontakt{
  border: 1px solid #3498db;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
  margin: 5px;
}

.napisteNam{
  text-align: left;
  margin-top: 40px;
}

.label{
  padding-left: 5px;
}


.kancelar h2,
.kancelar h4,
.kancelar p{
  padding-left: 5px;
}

.kancelar p{
  margin-bottom: 10px;
}


</style>