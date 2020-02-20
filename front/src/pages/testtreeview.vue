<template>
  <eb-page>
    <eb-navbar large largeTransparent title="test-treeview" eb-back-link="Back"></eb-navbar>
    <eb-treeview :options="treeOptions" :onPerform="onPerform">
      <div slot="content" slot-scope="{node}">{{`- ${node.id}`}}</div>
    </eb-treeview>
  </eb-page>
</template>
<script>
export default {
  data() {
    return {
      treeOptions: {
        loadChildren: node => {
          return this.loadChildren(node);
        },
      },
    };
  },
  methods: {
    loadChildren(node) {
      const roleId = node ? node.id : this.roleIdStart;
      return this.$api.post('/a/baseadmin/role/children', { roleId, page: { size: 0 } })
        .then(data => {
          const list = data.list.map(item => {
            const node = {
              id: item.id,
              attrs: {
                //itemToggle: true,
                label: item.roleName || '[New Role]',
                toggle: item.catalog === 1,
                loadChildren: item.catalog === 1,
              },
              data: item,
            };
            return node;
          });
          return list;
        })
        .catch(err => {
          this.$view.toast.show({ text: err.message });
        });
    },
    onNodeClick(node) {
      this.$emit('node:click', node);
    },
    onPerform(e, content, node) {
      console.log(node.id);
    },
  },
}

</script>
