const { app, mockUrl, mockInfo, assert } = require('egg-born-mock')(__dirname);

// describe('local test', () => {
//   it('moment', async () => {
//     const moment = require('moment');
//     const d = moment().add(10, 'seconds').utc()
//       .format();
//     console.log(d);
//     console.log(moment().format());
//     assert(d);
//   });
// });

describe('curl', () => {
  it('curl', async () => {

    await app.httpRequest().post(mockUrl('/test/todo/todo/uploadInner')).send();

  });
});

describe('test/controller/test.test.js', () => {
  it('atom:todo', async () => {
    app.mockSession({});

    // login as demo001
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      auth: 'demo001',
      password: '123456',
    });

    // create
    let result = await app.httpRequest().post(mockUrl('/a/base/atom/create')).send({
      atomClass: { module: mockInfo().relativeName, atomClassName: 'todo', atomClassIdParent: 0 },
    });
    assert(result.body.code === 0);
    const atomKey = result.body.data;

    // submit
    result = await app.httpRequest().post(mockUrl('/a/base/atom/submit')).send({
      key: atomKey,
      item: {
        atomName: 'read a book',
        completed: 0,
      },
    });
    assert(result.body.code === 0);

    // login as demo002
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      auth: 'demo002',
      password: '123456',
    });

    // review
    result = await app.httpRequest().post(mockUrl('/a/base/atom/action')).send({
      action: 101,
      key: atomKey,
    });
    assert(result.body.code === 0);

    // login as demo001
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      auth: 'demo001',
      password: '123456',
    });

    // delete
    result = await app.httpRequest().post(mockUrl('/a/base/atom/delete')).send({
      key: atomKey,
    });
    assert(result.body.code === 0);

  });
});
