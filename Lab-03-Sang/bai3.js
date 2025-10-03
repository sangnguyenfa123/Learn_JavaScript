let n=20;
for (let i=2;i<=n;i++) {
   let found=false;
    for (let y=2;y<=Math.floor(Math.sqrt(i));y++) {
        if (i%y==0) {
            found=true;
            break;
        }
    }
    if (!found) {
        console.log(i);
    }
 }
console.log("---------------------")
let i=2,y=2;
let kt=false;
if (n>2) {
    console.log(2);
}
while (i<=n) {
    while (y<=Math.floor(i/2)+1) {
        if (i%y==0) {
            kt=true;
            break;
        }
        y++;
    }
    if (!kt) {
        console.log(i);
    }
    kt=false;
    i++;
    y=2;
}
console.log("-------------------------")
let a =2,b=2;
let check = false;
do {
    do {
        if (a%b==0) {
            check=true;
            break;
        }
        b++;
    } while (b<=Math.floor(a/2)+1)
    if (!check) {
        console.log(a)
    }    
    a++;
    b=2;
} while (a<=n)
let c=Math.sqrt(6);
console.log(c);