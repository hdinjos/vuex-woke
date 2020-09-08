<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>{{count}}</h1>
        <h1>{{doneTodos}}</h1>
        <h1>{{doneTodosCount}}</h1>
      </v-col>
      <v-col cols="12">
        <v-btn class="mx-2" fab dark color="indigo" @click="addCount">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn rounded color="orange" dark @click="countChangeByTen(parseInt(`${counted}`))">+ By Ten</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn rounded color="black" dark @click="clear">Clear</v-btn>
      </v-col>
      <v-col cols="12" v-for="post in getUpPosts" :key="post.id">
        <router-link :to="'/post/' + post.id">
        {{post.title}}
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState, mapGetters, mapMutations} from "vuex";
  export default {
    name: "HelloWorld",

    data: () => ({
      counted: 20
    }),
    methods: {
      // addCount: function(){
      //   this.$store.commit("countChange");
      // },
      // countByTen: function(){
      //   this.$store.commit("countChangeByTen", 10);
      // },
      // clear: function(){
      //   this.$store.commit("clearCount");
      // },
      ...mapMutations({
        // addCount: "countChange",
        countChangeByTen: "countChangeByTen",
        clear: "clearCount"
      }),
      addCount(){
        this.$store.dispatch("incrementAsync", {
          num: 10
        });
      },
      getPost(){
        this.$store.dispatch("posts");
      }
      // ...mapMutations(["countChangeByTen"])
    },
    computed: {
      // count: function(){
      //   return this.$store.getters.getCount
      // }
      ...mapState(["count"]),
      // doneTodos: function () {
      //   return this.$store.getters.doneTodos;
      // },
      // doneTodosCount: function(){
      //   return this.$store.getters.doneTodosCount;
      // },
      ...mapGetters(["doneTodos", "doneTodosCount", "getUpPosts"]),
      // postsTen: function(){
      //   let limitTen = this.getUpPosts.filter((val)=>val.id===1);
      //   return limitTen;
      // }
    },
    async mounted(){
      await this.getPost();
      await console.log(this.$store.state.posts);
    }
  }
</script>
