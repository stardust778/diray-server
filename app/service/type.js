const Service = require('egg').Service;

class typeService extends Service {
  async list(id) {
    const { app } = this;
    const QUERY_STR = 'id, name, type, user_id';
    let sql = `select ${QUERY_STR} from type where user_id = 0 or user_id = ${id}`;
    try {
      const res = await app.mysql.query(sql);
      return res
    } catch(err) {
      return Promise.reject(err);
    }
  }
}

module.exports = typeService