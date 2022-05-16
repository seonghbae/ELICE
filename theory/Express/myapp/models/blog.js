const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const blogSchema = mongoose.Schema;

// 블로그 글 제목
// 블로고 본 글 내용
// auto-increment

autoIncrement.initialize(mongoose);

const blog = new blogSchema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    no: Number
}, {
    timestamps: true // 데이터가 기록될 때마다 시간을 자동으로 저장
});
// blog 스키마의 플러그인으로서 사용하겠다
blog.plugin(autoIncrement.plugin, {
    model: 'blog',
    field: 'no', // 선택한 필드를 자동증가
    startAt: 4,
    increment: 1
});

const blogModel = mongoose.model('blog', blog);
module.exports = blogModel;