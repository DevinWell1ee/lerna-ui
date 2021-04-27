<template>
  <div>
    <span>{{ label }}变更ddddggg</span>

    <input type="text" />
  </div>
</template>

<script>
var _ = require("lodash");

export default {
  name: "eInput",
  props: {
    label: {
      type: String,
      default: () => "默认label",
    },
  },
  created() {
    console.log(_.map([1, 2, 3], (o) => o * 2));
    console.log("@@@");
  },
};
</script>

<style lang="scss" scoped></style>
