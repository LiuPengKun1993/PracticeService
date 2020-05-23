'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {

  // 获取商品列表
  async goodsList() {
    const { ctx } = this;
    const dict = this.ctx.request.body;
    console.log(dict);
    const user = await ctx.service.goods.goodsList(dict);
    ctx.body = user;
    ctx.status = 200;
  }

  // 删除商品
  async deleteGood() {
    const { ctx } = this;
    const id = ctx.params.id;
    const result = await ctx.service.goods.deleteGood(id);
    ctx.body = result;
    ctx.status = 200;
  }

  // 收藏或取消收藏
  async collectionGoods() {
    const { ctx } = this;
    const id = ctx.params.id;
    const result = await ctx.service.goods.collectionGoods(id);
    ctx.body = result;
    ctx.status = 200;
  }
}

module.exports = GoodsController;
