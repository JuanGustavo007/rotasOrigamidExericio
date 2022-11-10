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
      <div class="indos">
        <h1>{{ dados.titulo }}</h1>
        <p>{{ dados.descricao }}</p>
        <ul>
          <li>Telefone: {{ dados.contato.telefone }}</li>
          <li>Email: {{ dados.contato.email }}</li>
          <li>Endereço: {{ dados.contato.endereco }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContatoView",
  data() {
    return {
      dados: "",
    };
  },
  methods: {
    pegarDados() {
      fetch("http://localhost:3000/contato")
        .then((resposta) => resposta.json())
        .then((resposta) => (this.dados = resposta));
    },
  },
  created() {
    this.pegarDados();
  },
};
</script>
<style scoped>
.container-fluid {
  background-color: rgb(99, 99, 206);
  padding: 20px;
}
.cursos {
  font-weight: bold;
  color: #212529;
  text-decoration: none;
  font-size: 1.7rem;
}
.techno {
  font-size: 1.8rem;
  color: black;
  text-decoration: none;
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
li {
  list-style: none;
}
ul {
  padding: 0;
}
.router-link-exact-active {
  color: yellow;
}
p {
  font-family: "Open Sans", sans-serif;
}
</style>
