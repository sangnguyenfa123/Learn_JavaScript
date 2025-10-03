function tong_chia_13(n) {
    let tong=0;
    if (!n) {
        return tong;
    }
    for (let i=1;i<=n;i++) {
        if (i%13==0) {
            tong +=i;
        }
    }
    return tong;
}
console.log(tong_chia_13(50));