module.exports = app => {

  class TodoController extends app.Controller {

    async create() {
      const res = await this.ctx.service.todo.create(this.ctx.request.body);
      this.ctx.success(res);
    }

    async read() {
      const res = await this.ctx.service.todo.read(this.ctx.request.body);
      this.ctx.success(res);
    }

    async select() {
      const res = await this.ctx.service.todo.select(this.ctx.request.body);
      this.ctx.success(res);
    }

    async write() {
      await this.ctx.service.todo.write(this.ctx.request.body);
      this.ctx.success();
    }

    async delete() {
      await this.ctx.service.todo.delete(this.ctx.request.body);
      this.ctx.success();
    }

    async action() {
      const res = await this.ctx.service.todo.action(this.ctx.request.body);
      this.ctx.success(res);
    }

    async enable() {
      const res = await this.ctx.service.todo.enable(this.ctx.request.body);
      this.ctx.success(res);
    }

  }
  return TodoController;
};

