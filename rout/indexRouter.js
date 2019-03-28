const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    if(req.cookies.nickName){
        res.render('index');
        console.log(req.cookies.nickName)
    }else{
     res.redirect('/login.html',{

        nickName:req.cookies.nickName,
     });
    };
    

});
//登录
router.get('/login', (req, res) => {
    res.render('login');

});
//注册
router.get('/reigisert', (req, res) => {
    res.render('reigisert');

});



module.exports = router;