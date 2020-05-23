'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  // 获取用户列表
  async userList() {
    const { ctx } = this;
    const dict = this.ctx.request.body;
    console.log(dict);
    const user = await ctx.service.user.userList(dict);
    ctx.body = user;
    ctx.status = 200;
  }

  // 根据用户id获取用户信息
  async userInfo() {
    const { ctx } = this;
    const id = ctx.params.id;
    console.log(id);
    const user = await ctx.service.user.userInfo(id);
    ctx.body = user;
    ctx.status = 200;
  }

  // 删除用户
  async deleteUser() {
    const { ctx } = this;
    const id = ctx.params.id;
    console.log(id);
    const result = await ctx.service.user.deleteUser(id);
    ctx.body = result;
    ctx.status = 200;
  }

  async addUser() {
    const { ctx } = this;
    const dict = this.ctx.request.body;
    const result = await ctx.service.user.addUser(dict);
    ctx.body = result;
    ctx.status = 200;
  }
}

module.exports = UserController;
