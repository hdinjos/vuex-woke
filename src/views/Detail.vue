<template>
  <div>
    <h1>Details</h1>
    <div v-for="postJos in post" :key="postJos.id">
    <h2>{{postJos.title}}</h2>
    <p>{{postJos.body}}</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
     post: function(){
      return this.$store.getters.getUpPosts.filter(i=> i.id == this.$route.params.id)
    },
  },
  mounted(){
    this.$store.getters.getUpPosts;
    console.log(this.postJos);
  }
}
</script>