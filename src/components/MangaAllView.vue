<script>
export default {
  data() {
    return {
      manga: null,

    }
  },
  mounted() {
    this.$store.dispatch('loadMangas')
  },
  computed: {
    mangas() {
      return this.$store.state.mangas;
    }
  },
  methods: {
    mangaId(id) {
      this.$router.push("/manga/" + id);
      console.log(this.$route);
    }
  },
}
</script>

<template>
  <div>
    <h1>Manga List</h1>
    <div class="card" v-for="manga in mangas" :key="manga.id" @click="mangaId(manga.id)">
      <h2>
        {{ manga.attributes.canonicalTitle }}
      </h2>
      <img :src="manga.attributes.posterImage.small" alt="Photo d'illustration du manga.">
      <h4>
        Date
      </h4>
      <p>
        {{ manga.attributes.createdAt }}
      </p>
      <h4>
        Synopsis
      </h4>
      <p class="twohundred-chars">
        {{ manga.attributes.synopsis }}
      </p>
      <h4>
        Rating
      </h4>
      <p>
        {{ manga.attributes.averageRating }}
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

.twohundred-chars {
  width: 100ch auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
