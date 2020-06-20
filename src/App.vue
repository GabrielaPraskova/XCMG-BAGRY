
<template>
<div id="app">
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
      rel="stylesheet"
    />
  </head>

  <div id="nav">
    <div class="prvniMenu">
      <div class="kontakt">
        <div class="telefon">
          <v-icon color="#FFEB3B">mdi-phone</v-icon>+420 733 798 032
        </div>
        <div class="email">
          <v-icon color="#FFEB3B">mdi-email</v-icon>xcmg@servis.com
        </div>
      </div>

      <div class="servis">
        <div class="servisniHodiny">Servisní hodiny (8:00 - 17:00)</div>
      </div>
    </div>

    <div class="druheMenu">
      <div class="logo">
        <router-link to="/">
          <img src="/logo.png" alt="XCMG" />
        </router-link>
      </div>

      <ul class="menu">
        <div class="menuLink" >
          Stroje
          <div class="podmenu">
            <router-link class="menuLink" to="/Konfigurator1">Kolové bagry</router-link>
            <router-link class="menuLink" to="/Konfigurator2">Rypadla</router-link>
          </div>
        </div>
        <router-link class="menuLink" to="/pujcovna">Půjčovna</router-link>
        <router-link class="menuLink" to="/servis">Servis</router-link>
        <router-link class="menuLink" to="/spolecnost">O společnosti</router-link>
        <router-link class="menuLink" to="/kontakt">Kontakt</router-link>
      </ul>
    </div>
  </div>

  <router-view />
</div>
</template>

<style scoped>
.prvniMenu {
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-top: grey solid 1px;
}

.druheMenu {
  display: flex;
  justify-content: space-between;
  flex-shrink: 1;
  text-align: center;
  background-color: white;
  /* border-top: white solid 1px;
  border-bottom: white solid 1px; */
}

.kontakt,
.servisniHodiny {
  display: flex;
  margin: 5px;
  padding: 0px;
}

.kontakt {
  padding: 10px
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
}

.menuLink {
  display: block;
  position: relative;
  padding: 20px 55px;
  color: #3498db;
  text-decoration: none;
  white-space: nowrap;
  text-align: left;
}

.menuLink:hover {
  background-color: white;
  color: #16405C;

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

#nav a:hover {
  color: #16405C
}

#nav a.router-link-exact-active {
  color: #16405C;
}

h1,
h2,
h3 {
  color: #3498db;
}

.logo a,
.logo img {
  height: 100%;
}

.podmenu {
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  border: 1px solid white;
  background-color: white;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
}

.menuLink:hover > .podmenu {
  display: block;
}

.telefon {
  padding-right: 20px;
}
</style>
