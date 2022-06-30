import { createStore } from "vuex";

// Appel du plugin axios
const axios = require("axios");

// Création de la baseURL de l'API
const instance = axios.create({
  baseURL: "https://kitsu.io/api/edge/",
});

export default createStore({
  state: {
    animeInfos: {
      titles: "",
      id: "",
      posterimage: "",
      averageRating: "",
      status: "",
      createdAt: "",
    },
    animes: [],
    anime: [],
    
    mangaInfos: {
      titles: "",
      id: "",
      posterimage: "",
      averageRating: "",
      status: "",
      createdAt: "",
    },
    mangas: [],
    manga: [],
  },
  getters: {},
  mutations: {
    animeInfos(state, animeInfos) {
      state.animeInfos = animeInfos;
    },
    LOAD_ANIMES(state, animes) {
      state.animes = animes;
    },
    LOAD_ANIME: function (state, anime) {
      state.anime = anime;
    },
    mangaInfos(state, mangaInfos) {
      state.mangaInfos = mangaInfos;
    },
    LOAD_MANGAS(state, manga) {
      state.mangas = manga;
    },
    LOAD_MANGA: function (state, manga) {
      state.manga = manga;
    },
  },
  actions: {
    loadAnimes: ({ commit }) => {
      instance
        .get("anime/")
        /*.then(function (response) {
          commit(response.data);
          console.log(response.data)
          this.list = response.data;
        })*/
        .then((response) => response.data)
        .then((animes) => {
          commit("LOAD_ANIMES", animes.data);
        })
        .catch(function (error) {
          return error;
        });
    } /*
    loadAnimes ({ commit }) {
      instance
          .get('anime')
          .then(response => response.data)
          .then(animes => {
              console.log(animes);
          commit(animes)
      })
  }*/,
    loadAnime: ({ commit }, anime) => {
      /* instance
      .get("anime/" + anime.id)
      .then(response => response.data)
      .then(anime => {
        commit('LOAD_ANIME', anime.data);
        console.log(anime.data)
      })
      .catch(function (error) {
        return error
      }); */
      instance
        .get("anime/" + anime.id)
        .then(function (response) {
          commit("LOAD_ANIME", response.data);
        })
        .catch(function (error) {
          return error;
        });
    },
    loadMangas: ({ commit }) => {
      console.debug("loadMangas");
      instance
        .get("manga/")
        .then((response) => response.data)
        .then((mangas) => {
          commit("LOAD_MANGAS", mangas.data);
        })
        .catch(function (error) {
          return error;
        });
    },
    loadManga: ({ commit }, manga) => {
      console.debug("loadManga");
      instance
        .get("manga/" + manga.id)
        .then(function (response) {
          commit("LOAD_MANGA", response.data);
        })
        .catch(function (error) {
          return error;
        });
    },
  },
  modules: {},
});
