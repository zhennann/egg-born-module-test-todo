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
        await this.ctx.meta.role.setDirty(true);

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
