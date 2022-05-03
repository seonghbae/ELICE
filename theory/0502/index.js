// 싱글스레드-멀티스레드
// 자바 스크립트는 싱글스레드라 아래와 같이 하면 X
let lock = 0; // 0 or 1

function deposit(amount) {
    while(lock === 1) {};
    lock = 1;
    let value = getDataFromAccount();
    value += amount;
    saveDataToAccount(value);
    lock = 0;
}

function withdraw(amount) {
    while(lock === 1) {};
    lock = 1;
    let value = getDataFromAccount();
    value -= amount;
    saveDataToAccount(value);
    lock = 0;
}
// 싱글스레드-멀티스레드

// blocking
function foo() {
    return 1;
}

function bar() {
    return "somthing";
}

function main() {
    foo();
    bar();
}

main();