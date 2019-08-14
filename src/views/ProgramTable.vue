<template>
  <v-container grid-list-xl style="min-height: 700px; color:#FF9800;">
    <h1>TV番組検索</h1>

    <!-- 番組検索 -->
    <v-col cols="12" sm="6" md="3" style="padding-bottom:0">
      <v-text-field label="Search" placeholder="番組名" outlined color="orange" dark></v-text-field>
    </v-col>
    <v-col cols="12" style="padding-top:0">
      <v-btn block color="orange" dark>検索</v-btn>
    </v-col>

    <v-col cols="12">
      <program-table />
    </v-col>
  </v-container>
</template>

<script>
import SimpleTable from "../components/SimpleTable";

export default {
  components: {
    "program-table": SimpleTable
  }
};
</script>
