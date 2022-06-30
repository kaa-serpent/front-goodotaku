<script>
import axios from 'axios'

export default {
  data() {
    return {
      currentManga: null,
    }
  },
  mounted() {
    axios
      .get('https://kitsu.io/api/edge/manga/' + this.$route.params.id)
      .then((response) => {
        this.currentManga = response.data.data;
        console.log(response.data)
      })
  },
  computed: {
    manga() {
        console.log("manga computed");
      return this.$store.state.manga;
    }
  },
  methods: {
  },
}
</script>

<template>
  <div>
    <h1 v-if="currentManga">{{ currentManga.attributes.canonicalTitle }}</h1>
    <div class="card">
      <img v-if="currentManga" :src="currentManga.attributes.posterImage.small" alt="Photo d'illustration du manga.">
      <h4>
        Date
      </h4>
      <p v-if="currentManga">
        {{ currentManga.attributes.createdAt }}
      </p>
      <h4>
        Synopsis
      </h4> 
      <p v-if="currentManga">
        {{ currentManga.attributes.synopsis }}
      </p>
      <h4>
        Rating
      </h4>
      <p v-if="currentManga">
        {{ currentManga.attributes.averageRating }}
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
