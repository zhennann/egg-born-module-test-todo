<template>
  <eb-page>
    <eb-navbar large largeTransparent title="test" eb-back-link="Back"></eb-navbar>
    <f7-block strong class="no-padding-horizontal">
      <f7-treeview>
        <f7-treeview-item label="images" icon-f7="folder_fill">
          <f7-treeview-item label="avatar.png" icon-f7="images_fill" />
          <f7-treeview-item label="background.jpg" icon-f7="images_fill" />
        </f7-treeview-item>
        <f7-treeview-item label="documents" icon-f7="folder_fill">
          <f7-treeview-item label="cv.docx" icon-f7="document_text_fill" />
          <f7-treeview-item label="info.docx" icon-f7="document_text_fill" />
        </f7-treeview-item>
        <f7-treeview-item label=".gitignore" icon-f7="logo_github" />
        <f7-treeview-item label="index.html" icon-f7="document_text_fill" />
      </f7-treeview>
    </f7-block>
    <f7-block>
      <div class="test">{{message}}</div>
      <eb-button id="downlogs" @click="onClick">click</eb-button>
      <eb-button @click="onClickReload">reload</eb-button>
      <eb-button @click="onClickOpenViewIsolate">Open View Isolate</eb-button>
      <eb-button @click="onClickOpenViewSame">Open View Same</eb-button>
    </f7-block>
    <eb-list>
      <eb-list-item smartSelect title="select1" :smartSelectParams="{ openIn: 'page', closeOnSelect: true }">
        <eb-select name="select1" v-model="select1" :options="options1"></eb-select>
      </eb-list-item>
      <eb-list-item smartSelect title="select2" :smartSelectParams="{ openIn: 'page', closeOnSelect: true }">
        <eb-select name="select2" v-model="select2" :options="options2"></eb-select>
      </eb-list-item>
    </eb-list>
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
        select1: null,
        options1: [{ title: '男', value: '1' }, { title: '女', value: '2' }],
        select2: null,
        options2: [{ title: '水', value: '1' }, { title: '火', value: '2' }],
      };
    },
    beforeCreate() {

    },
    beforeDestroy() {

    },
    methods: {
      // onClick() {
      //   this.message = '2';
      // },
      onClick() {
        const app = this.$f7;
        const vm = app.calendar.create({
          openIn: "auto",
          inputEl: "#downlogs",
        });
        vm.open();
      },
      onClickReload() {
        return this.$api.post('todo/reload');
      },
      onClickOpenViewIsolate() {
        this.$view.navigate('/test/todo/testa', {
          target: '_view',
        });
      },
      onClickOpenViewSame() {
        this.$view.navigate('/test/todo/testa');
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
