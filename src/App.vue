<template>
  <div class="app">
    <div class="nav">
      <div class="prvniMenu">
        <div class="hlavickaKontakt">
          <div class="telefon">
            <v-icon color="#FFEB3B">mdi-phone</v-icon>+420 733 798 032
          </div>
          <div class="email">
            <v-icon color="#FFEB3B">mdi-email</v-icon>xcmg@xcmg.com
          </div>
        </div>

        <div class="hlavickaServis">
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
          <div class="menuLink">
            Stroje
            <div class="podmenu">
              <router-link class="menuLink" to="/Konfigurator/bagr">Kolové bagry</router-link>
              <router-link class="menuLink" to="/Konfigurator/rypadlo">Rypadla</router-link>
            </div>
          </div>
            <router-link class="menuLink" to="/pujcovna">Půjčovna</router-link>
            <router-link class="menuLink" to="/servis">Servis</router-link>
            <router-link class="menuLink" to="/spolecnost">O společnosti</router-link>
            <router-link class="menuLink" to="/kontakt">Kontakt</router-link>
        </ul>
      </div>
    </div>

    <div class="router">
      <router-view />
    </div>

    <div class="copy">
        copyright &copy; {{ new Date().getFullYear() }} XCMG/GM
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.kontejnerRodic {
 flex-wrap: wrap;
}

.kontejnerDite {
  flex-basis: 700px;
}

.nav {
  flex: 0 0 121px;
}

.nav a {
  font-weight: bold;
  color: #3498db;
}

.nav a:hover {
  color: #16405c;
}

.nav a.router-link-exact-active {
  color: #16405c;
}

.prvniMenu {
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.druheMenu {
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: white;
}

.logo{
  flex: 0 0 208px;
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
  z-index: 99;
}

.menuLink:hover > .podmenu {
  display: block;
}

.telefon {
  padding-right: 20px;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
  align-items: center;
}

.menuLink {
  display: block;
  position: relative;
  padding: 20px;
  color: #3498db;
  text-decoration: none;
  white-space: nowrap;
  text-align: left;
  font-weight: bold;
  justify-content: center;
  flex:1
}

.menuLink:hover {
  background-color: white;
  color: #16405c;
}

.router {
  flex: 1 0 0;
  overflow: auto;
}

h1,
h2,
h3 {
  color: #3498db;
}


.hlavickaKontakt,
.servisniHodiny {
  display: flex;
  margin: 5px;
  padding: 10px;
}


.copy {
  flex: 0 0 39;
  background-color: #eeee;
  text-align: center;
  padding: 5px;
}
</style>
