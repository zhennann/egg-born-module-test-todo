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

    async progress() {
      const progressId = await this.ctx.meta.progress.create();
      this.ctx.performActionInBackground({
        method: 'post',
        url: 'todo/progressInBackground',
        body: {
          progressId,
        },
      });
      this.ctx.success({ progressId });
    }

    async progressInBackground() {
      const progressId = this.ctx.request.body.progressId;
      try {
        // loop one
        const total = 3;
        let progress = 0;
        for (let i = 0; i < 3; i++) {
          const text = `task level: ${i + 1}`;
          await this.ctx.meta.progress.update({
            progressId,
            progressNo: 0,
            total,
            progress: progress++,
            text,
          });
          // doing
          await this.ctx.meta.util.sleep(1500);
          let progress2 = 0;
          for (let j = 0; j < 5; j++) {
            const text = `task level2 : ${j + 1}`;
            await this.ctx.meta.progress.update({
              progressId,
              progressNo: 1,
              total: 5,
              progress: progress2++,
              text,
            });
            // doing
            await this.ctx.meta.util.sleep(1000);
          }
        }
        // done
        await this.ctx.meta.progress.done({ progressId });
        this.ctx.success(true);
      } catch (err) {
        // error
        await this.ctx.meta.progress.error({ progressId, message: err.message });
        throw err;
      }
    }

  }
  return TodoController;
};

