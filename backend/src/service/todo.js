module.exports = app => {

  class Todo extends app.Service {

    async create({ atomClass, key, item, user }) {
      // add todo
      const res = await this.ctx.model.todo.insert({
        atomId: key.atomId,
      });
      return { atomId: key.atomId, itemId: res.insertId };
    }

    async read({ atomClass, key, item, user }) {
      // read
    }

    async select({ atomClass, options, items, user }) {
      // select
    }

    async write({ atomClass, key, item, validation, user }) {
      // update todo
      await this.ctx.model.todo.update({
        id: key.itemId,
        completed: item.completed,
      });
    }

    async delete({ atomClass, key, user }) {
      // delete todo
      await this.ctx.model.todo.delete({
        id: key.itemId,
      });
    }

    async action({ action, atomClass, key, user }) {
      if (action === 101) {
        // change flag
        await this.ctx.meta.atom.flag({
          key,
          atom: { atomFlag: 2 },
          user,
        });
      }
    }

    async enable({ atomClass, key, atom, user }) {
      // enable
      const atomFlag = atom.atomEnabled ? 1 : 0;
      // change flag
      await this.ctx.meta.atom.flag({
        key,
        atom: { atomFlag },
        user,
      });
    }

  }

  return Todo;
};
