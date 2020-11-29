// const express = require('express')
// const app = express()
// var appData = require('./src/assets/List.json') //json文件位置
// var seller = appData
// var apiRoutes = express.Router()
// app.use('/api', apiRoutes)

// devServer: {
//     before(app) {
//         app.get('/api/seller', (req, res) => { //这样就不用配置代理了
//             res.json({
//                 errno: 0,
//                 data: seller
//             })
//         })
//     },
//     host: 'localhost',
//     port: 9999, // 端口号
//     https: false, // https:{type:Boolean}
//     open: true, // 配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
//     hotOnly: true, // 热更新
//     proxy: null
// }