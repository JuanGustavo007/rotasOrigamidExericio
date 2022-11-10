<template>
  <div>
    <h1 class="mb-3">{{ dados.nome }}</h1>
  </div>
  <div>
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${dados.youtube} `"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

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
      fetch(`http://localhost:3000/aula/${this.$route.params.materia}`)
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

<style scoped></style>
