let N=20;
function snt(n) {
    if (n==2 || n==3) {
        return true;
    } else {
        let kt=true;
        for (let i=2;i<=Math.floor(Math.sqrt(n)+1);i++) {
            if (n%i==0) {
                kt=false;
                return false;
            }
        }
        if (kt) {
            return true;
        }
    }
}
for (let i=2;i<=N;i++) {
    if (snt(i)) {
        console.log(i);
    }
}