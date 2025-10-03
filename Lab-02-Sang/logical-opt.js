// == , ===
console.log("10 == '10' :",10 == "10"); // == sẽ ép về cùng 1 kdl và so sánh giá trị
console.log("10 === '10' :",10 ==='10'); // === so sánh cả kdl và giá trị
console.log("10 != '10' :",10 != "10"); // so sánh giá trị
console.log("10 !== '10' :",10 !=='10'); // so sánh kdl và giá trị
// ! : phủ định
/* 
- các giá trị mang nghĩa phủ định:
  + 0
  + ""
  + undefined
  + null
  + false
*/
if (!null) {
    console.log("1");
}
if (10) {
    console.log("1");
}