'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async getUserByName(username) {
    const { app } = this;
    try {
      const res = await app.mysql.select('user', 
      { 
        where: { username },
        limit: 1 
      });
      return res && res[0]
    } catch(err) {
      console.log(err);
      return null;
    }
  }
  async register(params) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('user', params)
      return res
    } catch(err) {
      console.log(err);
      return null;
    }
  }
  async editUserInfo(params) {
    const { ctx, app } = this;
    try {
      let result = await app.mysql.update('user',
        { ...params }, { id: params.id }
      );
      return result
    } catch(err) {
      Promise.reject(err)
      return
    }
  }
  async modifyPass(params) {
    const { ctx, app } = this;
    try {
      const res = await app.mysql.update('user', {
        ...params
      }, { id: params.id })
      return res
    } catch(err) {
      Promise.reject(err);
    }
  }
}

module.exports = UserService;