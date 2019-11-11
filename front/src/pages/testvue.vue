<template>
  <eb-page>
    <eb-navbar title="test" eb-back-link="Back"></eb-navbar>
    <f7-block>
      <div class="test">test red</div>
      <f7-link @click="onClickTest">Test</f7-link>
      <br />
      <f7-link @click="onClickSelectSingleAtom">Select Single Atom</f7-link>
      <div>{{atomId}}</div>
      <br />
      <f7-link @click="onClickSelectAtoms">Select Atoms</f7-link>
      <div>{{atomIds}}</div>
      <img src="../assets/img/user.png" />
    </f7-block>
    <f7-list>
      <f7-list-group>
        <eb-list-item group-title title="A"></eb-list-item>
        <eb-list-item title="A1">
          <f7-list-group>
            <eb-list-item group-title title="AA"></eb-list-item>
            <eb-list-item title="AA1"></eb-list-item>
            <eb-list-item title="AA2"></eb-list-item>
          </f7-list-group>
        </eb-list-item>
        <eb-list-item title="A2"></eb-list-item>
      </f7-list-group>
      <f7-list-group>
        <eb-list-item group-title title="B"></eb-list-item>
        <eb-list-item title="B1">
          <f7-list-group>
            <eb-list-item group-title title="BB"></eb-list-item>
            <eb-list-item title="BB1"></eb-list-item>
            <eb-list-item title="BB2"></eb-list-item>
          </f7-list-group>
        </eb-list-item>
        <eb-list-item title="B2"></eb-list-item>
      </f7-list-group>
      <f7-list-group>
        <eb-list-item group-title title="C"></eb-list-item>
        <eb-list-item title="C1"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
        <eb-list-item title="C2"></eb-list-item>
      </f7-list-group>
    </f7-list>
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
      atomId: null,
      atomIds: null,
    };
  },
  beforeCreate() {

  },
  beforeDestroy() {

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
    onClickSelectSingleAtom() {
      const url = '/a/base/atom/select';
      this.$view.navigate(url, {
        target: '_self',
        context: {
          params: {
            selectMode: 'single',
            selectedAtomId: this.atomId,
            atomClass: {
              module: 'a-cms',
              atomClassName: 'article',
            },
            where: {
              'f.sticky': 1,
            },
          },
          callback: (code, selectedAtom) => {
            if (code === 200) {
              this.atomId = selectedAtom && selectedAtom.atomId;
            }
          },
        },
      });
    },
    onClickSelectAtoms() {
      const url = '/a/base/atom/select';
      this.$view.navigate(url, {
        target: '_self',
        context: {
          params: {
            selectMode: 'multiple',
            selectedAtomIds: this.atomIds,
            atomClass: null,
          },
          callback: (code, selectedAtoms) => {
            if (code === 200) {
              this.atomIds = selectedAtoms && selectedAtoms.map(item => item.atomId);
            }
          },
        },
      });
    },
  },
};

</script>
