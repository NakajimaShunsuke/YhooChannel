<template>
  <v-container grid-list-xl style="min-height: 700px; color:#FF9800;">
    <h1>TV番組検索</h1>

    <!-- 番組検索 -->
    <v-col cols="12" style="padding-bottom:0">
      <v-text-field label="Search" placeholder="番組名" outlined color="orange" dark v-model="search"></v-text-field>
    </v-col>
    <v-col cols="12" style="padding-top:0">
      <v-btn block color="orange" dark @click="program_search = search">検索</v-btn>
    </v-col>

    <!-- 検索結果 -->
    <v-col cols="12">
      <program-table :desserts="program_search" />
    </v-col>
    <epic-spinner v-if="loading" />
  </v-container>
</template>

<script>
import axios from "axios";

import SimpleTable from "@/components/SimpleTable";
import EpicSpinner from "@/components/EpicSpinners";

import program_json from "@/assets/program";

export default {
  components: {
    "program-table": SimpleTable,
    "epic-spinner": EpicSpinner
  },
  data() {
    return {
      loading: false,
      program_data: [],
      search: ""
    };
  },
  computed: {
    // TV番組検索
    program_search: {
      get: function() {
        return this.program_data;
      },
      set: function(value) {
        this.loading = true;
        axios
          .post("/app/programsearch", { search_value: value })
          .then(response => (this.program_data = response.data))
          .catch(() => {
            this.program_data = program_json;
          })
          .finally(() => (this.loading = false));
      }
    }
  }
};
</script>
