<script>
import axios from 'axios'

export default {
  /*data() {
    return {
      list: [this.$store.dispatch("loadAnimes")],
      post: {
        id:"",
      }
    };
  },*/
  data() {
    return {
      currentAnime: null,
    }
  },
  mounted() {
    /* 		this.id = this.$route.params.id;
        this.$store.dispatch('loadAnime', { id: this.$route.params.id })
        console.log(this.$store.dispatch('loadAnime', { id: this.$route.params.id })) */
    axios
      .get('https://kitsu.io/api/edge/anime/' + this.$route.params.id)
      .then((response) => {
        this.currentAnime = response.data.data;
        console.log(response.data)
      })
  },
  computed: {
    anime() {
      return this.$store.state.anime;
    }
  },
  methods: {
  },
}
</script>

<template>
  <div>
    <h1 v-if="currentAnime">{{ currentAnime.attributes.canonicalTitle }}</h1>
    <div class="card">
      <img v-if="currentAnime" :src="currentAnime.attributes.posterImage.small" alt="Photo d'illustration du manga.">
      <h4>
        Date
      </h4>
      <p v-if="currentAnime">
        {{ currentAnime.attributes.createdAt }}
      </p>
      <h4>
        Synopsis
      </h4>
      <p v-if="currentAnime">
        {{ currentAnime.attributes.synopsis }}
      </p>
      <h4>
        Rating
      </h4>
      <p v-if="currentAnime">
        {{ currentAnime.attributes.averageRating }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 10px 5px 5px #c7c7c741;
  width: auto;
  margin-bottom: 2rem;
  border: 1px rgba(0, 0, 0, 0.281) solid;
}
</style>
