// cmd: npm run test:cjs
const { default: defaultExport, sayHello } = require("../dist/index.js");

console.log(defaultExport());
console.log(sayHello());