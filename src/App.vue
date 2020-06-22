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
              <router-link class="menuLink" to="/Konfigurator2/bagr"
                >Kolové bagry</router-link
              >
              <router-link class="menuLink" to="/Konfigurator2/rypadlo"
                >Rypadla</router-link
              >
            </div>
          </div>
          <router-link class="menuLink" to="/pujcovna">Půjčovna</router-link>
          <router-link class="menuLink" to="/servis">Servis</router-link>
          <router-link class="menuLink" to="/spolecnost"
            >O společnosti</router-link
          >
          <router-link class="menuLink" to="/kontakt">Kontakt</router-link>
        </ul>
      </div>
    </div>

    <div class="router">
      <router-view />
    </div>

    <footer class="paticka">
      <ul class="patickaKontakt">
        <li class="patickaKontaktNadpis">Kontakty</li>
        <li>Dolní 141</li>
        <li>582 91 Světlá nad Sázavou</li>
        <li>733 798 032</li>
        <li>xcmg@servis.com</li>
      </ul>

      <ul class="patickaServis">
        <li class="patickaServisNadpis">Servisní hodiny</li>
        <li>Po - Pá: 8 - 17</li>
        <li>nebo dle dohody</li>
      </ul>

      <!-- <ul class="ikonky">
        <li class="i"></li>
        <li class="facebook">
          <a href="https://www.facebook.com/zetor" target="_blank"
            ><img class="obrazekFb" src="/fb.png"
          /></a>
        </li>
        <li class="linked">
          <a
            href="https://www.linkedin.com/company/zetor-tractors-a-s-?trk=nav_account_sub_nav_company_admin"
            target="_blank"
            ><span class="icon icon-linkedin"></span
          ></a>
        </li>
        <li class="youtube">
          <a
            href="https://www.youtube.com/channel/UCMNdnC74YttvjNuTzkYoigQ"
            target="_blank"
            ><span class="icon icon-youtube"></span
          ></a>
        </li>
      </ul> -->
      
    </footer>
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
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  flex-shrink: 1;
  text-align: center;
  background-color: white;
  /* border-top: white solid 1px;
    border-bottom: white solid 1px; */
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
  font-weight: bold;
}

.menuLink:hover {
  background-color: white;
  color: #16405c;
}

.router {
  flex: 1 0 0;
}

h1,
h2,
h3 {
  color: #3498db;
}

.paticka {
  display: flex;
  flex: 0 0 147px;
  list-style: none;
  background-color: white;
}

.copy {
  flex: 0 0 39;
  background-color: #3498db;
  padding: 10px;
}

/* .obrazekFb {
  max-width: 5%;
  border-radius: 50%;
} */

.hlavickaKontakt,
.servisniHodiny {
  display: flex;
  margin: 5px;
  padding: 0px;
}

.hlavickaKontakt {
  padding: 10px;
}

.patickaKontakt,
.patickaServis {
  list-style: none;
  text-align: left;
  font-size: 15px;
  padding: 10px;
}

.patickaKontakt {
  margin-right: 50px;
  margin-left: 50px;
  
}

.patickaKontaktNadpis,
.patickaServisNadpis {
  margin-bottom: 15px;
  padding: 10px 0;
  font-weight: 600;
  color: #3498db;
}
</style>
