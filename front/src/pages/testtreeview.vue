<template>
  <eb-page>
    <eb-navbar large largeTransparent title="test-treeview" eb-back-link="Back">
      <f7-nav-right>
        <eb-link :onPerform="onPerformRootChange">role:1</eb-link>
      </f7-nav-right>
    </eb-navbar>
    <eb-treeview :root="root" :onLoadChildren="onLoadChildren" :onNodePerform="onNodePerform" @node:click="onNodeClick">
      <div slot="content" slot-scope="{node}">{{`- ${node.id}`}}</div>
    </eb-treeview>
  </eb-page>
</template>
<script>
export default {
  data() {
    return {
      root: {
        id: 0,
        attrs: {}
      },
    };
  },
  methods: {
    onLoadChildren(node) {
      const roleId = node.id;
      return this.$api.post('/a/baseadmin/role/children', { roleId, page: { size: 0 } })
        .then(data => {
          const list = data.list.map(item => {
            const node = {
              id: item.id,
              attrs: {
                //itemToggle: true,
                link: '#',
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
    onNodeClick(e, node) {
      console.log('node:click', node.id);
    },
    onNodePerform(e, content, node) {
      console.log('node:perform', node.id);
    },
    onPerformRootChange() {
      this.root = {
        id: 1,
      };
    }
  },
}

</script>
