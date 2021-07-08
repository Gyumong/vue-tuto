<!-- @format -->

<template>
  <div>
    <h2>Filter LearnVue Articles</h2>
    <input type="text" v-model="query" />
    {{ query }}
    <button @click="reset">Reset</button>
    <search-results :query="query" />
  </div>
</template>

<script>
import { ref } from "vue";
import SearchResults from "./SearchResults.vue";
export default {
  components: {
    SearchResults,
  },
  setup() {
    const query = ref("");
    const reset = () => {
      query.value = "";
    };
    return {
      query,
      reset,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
