let set = new Set();

set.add(2);
set.add(4);
set.add(3);
set.add(2);
set.add(5);
set.has(2);
set.delete(2);

console.log(set);
set.clear();
console.log(set);

let setD = new Set([2,3,4,4]);

for(let num of setD) {
    console.log(num);
}