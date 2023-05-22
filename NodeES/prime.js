import isPrime from "is-prime-number";
import http from "http";
let counter = 0;
http.createServer((req, res) => {
console.log(`Counter #${++counter}`);
let number = 0;
let qtdPrimes = 0;
while(qtdPrimes<1_000_000) {
if (isPrime(++number)) qtdPrimes++;
}
res.end(`Primo ${number}`)
}).listen(3000);