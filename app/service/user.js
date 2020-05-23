'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async userInfo(id) {
    // 拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('practice_userinfo', { id });
    if (user) {
      return {
        statusCode: '200',
        message: '获取用户信息成功',
        data: user,
      };
    }
    return {
      statusCode: '201',
      message: '用户id范围（100-122）',
    };

  }

  // 删除用户
  async deleteUser(id) {
    const result = await this.app.mysql.delete('practice_userinfo', {
      id,
    });
    if (result.affectedRows === 1) {
      return {
        statusCode: '200',
        message: '删除用户成功',
      };
    }
    return {
      statusCode: '201',
      message: '删除用户失败',
    };

  }

  // 添加用户
  async addUser(dict) {
    if (!dict.id || !dict.name) {
      return {
        statusCode: '201',
        message: '添加失败，用户id/姓名不能为空',
      };
    }

    const selectInfo = await this.app.mysql.select('practice_userinfo', { where: { id: dict.id } });
    if (selectInfo.length > 0) {
      return {
        statusCode: '201',
        message: '添加失败，用户id已存在',
      };
    }

    const result = await this.app.mysql.insert('practice_userinfo', dict);
    if (result.affectedRows === 1) {
      return {
        statusCode: '200',
        message: '添加用户成功',
      };
    }

  }

  // 分页获取用户
  async userList(dict) {
    const curPage = dict.curPage ? dict.curPage : 1;
    const pageSize = dict.pageSize ? dict.pageSize : 10;
    const query = 'select * from practice_userinfo limit ' + (curPage - 1) * pageSize + ',' + pageSize;
    const users = await this.app.mysql.query(query);

    if (users) {
      return {
        statusCode: '200',
        message: '获取用户列表成功',
        data: users,
      };
    }
    return {
      statusCode: '201',
      message: '用户列表为空',
      data: users,
    };

  }
}

module.exports = UserService;
