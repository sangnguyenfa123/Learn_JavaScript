let toan = 8,ly = 9,hoa = 8,van = 8;
let hs_toan = 2,hs_li = 2,hs_hoa = 3,hs_van = 3;
let dtb=(toan*hs_toan + ly*hs_li + hoa*hs_hoa + van*hs_van)/(hs_toan+hs_hoa+hs_li+hs_van);
console.log("diem trung binh =",dtb);
/*
if (dtb >= 9) {
    console.log("Hang A");
} else if (dtb >=7 && dtb <9) {
    console.log("Hang B");
} else if (dtb >=5 && dtb <7) {
    console.log("Hang C");
} else {
    console.log("Hang F");
}
*/
switch (true) {
    case dtb >= 9:
        console.log("Hang A");
        break;
    case dtb >= 7 && dtb <9 :
        console.log("Hang B");
        break;
    case dtb >=5 && dtb <7 :
        console.log("Hang C");
        break;
    case dtb <5:
        console.log("Hang F");
        break;
}