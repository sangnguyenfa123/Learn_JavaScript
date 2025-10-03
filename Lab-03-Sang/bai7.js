for (let i=2;i<=3;i++) {
    for (let y=1;y<=10;y++) {
        console.log(i,"x",y,"=",i*y);
    }
}
console.log("---------------------");
let a=4,b=1;
while (a<=5) {
    while (b<=10) {
        console.log(a,"x",b,"=",a*b);
        b++;
    }
    b=1;
    a++;
}
console.log("------------------");
let c=6,d=1;
do {
    do {
        console.log(c,"x",d,"=",c*d);
        d++;
    } while (d<=10);
    d=1;
    c++;
} while (c<=7);