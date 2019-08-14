<template>
  <div>
    <!-- 検索結果を表示する表 -->
    <v-simple-table dark style="color:orange;">
      <thead>
        <tr>
          <th class="text-left">番組名</th>
          <th class="text-left">時間帯</th>
          <th class="text-left">放送局</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.id" @click.stop="dialog_open(item)">
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td style="min-width:75px">{{ item.tvStation }}</td>
        </tr>
      </tbody>
    </v-simple-table>

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
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: {
    desserts: {
      type: Array
    }
  },
  data() {
    return {
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