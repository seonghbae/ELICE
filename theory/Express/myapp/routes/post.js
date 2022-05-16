const express = require('express');
const BookSchema = require('../models/book');
const postController = require('../controller/post');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('post');
});

router.get('/del', (req, res) => {
    res.render('delete');
});

// router.get('/bookinfo/:id', (req, res) => {
//     const authorName = req.params.id;

//     // find일 경우 전부 다 찾고 findOne은 하나만 찾음
//     // BookSchema.findOne({author:authorName}, (err, result) => {
//     //     if(result) {
//     //         return res.json(result);
//     //     } else {
//     //         return res.send('등록된 작가가 없습니다.');
//     //     }
//     // });
//     BookSchema.find({author:authorName})
//         .then(result => {
//             res.json(result);
//         }).catch(err => {
//             console.log(err);
//         });
// });

router.get('/bookinfo/:id', postController.getbookinfo);

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
// router.post('/addbook', (req, res) => {
//     // req.body.이름 이 ejs 파일의 name과 같아야함
//     const bookName = req.body.bookName;
//     const author = req.body.author;
//     const price = req.body.price;
//     const publish = req.body.publish;

//     let bookData = new BookSchema({
//         bookName: bookName,
//         author: author,
//         price: price,
//         publish: publish,
//     });

//     bookData.save();
//     res.redirect('/expost');
// });

router.post('/addbook', postController.addbook);

// bookinfo에 있는 정보를 다 가져오는 코드
router.get('/getlist', async (req, res) => {
    // find({}) : 전부 가져오기
    // 이런식으로 활용할 때는 exec() 꼭 활용할 것
    const result = await BookSchema.find({}).exec();
    return res.status(200).json(result);
});
// error 핸들링

// router.get('/users', (req, res) => {
//     try {
//         const userid = req.body.userid;
//         const job = req.body.job;
//         const user = new userSchema({
//             userid: userid,
//             job: job
//         });
//         const result = await user.save();
//         res.status(200).json({
//             result,
//             message: 'user saved'
//         });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// });

module.exports = router;