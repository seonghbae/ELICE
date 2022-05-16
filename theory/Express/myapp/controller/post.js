const BookSchema = require('../models/book');

const getbookinfo = (req, res) => {
    const authorName = req.params.id;
    BookSchema.find({author:authorName})
        .then(result => {
            res.json(result);
        }).catch(err => {
            console.log(err);
        });
};

const addbook = (req, res) => {
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
};

module.exports = {
    getbookinfo,
    addbook
};