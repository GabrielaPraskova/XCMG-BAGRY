<template>
  <div class="oSpolecnosti">
    <div class="kontejner">
      <div class="obrazekSpolecnost">
        <img src="building.png" alt="budova" />
      </div>
      <div class="predstaveni">
        <h2>O nás</h2>
        <p class="odstavec">Xuzhou Construction Machinery Group Co., Ltd. (XCMG) byla založena v roce 1943. Od té doby XCMG stála v čele čínského průmyslu stavebních strojů a vyvinula se v jednu z největších, nejvlivnějších a nejkonkurenceschopnějších skupin.</p>

        <p class="odstavec">
          XCMG je
          <strong><span style="font-size: 18px;">5</span></strong>. největší stavební strojní společnost na světě. Je na
          <strong><span style="font-size: 18px;">65</span></strong>. místě v seznamu
          <strong><span style="font-size: 18px;">500</span></strong> nejlepších čínských společností, na
          <strong><span style="font-size: 18px;">44</span></strong>. místě v seznamu 100 nejlepších čínských výrobních podniků a 4. na seznamu 100 nejlepších čínských výrobců strojů.
        </p>

        <p class="xcmguspech"> <strong><span style="font-size: 25px;"> XCMG pro váš úspěch!</span></strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style>
.obrazekSpolecnost{
  margin-top: 30px;
}
.kontejner{
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  line-height: 1.5;
}
.predstaveni {
  
  width: 700px;
  padding: 20px;
  text-align: left;
}

.predstaveni h2{
  color: #3498db;
  margin-bottom: 10px;
}

.odstavec{
  padding-bottom: 10px;
}

.xcmguspech{
  color: #3498db;
  margin-top: 10px;
}








  
</style>