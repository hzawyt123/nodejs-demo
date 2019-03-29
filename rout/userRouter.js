const express = require('express');
const UserModel = require('../moduls/userModel');
const router = express.Router();
router.post('/reigisert', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    //引入数据库
    let user = new UserModel({
        username, password


    })
    user.save().then(
        () => {

console.log('插入成功')
res.redirect('/index.html');
        }

    ).catch(error => {
        console.log('插入失败')
        res.send('注册失败')
    }

    )

});



module.exports = router;