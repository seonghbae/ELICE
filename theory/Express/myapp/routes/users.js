var express = require('express');
const userSchema = require('../models/newuser');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('blog/auth');
});

// 정규 표현식
// passport 라이브러리 많이 사용

router.post('/signup', body('email').isEmail().withMessage('아이디는 email 형태를 따르셔야 합니다.'),
body('password').isLength({ min: 5 }).withMessage('비밀번호는 최소 5글자 이상입니다.'),
async (req, res) => {

  // 막히면 글, 임의의 로직 그리기 추천
  // 넘어오는 값 : post
  // id: email, pw: 5글자 이상
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  // 중복 가입
  // 쿼리를 찾기 전에 그 뒤의 로직으로 넘어가는 경우가 가끔 있음
  // => 방지 위해 async 사용
  const findresult = await userSchema.findOne({ email:email });

  // 찾는 쿼리
  // 결과가 존재 => 중복으로 가입이 되어 있는 경우
  // 결과가 X => 신규가입

  if(!findresult) {
    const salt = bcrypt.genSaltSync(10);
    const bcryptpw = bcrypt.hashSync(password, salt); // 비밀번호를 암호화
  
    userSchema.create({
      email: email,
      password: bcryptpw
    }).then(result => {
      res.status(200).json(result);
    });
  }
  else {
    res.status(401).json({ msg: '이미 가입된 계정입니다.' });
  }
});

router.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // 가입을 했던 유저인지? 아닌지?
  const userData = await userSchema.findOne({ email: email }).exec();

  if(!userData) { // 유저 데이터가 없다면
    return res.status(401).json({ msg: '가입되지 않은 계정입니다.' });
  }
  else { // 유저 데이터가 존재한다면. ==> 비밀번호가 매칭이 되는지
    const pwMatch = bcrypt.compareSync(password, userData.password);
    if(pwMatch) {
      res.status(200).json({ msg: 'OK' });
    } else {
      res.status(401).json({ msa: '비밀번호가 일치하지 않습니다.' });
    }
  }
});

router.get('/login', (req, res) => {
  res.render('blog/login');
});

module.exports = router;
