module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(1);
const locales = __webpack_require__(2);
const errors = __webpack_require__(4);
const middlewares = __webpack_require__(5);

module.exports = app => {

  // routes
  const routes = __webpack_require__(6)(app);
  // services
  const services = __webpack_require__(9)(app);
  // models
  const models = __webpack_require__(12)(app);
  // meta
  const meta = __webpack_require__(14)(app);

  return {
    routes,
    services,
    models,
    config,
    locales,
    errors,
    middlewares,
    meta,
  };

};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// eslint-disable-next-line
module.exports = appInfo => {
  const config = {};
  return config;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'zh-cn': __webpack_require__(3),
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  Todo: '待办',
  Review: '评审',
  Reviewing: '评审中',
  Reviewed: '已评审',
  'Create Todo': '新建待办',
  'Todo List': '待办清单',
  'What to do': '要做什么',
  Completed: '已完成',
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// error code should start from 1001
module.exports = {
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const version = __webpack_require__(7);
const todo = __webpack_require__(8);

module.exports = app => {
  const routes = [
    // version
    { method: 'post', path: 'version/update', controller: version, middlewares: 'inner' },
    { method: 'post', path: 'version/init', controller: version, middlewares: 'inner' },
    { method: 'post', path: 'version/test', controller: version, middlewares: 'test' },
    // todo
    { method: 'post', path: 'todo/create', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/read', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/select', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/write', controller: todo, middlewares: 'inner,validate',
      meta: {
        auth: { enable: false },
        validate: { validator: 'todo', data: 'item' },
      },
    },
    { method: 'post', path: 'todo/delete', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/action', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/enable', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },

    // test
    { method: 'post', path: 'todo/progress', controller: todo, middlewares: 'progress' },
    { method: 'post', path: 'todo/progressInBackground', controller: todo, middlewares: 'inner,progress', meta: { auth: { enable: false } } },

  ];
  return routes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = app => {
  class VersionController extends app.Controller {

    async update() {
      await this.service.version.update(this.ctx.request.body);
      this.ctx.success();
    }

    async init() {
      await this.service.version.init(this.ctx.request.body);
      this.ctx.success();
    }

    async test() {
      await this.service.version.test(this.ctx.request.body);
      this.ctx.success();
    }

  }
  return VersionController;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

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

  }
  return TodoController;
};



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const version = __webpack_require__(10);
const todo = __webpack_require__(11);

module.exports = app => {
  const services = {
    version,
    todo,
  };
  return services;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = app => {

  class Version extends app.Service {

    async update(options) {
      if (options.version === 1) {
        // create table: testTodo
        const sql = `
          CREATE TABLE testTodo (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            iid int(11) DEFAULT '0',
            atomId int(11) DEFAULT '0',
            completed int(11) DEFAULT '0',
            PRIMARY KEY (id)
          )
        `;
        await this.ctx.model.query(sql);
      }
    }

    async init(options) {
      if (options.version === 1) {
        // roles
        const roleAuthenticated = await this.ctx.meta.role.getSystemRole({ roleName: 'authenticated' });
        const roleTemplate = await this.ctx.meta.role.getSystemRole({ roleName: 'template' });
        const roleSuperuser = await this.ctx.meta.role.getSystemRole({ roleName: 'superuser' });
        // create role: test-todo-writer
        let roleId = await this.ctx.meta.role.add({
          roleName: 'test-todo-writer',
          roleIdParent: roleTemplate.id,
        });
        // role:authenticated include test-todo-writer
        await this.ctx.meta.role.addRoleInc({ roleId: roleAuthenticated.id, roleIdInc: roleId });

        // create role: test-todo-reviewer
        roleId = await this.ctx.meta.role.add({
          roleName: 'test-todo-reviewer',
          roleIdParent: roleTemplate.id,
        });
        // role:superuser include test-todo-reviewer
        await this.ctx.meta.role.addRoleInc({ roleId: roleSuperuser.id, roleIdInc: roleId });
        // build
        await this.ctx.meta.role.build();

        // add role rights
        const roleRights = [
          { roleName: 'test-todo-writer', action: 'create' },
          { roleName: 'test-todo-writer', action: 'write', scopeNames: 0 },
          { roleName: 'test-todo-writer', action: 'delete', scopeNames: 0 },
          { roleName: 'test-todo-writer', action: 'read', scopeNames: 'authenticated' },
          { roleName: 'test-todo-reviewer', action: 'review', scopeNames: 'authenticated' },
        ];
        const module = this.ctx.app.meta.modules[this.ctx.module.info.relativeName];
        const atomClass = await this.ctx.meta.atomClass.get({ atomClassName: 'todo' });
        for (const roleRight of roleRights) {
        // role
          const role = await this.ctx.meta.role.get({ roleName: roleRight.roleName });
          // scope
          let scope;
          if (!roleRight.scopeNames) {
            scope = 0;
          } else {
            const roleScope = await this.ctx.meta.role.get({ roleName: roleRight.scopeNames });
            scope = [ roleScope.id ];
          }
          // add role right
          await this.ctx.meta.role.addRoleRight({
            roleId: role.id,
            atomClassId: atomClass.id,
            action: this.ctx.constant.module('a-base').atom.action[roleRight.action] || module.main.meta.base.atoms.todo
              .actions[roleRight.action].code,
            scope,
          });
        }
      }
    }

    async test() {
      // create test users: demo001,demo002
      const users = [
        { userName: 'demo001', roleName: 'activated' },
        { userName: 'demo002', roleName: 'test-todo-reviewer' },
      ];
      const userIds = [];
      for (const user of users) {
        // add user
        userIds[user.userName] = await this.ctx.meta.user.add({
          userName: user.userName,
          realName: user.userName,
        });
        // add auth info for login
        await this.ctx.performAction({
          method: 'post',
          url: '/a/authsimple/auth/add',
          body: {
            userId: userIds[user.userName],
            password: '123456',
          },
        });
        // role
        const role = await this.ctx.meta.role.get({ roleName: user.roleName });
        // add user role
        await this.ctx.meta.role.addUserRole({
          userId: userIds[user.userName],
          roleId: role.id,
        });
      }
    }

  }

  return Version;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

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

    async write({ atomClass, key, item, user }) {
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


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const todo = __webpack_require__(13);

module.exports = app => {
  const models = {
    todo,
  };
  return models;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = app => {
  class Todo extends app.meta.Model {
    constructor(ctx) {
      super(ctx, { table: 'testTodo', options: { disableDeleted: false } });
    }
  }
  return Todo;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = app => {
  const schemas = __webpack_require__(15)(app);
  const meta = {
    base: {
      atoms: {
        todo: {
          info: {
            title: 'Todo',
            tableName: 'testTodo',
          },
          actions: {
            review: {
              code: 101,
              title: 'Review',
              flag: '1',
            },
          },
          flags: {
            1: {
              title: 'Reviewing',
            },
            2: {
              title: 'Reviewed',
            },
          },
          validator: 'todo',
          search: {
            validator: 'todoSearch',
          },
        },
      },
      functions: {
        createTodo: {
          title: 'Create Todo',
          scene: 'create',
          autoRight: 1,
          atomClassName: 'todo',
          action: 'create',
          sorting: 1,
          menu: 1,
        },
        listTodo: {
          title: 'Todo List',
          scene: 'list',
          autoRight: 1,
          atomClassName: 'todo',
          action: 'read',
          sorting: 1,
          menu: 1,
        },
      },
    },
    validation: {
      validators: {
        todo: {
          schemas: 'todo',
        },
        todoSearch: {
          schemas: 'todoSearch',
        },
      },
      keywords: {},
      schemas: {
        todo: schemas.todo,
        todoSearch: schemas.todoSearch,
      },
    },
  };
  return meta;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = app => {
  const schemas = {};
  // todo
  schemas.todo = {
    type: 'object',
    properties: {
      atomName: {
        type: 'string',
        ebType: 'text',
        ebTitle: 'What to do',
        notEmpty: true,
      },
      completed: {
        type: 'number',
        ebType: 'toggle',
        ebTitle: 'Completed',
      },
    },
  };
  // todo search
  schemas.todoSearch = {
    type: 'object',
    properties: {
      completed: {
        type: 'number',
        ebType: 'select',
        ebTitle: 'Completed',
        ebMultiple: false,
        ebOptionsBlankAuto: true,
        ebOptions: [
          { title: 'Imcompleted', value: 0 },
          { title: 'Completed', value: 1 },
        ],
        ebParams: {
          openIn: 'page',
          closeOnSelect: true,
        },
      },
    },
  };
  return schemas;
};


/***/ })
/******/ ]);
//# sourceMappingURL=backend.js.map