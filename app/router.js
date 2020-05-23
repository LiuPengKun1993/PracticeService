'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 获取用户列表
  router.post('/userList', controller.user.userList);
  // 删除用户
  router.post('/deleteUser/:id', controller.user.deleteUser);
  // 添加用户
  router.post('/addUser', controller.user.addUser);
  // 获取具体用户信息
  router.post('/userInfo/:id', controller.user.userInfo);

  // 获取商品列表
  router.post('/goodsList', controller.goods.goodsList);
  // 收藏商品/取消收藏
  router.post('/collectionGoods/:id', controller.goods.collectionGoods);
  // 删除商品
  router.post('/deleteGood/:id', controller.goods.deleteGood);
};
