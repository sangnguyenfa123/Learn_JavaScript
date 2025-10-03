let n=5
let tong_for=1;
for (let i=1;i<=n;i++) {
    tong_for *= i;
}
console.log(tong_for);
console.log("-----------------")
let tong_while =1;
let i=1;
while (i<=n) {
    tong_while *= i;
    i++;
}
console.log(tong_while);
console.log("------------------");
let tong_do=1;
let y=1;
do {
    tong_do *=y;
    y++;
} while (y<=n);
console.log(tong_do);