let n = 1990,m = 2025;
for (let i = n;i<=m;i++) {
    if ((i%4==0 && i%100!=0) || (i%400==0)){
        console.log("nam",i,"nhuan");
    }
}
console.log("------------------------")
let i=n;
while (i<=m) {
    if ((i%4==0 && i%100!=0) || (i%400==0)){
        console.log("nam",i,"nhuan");
    }
    i++;
}
console.log("--------------------------")
let y=n;
do {
    if ((y%4==0 && y%100!=0) || (y%400==0)){
        console.log("nam",y,"nhuan");
    }
    y++;
} while (y<=m);