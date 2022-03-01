let num = [8, 4, 5, 6, 7];

console.log(`o valor de num e ${num}`);
num.push(90);
console.log(`o valor de num e ${num}`);
// num.push(39); esta ficando em primero pq 
console.log(`o valor de num e ${num}`);
let tamanho = num.length;
console.log(`o tamnha do vetor e ${tamanho}`);
let crecente = num.sort()
console.log(`o valor de num crescente e  ${crecente}`);

let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)