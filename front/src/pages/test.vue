<template>
  <eb-page>
    <eb-navbar title="test" eb-back-link="Back"></eb-navbar>
    <f7-block>
      <div class="test">{{message}}</div>
      <eb-button @click="onClick"></eb-button>
    </f7-block>
  </eb-page>
</template>
<script>
// install
function install(_Vue) {
  const Vue = _Vue;
  return {
    components: {},
    data() {
      return {
        message: '1',
      };
    },
    beforeCreate() {

    },
    beforeDestroy() {

    },
    methods: {
      onClick() {
        this.message = '2';
      },
    },
  };
}

// export
export default {
  install,
};

</script>
<style scoped>
.test {
  color: red;
}

</style>
