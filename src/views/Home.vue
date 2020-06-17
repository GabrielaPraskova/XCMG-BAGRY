<template>
  <div class="home">

    <header class="hlavicka">
    <div class="logo">
      <img src="src/assets/logo.png" alt="XCMG">
    </div>

    <ul class="menu">
      <router-link class="a" to="/stroje">Stroje</router-link>
      <router-link class="a" to="/pujcovna">Pjčovna</router-link>
      <router-link class="a" to="/servis">Servis</router-link>
      <router-link class="a" to="/spolecnost">O společnosti</router-link>
      <router-link class="a" to="/kontakt">Kontakt</router-link>
    </ul>
</header>
    <h1>HOME</h1>
  </div>
</template>

<script>
export default {};
</script>


<style>
.hlavicka {
  display: flex;
	justify-content: space-between;
	align-items: center;
  background-color: beige;
	color: #3498db;
  border-top: grey solid 1px;
  border-bottom: grey solid 1px;
  
}

.menu{
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
 
}

.a {
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
