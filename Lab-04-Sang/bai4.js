function ucln(n,m) {
    let temp;
    if (n>m) {
        temp=n;
        n=m;
        m=temp;
    }
    for (let i=n;i>=1;i--) {
        if (m%i==0 && n%i==0) {
            return i;
        }
    }
}
console.log(ucln(10,28));