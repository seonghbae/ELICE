import fs from "fs/promises";

function sayHelloTo(target: string) {
  console.log(`Hello, ${target}`);
}

function addTwoValues(first: number, second: number): number {
  return first + second;
}

async function main() {
  sayHelloTo("World");
  addTwoValues(100, 1000);
  const samples = await fs.readFile("./sample.json", "utf8");
  console.log(samples);
}

main();
