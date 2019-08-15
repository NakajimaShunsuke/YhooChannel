<template lang="">
  <div>
    <v-col cols="12" style="padding-bottom:0">
      <v-text-field label="Search" placeholder="番組名" outlined color="orange" dark v-model="search"></v-text-field>
    </v-col>
    <v-col cols="12" style="padding-top:0">
      <v-btn block color="orange" dark @click="program_search(search)">検索</v-btn>
    </v-col>
  </div>
</template>

<script>
import axios from "axios";
import program_json from "@/assets/program";

export default {
  data() {
    return {
      search_result: [],
      search: ""
    };
  },
  methods: {
    program_search(value) {
      axios
        .post("/app/programsearch", { search_value: value })
        .then(response => this.$emit("program_data", response.data))
        .catch(() => {
          this.$emit("program_data", program_json);
        });
    }
  }
  // computed: {
  //   // TV番組検索
  //   program_search: {
  //     get: function() {
  //       return this.program_data;
  //     },
  //     set: function(value) {
  //       this.loading = true;
  //       axios
  //         .post("/app/programsearch", { search_value: value })
  //         .then(response => (this.program_data = response.data))
  //         .catch(() => {
  //           this.program_data = program_json;
  //         })
  //         .finally(() => (this.loading = false));
  //     }
  //   }
  // }
};
</script>