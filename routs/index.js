const controller = require('../controller/index')
const express = require('express')
const rout = express.Router()

rout.post('/store', controller.store);
rout.get('/getall', controller.findall)
rout.get('/getone', controller.findByid)
rout.get('/update', controller.update)
rout.post('/delet', controller.dlit)

module.exports = rout;