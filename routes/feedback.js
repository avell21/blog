const express = require('express')
const app = express.Router()
const FEED = require('../app/Controllers/feedbackController')
const token = require('../middlewares/verifyToken')


app
    .use((req,res,next)=>token(req,res,next))

    .get('/all/:id',FEED.list_all)

    .post('/New',FEED.New_comment)

    .delete('/Delete/:id',FEED.Delete_comment)

module.exports = app;