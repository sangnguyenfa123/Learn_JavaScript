// Hàm không tham số, không trả về
function say() {
    console.log("hello")
}
say()
// Hàm Yield (Hàm sinh)
console.log("-----------------")
function* gen() {
    yield 1;
    yield 2;
}
console.log(gen().next().value);   
console.log(gen().next().value);  //khi gọi như vậy nó sẽ chạy lại từ đầu, vì vậy cần dùng Arrow Functions
function* myGenerator() {
    yield 1;    
    yield 2;        
}
let gen = myGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log("-------------------")
const luythua = (x,y) => {
    return x** (y || 2);
}
console.log("luy thua 1",luythua(2,2));
console.log("luy thua 2",luythua(2));

const tong=(x,y=1,z=2) => x + y + z;
//các giá trị mặc định phải liên tiếp nhau và nằm ở cuối danh sách
// như này là ko đc: tong=(x=1,y,z=2)
console.log("tong 1",tong(1,2,3));
console.log("tong 2",tong(1,2));
console.log("tong 3",tong(1));
console.log("tong 4",tong(1,undefined,4));//undefined lấy giá trị trên parameter nếu có