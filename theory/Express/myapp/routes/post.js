const express = require('express');
const BookSchema = require('../models/book');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('post');
});

router.get('/del', (req, res) => {
    res.render('delete');
});

router.get('/bookinfo/:id', (req, res) => {
    const authorName = req.params.id;

    // find일 경우 전부 다 찾고 findOne은 하나만 찾음
    // BookSchema.findOne({author:authorName}, (err, result) => {
    //     if(result) {
    //         return res.json(result);
    //     } else {
    //         return res.send('등록된 작가가 없습니다.');
    //     }
    // });
    BookSchema.find({author:authorName})
        .then(result => {
            res.json(result);
        }).catch(err => {
            console.log(err);
        });
});

router.delete('/del/:id', (req, res) => {
    const bookName = req.params.id;

    BookSchema.findOneAndDelete({bookName:bookName})
        .then(result => {
            res.json({redirect:'/expost'});
        }).catch(err => {
            console.log(err);
        });
});

router.post('/', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    // 요청

    // 응답
    res.json({name:name, phone:phone, date:date});
});
//          '/ ' ==> expost/addbook.
router.post('/addbook', (req, res) => {
    // req.body.이름 이 ejs 파일의 name과 같아야함
    const bookName = req.body.bookName;
    const author = req.body.author;
    const price = req.body.price;
    const publish = req.body.publish;

    let bookData = new BookSchema({
        bookName: bookName,
        author: author,
        price: price,
        publish: publish,
    });

    bookData.save();
    res.redirect('/expost');
});

module.exports = router;