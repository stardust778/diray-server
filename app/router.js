'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware  } = app;
  router.get('/', controller.home.index);
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.post('/user/register', controller.user.register);
  router.post('/user/login', controller.user.login);
  router.get('/user/get_userinfo', _jwt, controller.user.getUserInfo);
  router.get('/user/test', _jwt, controller.user.test);
  router.get('/user/edit_userinfo', _jwt, controller.user.editUserInfo);  // 修改用户个性签名
  router.post('/user/modify_pass', _jwt, controller.user.modifyPass);  // 修改用户密码
  router.post('/upload', _jwt, controller.upload.upload);  // 文件/图片上传
  router.post('/bill/add', _jwt, controller.bill.add);  // 添加账单
  router.get('/bill/list', _jwt, controller.bill.list);  // 账单列表
  router.get('/bill/detail', _jwt, controller.bill.detail); // 账单详情
  router.post('/bill/update', _jwt, controller.bill.update);  // 更新账单
  router.post('/bill/delete', _jwt, controller.bill.delete);  // 删除账单
  router.get('/bill/data', _jwt, controller.bill.data);  // 用户账单数据
  router.get('/type/list', _jwt, controller.type.list);  // 获取消费类型列表
};
