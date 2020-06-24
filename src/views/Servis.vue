<template>
<div class="kontejnerServis">
<div class="servis">
  <div class="servisText">

      <h1>Servis</h1>
      <h3>  Záruční a pozáruční servis a prodej náhradních dílů pro stroje XCMG v České Republice zajišťuje: </h3>
      <p>PKBAU s.r.o. – Světlá nad Sázavou – prodej strojů, příslušenství a náhradních dílů, servis, půjčovna, 
            lokality: Beroun, České Budějovice, Liberec, Bruntál, Lovosice
            Rocktech s.r.o. – Plzeň – prodej strojů a příslušenství, servis strojů a příslušenství
            VZ service - Vladimír Zelenka - České Budějovice - prodej strojů a příslušenství, 
            servis strojů a tiltrotátorů engcon</p>
      <h3>Pro servis strojů XCMG, ale i CAT, Volvo, JCB, Bobcat, Komatsu volejte</h3>

      <p>Telefon: +420 733 798 032</p>

      <p>E-Mail: servis@xcmg.cz</p>


      <h3>Náhradní díly pro stroje XCMG, CAT, Volvo, Komatsu, Bobcat, JCB objednávejte</h3>

      <p>Telefon: +420 603 446 813</p>

      <p>E-Mail: dily@xcmg.cz</p>
  </div>

  <div class="servisObrazek">
    <img class="imgServis" src="bagr.jpg" alt="Bagr">
  </div>
  

</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.kontejnerServis{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.servis{
  display: flex;
  width: 1150px; 
  margin: 30px;
  flex-wrap: wrap;
}

.servisText,
.servisObrazek{
  margin-left: 30px;
  flex-basis: 500px;
  
}

.servisText h1, h3 {
    color: #3498db;
    margin-bottom: 10px;
}


.servis p {
  margin-bottom: 10px;
  text-align: justify;
  line-height: 1.5;
}

.servisObrazek{
  margin-left: 70px;
}

.servisObrazek{
  margin-right: 20px;
}
.imgServis{
  width: 100%;
}

</style>