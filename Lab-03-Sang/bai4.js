let chan=0,le=0;
n=20;
for (let i=1;i<=n;i++) {
    if (i%2==0){ 
        chan +=i;
    } else {
        le +=i;
    }
}
console.log("chan =",chan);
console.log("le =",le);
console.log("----------------")
let i=0;
let chan_while=0,le_while=0;
while (i<=n) {
    if (i%2==0){ 
        chan_while +=i;
    } else {
        le_while +=i;
    }
    i++;
}
console.log("chan =",chan_while);
console.log("le =",le_while);
console.log("----------------")
let y=1;
let chan_do_while=0,le_do_while=0;
do {
    if (y%2==0){ 
        chan_do_while +=y;
    } else {
        le_do_while +=y;
    }
    y++;
} while (y<=n);
console.log("chan =",chan_do_while);
console.log("le =",le_do_while);