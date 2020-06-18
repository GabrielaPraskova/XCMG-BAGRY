
<template>
  <div id="app">
    <!-- <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
      rel="stylesheet"
    />
    </head>-->

    <div id="nav">
      <div class="prvniMenu">
        <ul class="kontakt">
          <li class="k">Kontakt</li>
          <li class="telefon">
            <v-icon color="black">mdi-phone</v-icon>+420 733 798 032
          </li>
          <li class="email">
            <v-icon color="black">mdi-email</v-icon>xcmg@servis.com
          </li>
        </ul>

        <div class="servis">
          <li class="servisniHodiny">Servisní hodiny (9:00 - 17:30)</li>
        </div>
      </div>

      <div class="druheMenu">
        <div class="logo">
          <router-link to="/">
            <img src="/logo.png" alt="XCMG" />
          </router-link>
        </div>

        <ul class="menu">
          <router-link id="a" to="/stroje">Stroje</router-link>
          <router-link id="a" to="/pujcovna">Půjčovna</router-link>
          <router-link id="a" to="/servis">Servis</router-link>
          <router-link id="a" to="/spolecnost">O společnosti</router-link>
          <router-link id="a" to="/kontakt">Kontakt</router-link>
        </ul>
      </div>
    </div>

  

    <router-view />
  </div>
</template>

<style>
.prvniMenu {
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-top: grey solid 1px;
  border-bottom: grey solid 1px;
  align-items: center;
}

.druheMenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-top: grey solid 1px;
  border-bottom: grey solid 1px;
}

.kontakt {
  display: flex;
  list-style: none;
  margin: 5px;
  padding: 0px;
}

.servisniHodiny {
  list-style: none;
  margin: 5px;
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

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #3498db;
}

#nav a.router-link-exact-active {
  color: blue;
}

h1,
h2,
h3{
  color:#3498db
}
</style>
