const mdbConn = require('./mariaDBConn2.js') // "mariaDBConn2.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const router = express.Router();

// POST 방식 요청이면  /loginProcess 라우터  
router.post('/', (req, res) => {  
    let  id  = req.body['id'] // POST 방식 요청이면  req.body[".."] 로 
    let  pw  = req.body['pw'] // POST 방식 요청이면  req.body[".."] 로 
    let  name  = req.body['name'] 

    mdbConn.signupuser(id,pw,name).then((rows) => {

        req.session.useridd = id;
        req.session.userpww = pw;
        req.session.usernamee = name;
       res.render('main2',{userid:req.session.useridd});
       //  res.render('main2',{userpw:req.session.userpww});
         res.render('main2',{username:req.session.usernamee});
  })
}); 

module.exports = router;