let n=36,m=15;
let temp;
if (n>m) {
    temp=n;
    n=m;
    m=temp;
}
for (let i=n;i>=1;i--) {
        if (n%i==0 && m%i==0) {
            console.log("uoc cung lon nhat la:",i);
            break;
        }
}