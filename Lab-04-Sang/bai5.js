function tong_cuoc(n) {
    let tong=25000;
    gia_cuoc = {
        _50p : 600,
        _150p : 400,
        _200p : 200,
    }
    if (n<=50) {
        return tong + gia_cuoc._50p*n;
    } else {
        tong += gia_cuoc._50p*50;
        n-=50;
        if (n<=150) {
            tong += gia_cuoc._150p*n;
        } else {
            tong += gia_cuoc._150p*150;
            n-=150;
            tong += gia_cuoc._200p*n;
        }
    }
    return tong
}
console.log(tong_cuoc(35));