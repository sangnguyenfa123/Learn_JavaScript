let thang=4;
let nam=2022;
let kt=false;
if ((nam%4==0 && nam%100!=0) || (nam%400==0)){
    kt=true;
} else {
    kt=false;
}
switch (thang) {
    case 2:
        if (kt){
            console.log("thang",thang,"co 29 ngay");
        } else {
            console.log("thang",thang,"co 28 ngay");
        }
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("thang",thang,"co 31 ngay");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("thang",thang,"co 30 ngay");
        break;
    default:
        console.log("thang khong hop le");
}
/*
let _31_ngay = [1,3,5,7,8,10,12];
let _30_ngay = [4,6,9,11];
let _thang2 = kt ? 29:28;
if (_30_ngay.includes(thang)) {
    console.log("thang",thang,"co 30 ngay");
} else if (_31_ngay.includes(thang)) {
    console.log("thang",thang,"co 31 ngay");
} else {
    console.log("thang",thang,"co",_thang2,"ngay");
}
*/