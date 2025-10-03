let phut_goi = 220;
let tong_gia_cuoc=25000;
let gia={
    _50_phut:600,
    _150_phut:400,
    _200_phut:200,
}
if (phut_goi - 50 <0) {
    tong_gia_cuoc += gia._50_phut*phut_goi;
} else {
    tong_gia_cuoc += gia._50_phut*50;
    phut_goi -= 50;
    if (phut_goi - 150<0) {
            tong_gia_cuoc += gia._150_phut*phut_goi;
        } else {
            tong_gia_cuoc += gia._150_phut*150;
            phut_goi -=150;
            tong_gia_cuoc += gia._200_phut*phut_goi;
        }
}
console.log("tong tien =",tong_gia_cuoc);   