const express = require('express');
const blogSchema = require('../models/blog'); // 데이터베이스
const router = express.Router();

// localhost:3000/blog

router.get('/', async (req, res) => {
    // database.find({}) : 가지고 있는 collection 전부
    const result = await blogSchema.find({}).exec();
    // views의 ejs 파일을 읽어들이는 것
    // 새 폴더를 만들었으므로 경로 수정
    res.render('blog/blog', { content: result });
});

router.get('/write', (req, res) => {
    res.render('blog/write');
});
// 경로가 같아도 메소드가 다르니 역할이 다르다
// post하려면 저장공간이 필요하므로 modles에 데이터베이스 구성
router.post('/write', (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    const blogText = new blogSchema({
        title: title,
        content: content
    });

    blogText.save().then(result => {
        console.log(result);
        res.redirect('/blog');
    }).catch(err => {
        console.log(err);
        next(err); // 에러처리는 next가 좋음
    });
});

module.exports = router;