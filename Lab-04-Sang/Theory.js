// Hàm không tham số, không trả về
function say() {
    console.log("hello")
}
say()
// Hàm có tham số, không trả về 
function inso(a) {
    console.log(a)
}
inso(10);
// Hàm có tham số, có giá trị trả về
function cong(a,b) {
    return a+b;
}
console.log(cong(1,2));

let tru = (a,b) => a-b;
console.log(tru(4,3));
// Hàm Yield (Hàm sinh)
console.log("----------")
function* gen() {
    yield 1;
    yield 2;
}
console.log(gen().next().value);
console.log(gen().next().value);