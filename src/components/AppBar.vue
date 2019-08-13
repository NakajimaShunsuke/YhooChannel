<template>
  <div>
    <!-- ヘッダー -->
    <v-app-bar color="orange" dense dark elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>AdEntertainer</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- ナビゲーション -->
    <v-navigation-drawer v-model="drawer" absolute temporary color="orange" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>コンテンツ一覧</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.url" style="color:white; text-decoration: none;">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,

      // ナビコンテンツ
      items: [
        { title: "Home", icon: "dashboard", url: "/" },
        { title: "MovieRanking", icon: "question_answer", url: "/movieranking" }
      ]
    };
  }
};
</script>