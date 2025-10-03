let Ma_HS="1101",Ten_HS="Nguyen Huynh Sang",Lop="12A",Toan=8,HS_Toan=3,
Van=7,HS_Van=2,Anh=7,HS_Anh=3;
let dtb;
function Profile(Ma_HS,Ten_HS,Lop,Toan,Van,Anh) {
    console.log(Ma_HS);
    console.log(Ten_HS);
    console.log(Lop);
    console.log("Diem Toan:",Toan);
    console.log("Diem Van:",Van);
    console.log("Diem Anh:",Anh);
}
function Evaluate(dtb) {
    if (dtb>=9) {
        console.log("Hang A");
    } else if (7<= dtb < 9) {
        console.log("Hang B");
    } else if (5<= dtb < 7) {
        console.log("Hang C");
    } else {
        console.log("Hang F");
    }
}

Profile(Ma_HS,Ten_HS,Lop,Toan,Van,Anh);
const Average=(Toan,HS_Toan,Van,HS_Van,Anh,HS_Anh) => (Toan*HS_Toan + Van*HS_Van + Anh*HS_Anh)/(HS_Toan+HS_Van+HS_Anh);
Evaluate(dtb)