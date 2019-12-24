<template>
  <eb-page>
    <eb-navbar title="test" eb-back-link="Back"></eb-navbar>
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
