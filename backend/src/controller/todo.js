const fs = require('fs');
// const request = require('request');

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

    async test() {
      const res = await this.ctx.model.todo.select({ where: {
        ids: [ '1\'', '2', '3' ],
      } });
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
        const total = 2;
        let progress = 0;
        for (let i = 0; i < 2; i++) {
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
          for (let j = 0; j < 2; j++) {
            const text = `task level2 : ${j + 1}`;
            await this.ctx.meta.progress.update({
              progressId,
              progressNo: 1,
              total: 2,
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

    async uploadInner() {
      // download
      const url = 'https://admin2.zhennann.com/api/a/file/file/download/00b3fb6235fd49abb9313bd19539d65a.jpg';
      const res = await this.ctx.curl(url, { method: 'GET', timeout: 10000 });
      // console.log(res.data);
      // console.log(Buffer.isBuffer(res.data));
      // meta
      const meta = {
        filename: '',
        encoding: '7bit',
        mime: res.headers['content-type'],
        fields: {
          mode: 1,
          flag: 'user-avatar:',
        },
      };
      // upload
      const res2 = await this.ctx.performAction({
        method: 'post',
        url: '/a/file/file/uploadInner',
        body: {
          file: res.data,
          meta,
        },
      });
      console.log(res2);
      this.ctx.success();
    }

    async reload() {
      // 此特性被丢弃
      this.ctx.app.meta.broadcast.reload();
    }

  }
  return TodoController;
};

