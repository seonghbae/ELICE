/**
 * optional values
 */
 function sayHello(target?: string) {
  const t = target ?? "World";
  console.log(`Hello, ${t}`);
}
sayHello("Mike");
sayHello();

interface IDBConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  schema?: string;
}