const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    bookName: String,
    author: String,
    // 값을 강제하는 것
    // 이때, price 관련된 건 전부 주석처리할 것
    // price: {
    //     type: Number,
    //     default: 5000
    // },
    price: Number,
    publish: Date,
    sales: {
        type: Boolean,
        default: false,
    },
});
// 서점 저장정보를 넣어두고 판매페이지, 관리페이지 구분 위해 sales
const bookData = mongoose.model('bookinfo', book);
module.exports = bookData;