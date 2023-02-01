# diary-server


## user表
1. id 用户id，自增字段 主键
2. username 用户登录名称
3. password 用户登录密码
4. signature 个性签名
5. avatar 用户头像
6. createTime 用户创建时间字段

## bill表
1. id 账单表主键
2. pay_type 账单类型，1为支出 2为收入
3. amount 账单价格
4. date 账单日期 时间戳
5. type_id 账单标签id，如餐饮、交通、日用、学习、购物等
6. type_name 账单标签名称
7. user_id 账单归属用户id
8. remark 账单备注

## type表
1. id 主键标识
2. name 标签名称，如餐饮、交通、日用、学习、购物等
3. type 标签类型，默认 1 为收入，2 为支出
4. user_id 设置该标签的用户归属，默认 0 为全部用户可见，某个用户单独设置的标签，user_id 就是该用户的用户 id