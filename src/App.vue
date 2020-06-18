<template>
  <div id="app">
    <div id="nav">
      <div class="prvniRadek">
        <ul class="kontakt">
          <li class="k">Kontakt</li>
          <li class="telefon">+420 733 798 032</li>
          <li class="email">xcmg@servis.com</li>
        </ul>

        <div class="servisniHodiny">
          <li class="servisniHodiny">Servisní hodiny (9:00 - 17:30)</li>
        </div>
      </div>

      <div class="druhyRadek">
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
.prvniRadek {
  display: flex;
  justify-content: space-between;
  background-color: silver;
  color: #3498db;
  border-top: grey solid 1px;
  border-bottom: grey solid 1px;
}

.druhyRadek {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: beige;
  color: #3498db;
  border-top: grey solid 1px;
  border-bottom: grey solid 1px;
}

.kontakt {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: blue;
}
</style>
