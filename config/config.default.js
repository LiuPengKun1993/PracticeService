/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590132043444_9846';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // Methodnoallow: {
    //   Enable: false
    // },
    // Csrf: {
    //   Enable: false,
    //   cookieName: 'csrfToken',
    //   ignoreJSON: true
    // }
    // domainWhiteList: '*'
  };

  // 跨域请求配置
  config.cors = {
    origin: '*', // 星号代表允许所有的请求源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 允许的请求方式
    credentials: true,
  };

  // 数据库的配置
  config.mysql = {
    // 单实例数据库配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'liupengkun',
      // 数据库名
      database: 'practice-dt',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
