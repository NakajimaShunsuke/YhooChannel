<template>
  <v-container grid-list-xl style="min-height: 700px; color:#FF9800;">
    <h1>TV番組検索</h1>

    <!-- 番組検索 -->
    <program-search v-on:program_data="program_data = $event" />

    <!-- 検索結果 -->
    <v-col cols="12">
      <program-table :desserts="program_data" v-on:column_data="dialog_open($event)" />
    </v-col>

    <!-- chatworkに通知するかを問うダイアログ -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card color="grey darken-1" dark>
        <v-card-title class="headline">chatwork通知</v-card-title>

        <v-card-text>
          <p>番組名： {{ dialog_data.title }}</p>
          <p>時間帯： {{ dialog_data.date }}</p>
          <p>放送局： {{ dialog_data.tvStation }}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="orange darken-1" text @click="dialog = false">閉じる</v-btn>

          <v-btn color="orange darken-1" text @click="chatwork_notice(dialog_data)">通知</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";

import ProgramTable from "@/components/ProgramTable";
import ProgramSearch from "@/components/ProgramSearch";

export default {
  components: {
    "program-table": ProgramTable,
    "program-search": ProgramSearch
  },
  data() {
    return {
      program_data: [],
      dialog: false,
      dialog_data: []
    };
  },
  methods: {
    // ダイアログを開く
    dialog_open(value) {
      this.dialog = true;
      this.dialog_data = value;
    },
    // chatworkに通知
    chatwork_notice: function(value) {
      axios.post("/app/tvnotice", value);
      this.dialog = false;
    }
  }
};
</script>
