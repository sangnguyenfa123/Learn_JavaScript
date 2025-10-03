let chieu_cao = 1.68, can_nang = 65;
let BMI = can_nang/(chieu_cao**2);
/*
if (BMI < 18.5) {
    console.log("Thieu can");
} else if (18.5 <= BMI < 25.0) {
    console.log("Binh thuong");
} else if (25.0 <= BMI < 30.0) {
    console.log("Thua can");
} else if (30<= BMI) {
    console.log("Beo phi");
}
*/
switch (true) {
    case BMI < 18.5:
        console.log("Thieu can");
        break;
    case 18.5 <= BMI < 25.0: 
        console.log("Binh thuong");
        break;
    case 25.0 <= BMI < 30.0:
        console.log("Thua can");
        break;
    case 30<= BMI:
        console.log("Beo phi");
        break;
}