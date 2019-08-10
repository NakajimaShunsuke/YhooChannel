<template>
  <v-container grid-list-xl style="min-height: 700px; color: #2196F3;">
    <h1 style="text-align: center;">映画.comランキング</h1>
    <v-layout column style="margin-top:20px; padding: 10px;">
      <epic-spinner v-if="loading" />
      <!-- ランキング表 -->
      <v-flex v-for="item of master_movie" :key="item.id">
        <ranking-card :ranking_data="item">
          <notice-dialog :movie_data="item" />
        </ranking-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import RankingCard from "@/components/RankingCard";
import Notice from "@/components/Notice";
import EpicSpinner from "@/components/EpicSpinners";
import axios from "axios";

import movie_json from "@/assets/movie";

export default {
  components: {
    "ranking-card": RankingCard,
    "notice-dialog": Notice,
    "epic-spinner": EpicSpinner
  },
  data() {
    return {
      loading: true,
      master_movie: []
    };
  },
  created() {
    // ランキング情報を格納
    axios
      .get("/app/movieranking")
      .then(response => (this.master_movie = response.data))
      .catch(() => {
        this.master_movie = movie_json;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
