<template>
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
        <h1>{{ dados.nome }}</h1>
        <p>{{ dados.descricao }}</p>
        <h3>Aulas</h3>
        <ul
          v-for="(d, index) in dados.aulas"
          :key="index"
          class="d-flex flex-column mt-3"
        >
          <router-link
            :to="{ name: 'materia', params: { materia: d.id } }"
            class="tema"
            >{{ d.nome }}
          </router-link>
        </ul>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-color: rgb(99, 99, 206);
  padding: 20px;
}

.techno {
  font-size: 1.8rem;
  color: black;
  text-decoration: none;
}
.cursos {
  font-weight: bold;
  color: yellow;
  text-decoration: none;
  font-size: 1.7rem;
}
.rotas {
  display: flex;
  align-items: center;
}
h3 {
  margin: 0;
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
ul {
  padding: 0;
}
.router-link-exact-active {
  background-color: rgba(0, 128, 0, 0.5);
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
  name: "CursoView",
  data() {
    return {
      dados: "",
    };
  },
  methods: {
    getDados() {
      fetch(`http://localhost:3000/curso/${this.$route.params.curso}`)
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
