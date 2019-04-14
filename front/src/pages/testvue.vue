<template>
  <eb-page>
    <eb-navbar title="test" eb-back-link="Back"></eb-navbar>
  </eb-page>
</template>
<script>
import Vue from 'vue';
const ebPageContext = Vue.prototype.$meta.module.get('a-components').options.components.ebPageContext;
export default {
  mixins: [ ebPageContext ],
  components: {},
  data() {
    return {};
  },
  methods: {

  },
};

</script>
