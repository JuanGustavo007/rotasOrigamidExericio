<template>
  <div>
    <div class="container-fluid">
      <div class="home container d-flex justify-content-between">
        <div class="logo">
          <router-link to="/" class="techno">Techno</router-link>
        </div>
        <div class="rotas d-flex gap-5">
          <router-link :to="{ name: 'cursos' }" class="cursos"
            >Cursos</router-link
          >
          <router-link :to="{ name: 'contato' }" class="contato"
            >Contato</router-link
          >
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <h2>{{ dados.titulo }}</h2>
          <p>{{ dados.descricao }}</p>
        </div>
        <div class="col">
          <ul
            v-for="(d, index) in dados.cursos"
            :key="index"
            class="d-flex flex-column"
          >
            <router-link
              :to="{ name: 'curso', params: { curso: d.id } }"
              class="tema rounded"
              ><span
                >{{ d.nome }} | {{ d.totalAulas }} | {{ d.horas }}</span
              ></router-link
            >

            <!-- <h2></h2> -->

            <p class="mt-2">{{ d.descricao }}</p>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-color: rgb(99, 99, 206);
  padding: 20px;
}
.cursos {
  font-weight: bold;
  color: black;
  text-decoration: none;
  font-size: 1.7rem;
}
.router-link-exact-active {
  color: yellow;
}
.tema {
  color: black;
  list-style: none;
  text-decoration: none;
  margin-left: 20px;
  text-align: left;
  padding: 10px;
  font-size: 20px;
  background-color: beige;
  border: 0px black;
  border-style: solid;
  margin: 0;
  font-family: "Lora", serif;
  word-spacing: 5px;
}
.tema:hover {
  background-color: bisque;
}
.techno {
  font-size: 1.8rem;
  color: black;
  text-decoration: none;
}
h3 {
  margin-bottom: 0;
  align-self: center;
}
span {
  margin-left: 20px;
}
p {
  font-family: "Open Sans", sans-serif;
}
h3 {
  margin: 0;
}
.rotas {
  display: flex;
  align-items: center;
}
.contato {
  font-weight: bold;
  color: #212529;
  text-decoration: none;
  font-size: 1.7rem;
}
</style>
<script>
export default {
  name: "CursosView",
  data() {
    return {
      dados: "",
    };
  },
  methods: {
    getDados() {
      fetch("http://localhost:3000/cursos")
        .then((resposta) => resposta.json())
        .then((resposta) => (this.dados = resposta));
    },
  },
  created() {
    this.getDados();
  },
  watch: {
    $route: "getDados",
  },
};
</script>
