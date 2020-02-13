<template>
  <eb-page>
    <eb-navbar large largeTransparent title="test-c" eb-back-link="Back"></eb-navbar>
    <div>c</div>
    <f7-link @click="onClickClose">Close</f7-link>
  </eb-page>
</template>
<script>
export default {
  methods: {
    onClickClose() {
      this.$view.close();
    }
  }
}

</script>
