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
          <div class="g-5">
            <h1>Sobre a Techno</h1>
            <p class="mb-5 mt-4">Cursos Online de UX/UI Design e Front-End</p>
            <!-- <router-link>Ir</router-link> -->
            <router-link :to="{ name: 'cursos' }" class="botao-cursos"
              >Cursos</router-link
            >
          </div>
          <div class="mt-5">
            <h1>avaliacoes</h1>
            <ul v-for="(d, index) in dados" :key="index" class="gap-5">
              <li class="mt-5">
                <h2>{{ d.nome }}</h2>
              </li>
              <li class="mt-3">{{ d.descricao }}</li>
            </ul>
          </div>
        </div>
        <div class="col-7">
          <img src="@/assets/desenho.svg" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      dados: "",
    };
  },
  components: {},
  methods: {
    getDados() {
      fetch("http://localhost:3000/home")
        .then((resposta) => resposta.json())
        .then((resposta) => (this.dados = resposta.avaliacoes));
    },
  },
  created() {
    this.getDados();
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: rgb(99, 99, 206);
  padding: 20px;
}
li {
  list-style: none;
}
ul {
  padding: 0;
}
.botao-cursos {
  background-color: #41b07e;
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
}
.cursos {
  font-weight: bold;
  color: #212529;
  text-decoration: none;
  font-size: 1.7rem;
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
p {
  font-family: "Open Sans", sans-serif;
}
.techno {
  font-size: 1.8rem;
  color: black;
  text-decoration: none;
}
</style>
