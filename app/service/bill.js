'use strict';

const Service = require('egg').Service;

class BillService extends Service {
  async add(params) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('bill', params)
      return res;
    } catch(err) {
      Promise.reject(err);
      return null;
    }
  }
  async list(id) {
    const { ctx, app } = this;
    const QUERY_STR = 'id, pay_type, amount, date, type_id, type_name, remark';
    let sql = `select ${QUERY_STR} from bill where user_id = ${id}`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (err) {
      Promise.reject(err);
      return null;
    }
  }
  async detail(id, user_id) {
    const { ctx, app } = this;
    try {
      const res = await app.mysql.get('bill', { id, user_id });
      return res
    } catch(err) {
      Promise.reject(err);
    }
  }
  async update(params) {
    const { ctx, app } = this;
    try {
      const res = await app.mysql.update('bill', 
        { ...params }, 
        {
          id: params.id,
          user_id: params.user_id
        }
      )
      return res
    } catch(err) {
      Promise.reject(err)
    }
  }
  async delete(id, user_id) {
    const { ctx, app } = this;
    try {
      const res = await app.mysql.delete('bill', { id, user_id });
      return res
    } catch(err) {
      Promise.reject(err);
    }
  }
}

module.exports = BillService;