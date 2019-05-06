<template>
  <eb-page>
    <eb-navbar title="test" eb-back-link="Back"></eb-navbar>
    <f7-block>
      <f7-link @click="onClickTest">Test</f7-link>
      <br />
      <f7-link @click="onClickSelectAtoms">Select Atoms</f7-link>
    </f7-block>
  </eb-page>
</template>
<script>
import Vue from 'vue';
const ebPageContext = Vue.prototype.$meta.module.get('a-components').options.components.ebPageContext;
export default {
  mixins: [ ebPageContext ],
  components: {},
  data() {
    return {
      atomId: 8,
      atomIds: null,
    };
  },
  methods: {
    onClickTest() {
      this.$api.post('todo/progress').then(data => {
        const progressId = data.progressId;
        this.$view.dialog.progressbar({ progressId, title: 'This is a test' }).then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        });
      });
    },
    onClickSelectAtoms() {
      const url = '/a/base/atom/select';
      this.$view.navigate(url, {
        target: '_self',
        context: {
          params: {
            selectMode: 'single',
            selectedAtomId: this.atomId,
            selectedAtomIds: this.atomIds,
            atomClass: null,
          },
          callback: (code, data) => {
            if (code === 200) {
              this.atomIds = data.atomIds;
            }
          },
        },
      });
    },
  },
};

</script>
