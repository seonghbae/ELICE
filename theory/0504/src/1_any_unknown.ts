/**
 * any & unknown type
 */

 let slimeOne: any = 1;
 slimeOne = "string";
 slimeOne = true;
 slimeOne = null;
 slimeOne = undefined;
 slimeOne = [1, 2, 3];
 slimeOne = () => {};
 slimeOne = { key: "something " };
 slimeOne.key;
 
 let slimeTwo: unknown = 1;
 slimeTwo = "string";
 slimeTwo = true;
 slimeTwo = null;
 slimeTwo = undefined;
 slimeTwo = [1, 2, 3];
 slimeTwo = () => {};
 slimeTwo = { key: "something" };
 slimeTwo.key;
 
 (<{ key: string }>slimeTwo).key;