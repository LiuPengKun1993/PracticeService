# PracticeService

- 目的：学习服务端技术
- 技术栈：`egg`、`egg-mysql`
- 已实现：基于 Egg.js 的 node 服务端，实现了一些常见接口。
- 后续：利用此接口写一个 Flutter 程序。

## 接口

#### 已实现的接口

- 分页获取用户列表接口：`http://127.0.0.1:7001/userList`

| 传参 |类型|默认值|是否必传|
|---|---|---|---|
|curPage|int|1|否（不传能调通，但是每次都会只调第一页数据）|
|pageSize|int|10|否|

返回数据类型示例：

```
{
    "statusCode": "200",
    "message": "获取用户列表成功",
    "data": [
        {
            "id": "100",
            "name": "路飞",
            "age": 18,
            "height": 178.5,
            "sex": 1
        },
        {
            "id": "101",
            "name": "索隆",
            "age": 20,
            "height": 182,
            "sex": 1
        }
    ]
}
```

- 删除用户接口：`http://127.0.0.1:7001/deleteUser/:id`

返回数据类型示例：

```
{
  "statusCode": "200",
  "message": "删除用户成功"
}

```

- 添加用户接口：`http://127.0.0.1:7001/addUser`

| 传参 |类型|默认值|是否必传|
|---|---|---|---|
| id |字符串||是|
| name |字符串||是|
| age |int|18|否|
| height | float |180|否|
| age |int|0|否|

返回数据类型示例：

```
{
  "statusCode": "200",
  "message": "添加用户成功"
}

```

- 获取具体用户信息：`http://127.0.0.1:7001/userInfo/:id`

返回数据类型示例：

```
{
  "statusCode": "200",
  "message": "获取用户信息成功",
  "data": {
    "id": "101",
    "name": "索隆",
    "age": 20,
    "height": 182,
    "sex": 1
  }
}

```

- 分页获取获取商品列表：`http://127.0.0.1:7001/goodsList`

| 传参 |类型|默认值|是否必传|
|---|---|---|---|
|curPage|int|1|否（不传能调通，但是每次都会只调第一页数据）|
|pageSize|int|10|否|

返回数据类型示例：

```
{
  "statusCode": "200",
  "message": "获取商品列表成功",
  "data": [
    {
      "id": "01",
      "name": "红牛",
      "price": 5,
      "description": "这个饮料很好喝",
      "collection": 0
    },
    {
      "id": "02",
      "name": "茅台",
      "price": 1000,
      "description": "喝完这一杯，还有三杯",
      "collection": 0
    }
  ]
}
```


- 收藏商品/取消收藏：`http://127.0.0.1:7001/collectionGoods/:id`

返回数据类型示例：

```
{
  "statusCode": "200",
  "message": "收藏成功"
}
```


- 删除商品：`http://127.0.0.1:7001/deleteGood/:id`

返回数据类型示例：

```
{
  "statusCode": "200",
  "message": "删除商品成功"
}

```

#### 数据库数据字典

- 用户表

| 字段名 |字段类型|描述|主键|
|---|---|---|---|
|id|varchar|用户id|是|
| name |varchar|用户名|否|
| age | int |用户年龄|否|
| height | float |用户身高|否|
| sex | int |用户性别|否|

- 商品表

| 字段名 |字段类型|描述|主键|
|---|---|---|---|
|id|varchar|商品id|是|
| name |varchar|商品名|否|
| description | varchar |描述|否|
| price | float |价格|否|
| collection | int |是否收藏|否|

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org