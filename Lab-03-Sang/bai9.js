let n = 12;
let dem=0;
if (n==0){
    dem=1;
} else {
    while (n>0) {
        dem++;
        n=Math.floor(n/10);
    }
}
console.log(dem);