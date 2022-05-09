const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('hello express');
    next(); // 현재 미들웨어 기능을 마치고 다음 미들웨어로 연결을 해준다.
});

router.get('/member', (req, res) => {
    res.send('call member');
});

router.get('/member/:id', (req, res) => {
    const member = req.params.id;
    console.log(member);
    res.send(`${member}`);
});

module.exports = router;