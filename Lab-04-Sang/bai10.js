function snt(n) {
    if (n==2 || n==3) {
        return true;
    }
    for (let i=2;i<=Math.floor(Math.sqrt(n)+1);i++) {
        if (n%i==0) {
            return false;
        }
    }
    return true;
}
function uoc(n){
    for (let i=2;i<=n;i++) {
        if (n%i==0 && snt(i)) {
            console.log(i)
        }
    }
}
console.log(uoc(135));