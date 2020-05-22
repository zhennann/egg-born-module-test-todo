<template>
  <eb-page>
    <eb-navbar large largeTransparent title="test-io" eb-back-link="Back"></eb-navbar>
    <div>a</div>
    <f7-link @click="onClickTest">Test</f7-link>
  </eb-page>
</template>
<script>
export default {
  data() {
    return {
      socket: null,
    }
  },
  created() {
    const action = {
      actionModule: 'a-socketio',
      actionComponent: 'io',
      name: 'socket',
    };
    this.$meta.util.performAction({ ctx: this, action }).then(socket => {
      this.socket = socket;
      this.socket.on('connect', () => {
        console.log('---connect');
      })
      console.log(this.socket);
    });
  },
  methods: {
    onClickTest() {

    }
  }
}

</script>
