<template>
  <div>
    <v-btn color="orange darken-1" text dark @click.stop="dialog = true">お気に入り</v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card color="grey darken-1" dark>
        <v-card-title class="headline">{{movie_data.title}}</v-card-title>
        <v-card-text>{{movie_data.overview}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="orange darken-1" text @click="dialog = false">閉じる</v-btn>

          <v-btn color="orange darken-1" text @click="chatwork_notice(movie_data)">通知する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    movie_data: {
      type: Object
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    chatwork_notice: function(value) {
      axios.post("/app/chatworkapi", value).catch(error => {
        console.log(error);
      });
      this.dialog = false;
    }
  }
};
</script>