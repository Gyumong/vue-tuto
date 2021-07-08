<!-- @format -->

<template>
  <div>
    <h1>Hi Home</h1>
    <h2>{{ msg }}</h2>
    <div>
      {{ list }}
      <input type="button" @click="handleTest" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import MUTATIONS from "../store/modules/reservation/mutation";

const { mapGetters, mapMutations } = createNamespacedHelpers("reservation");
export default {
  name: "TestVuex",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters({
      list: "reservations",
    }),
  },
  methods: {
    ...mapMutations({
      setList: MUTATIONS.SET_RESERVATIONS,
    }),
    handleTest() {
      // mutation 함수 호출해서 list 배열에 아무 데이터나 넣어주기
      this.setList(["oh", "hi", "yo"]);
    },
  },
};
</script>
