// 커피를 주문하면 무조건 아메리카노를 주는 카페
// 만약 아메리카노가 아니라 카페레떼만 만들기로 한다면?

function makeAmericano() {
  return new Promise((resolve, reject) => {
    const espresso = "에스프레소";
    const water = "물";
    const americano = espresso + "+ " + water;
    setTimeout(() => resolve(americano), 4000);
  });
}

function order() {
  return makeAmericano();
}

async function main() {
  const coffee = await order();
  console.log(`이 커피는 ${coffee}로 구성되어 있습니다`);
}

main();
