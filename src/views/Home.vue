<template>
  <div class="home">
    <header class="prvniRadek">
     
      <div class="logo">
        <img src="logo.png" alt="XCMG"/>
      </div>

      <ul class="menu">
        <router-link id="a" to="/stroje">Stroje</router-link>
        <router-link id="a" to="/pujcovna">Pjčovna</router-link>
        <router-link id="a" to="/servis">Servis</router-link>
        <router-link id="a" to="/spolecnost">O společnosti</router-link>
        <router-link id="a" to="/kontakt">Kontakt</router-link>
      </ul>
    </header>
    <h1>HOME</h1>
  </div>
</template>

<script>
export default {};
</script>


<style>
.prvniRadek {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: beige;
  color: #3498db;
  border-top: grey solid 1px;
  border-bottom: grey solid 1px;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

#a {
  display: block;
  padding: 15px 50px;
  color: #3498db;
  text-decoration: none;
}

a:hover {
  background-color: grey;
  color: #3498db;
}
</style>
