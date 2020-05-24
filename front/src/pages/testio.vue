<template>
  <eb-page>
    <eb-navbar large largeTransparent title="test-io" eb-back-link="Back"></eb-navbar>
    <f7-block>
      <div>a</div>
      <f7-link @click="onClickTest">Test</f7-link>
    </f7-block>
  </eb-page>
</template>
<script>
export default {
  data() {
    return {
      io: null,
    }
  },
  created() {
    const action = {
      actionModule: 'a-socketio',
      actionComponent: 'io',
      name: 'instance',
    };
    this.$meta.util.performAction({ ctx: this, action }).then(io => {
      this.io = io;
      this.io.subscribe(
        '/a/base/sss',
        this.onMessage.bind(this),
        this.onSubscribed.bind(this), { scene: true },
      );
    });
  },
  methods: {
    onMessage() {},
    onSubscribed() {},
    onClickTest() {

    }
  }
}

</script>
