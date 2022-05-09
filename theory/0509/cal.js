function add(a, b) {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

module.exports = {
    add: add,
    sub: sub,
    mul: mul
}
// module을 선언해서 add라는 함수를 add라는 이름으로 호출할 수 있도록 빼낸다.