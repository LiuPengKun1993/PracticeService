'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
  // 获取商品列表接口
  async goodsList(dict) {
    const curPage = dict.curPage ? dict.curPage : 1;
    const pageSize = dict.pageSize ? dict.pageSize : 10;
    const query = 'select * from practice_goodsList limit ' + (curPage - 1) * pageSize + ',' + pageSize;
    const goods = await this.app.mysql.query(query);
    if (goods) {
      return {
        statusCode: '200',
        message: '获取商品列表成功',
        data: goods,
      };
    }
    return {
      statusCode: '201',
      message: '商品列表为空',
      data: goods,
    };

  }

  // 删除商品
  async deleteGood(id) {
    const result = await this.app.mysql.delete('practice_goodsList', {
      id,
    });
    if (result.affectedRows === 1) {
      return {
        statusCode: '200',
        message: '删除商品成功',
      };
    }
    return {
      statusCode: '201',
      message: '删除商品失败',
    };

  }

  // 收藏/取消收藏
  async collectionGoods(id) {
    const goods = await this.app.mysql.get('practice_goodsList', { id });
    console.log(goods, goods.collection);
    const collection = goods.collection === 0 ? 1 : 0;

    const result = await await this.app.mysql.update('practice_goodsList', {
      collection, // 需要修改的数据
    }, {
      where: {
        id,
      }, // 修改查询条件
    });
    console.log(result);
    if (result.affectedRows === 1) {
      if (collection === 1) {
        return {
          statusCode: '200',
          message: '收藏成功',
        };
      }
      return {
        statusCode: '200',
        message: '取消收藏成功',
      };

    }
    if (collection === 1) {
      return {
        statusCode: '200',
        message: '收藏失败',
      };
    }
    return {
      statusCode: '200',
      message: '取消收藏失败',
    };


  }
}

module.exports = GoodsService;
