module.exports = app => {
  class Todo extends app.meta.Model {
    constructor(ctx) {
      super(ctx, { table: 'testTodo', options: { disableDeleted: false } });
    }
  }
  return Todo;
};
