<script>
import moment from 'moment'

export default {
  data() {
    return {
      anime: null,

    }
  },
  mounted() {
    this.$store.dispatch('loadAnimes')
  },
  computed: {
    animes() {
      return this.$store.state.animes;
    }
  },
  methods: {
    animeId(id) {
      this.$router.push("/anime/" + id);
      console.log(this.$route);
    }
  },
  formatDate(value) {
    if (value) {
      return moment(value).format('YYYYMMDD');
    }
  },
}
</script>

<template>
  <div>
    <h1>Anime List</h1>
    <v-card elevation="24">
      <div class="card" v-for="anime in animes" :key="anime.id" @click="animeId(anime.id)">
        <h2>
          {{ anime.attributes.canonicalTitle }}
        </h2>
        <img :src="anime.attributes.posterImage.small" alt="Photo d'illustration du manga.">
        <h4>
          Date
        </h4>
        <p>
          {{ anime.attributes.createdAt }}
        </p>
        <h4>
          Synopsis
        </h4>
        <p class="twohundred-chars">
          {{ anime.attributes.synopsis }}
        </p>
        <h4>
          Rating
        </h4>
        <p>
          {{ anime.attributes.averageRating }}
        </p>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.twohundred-chars {
  width: 100ch auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
