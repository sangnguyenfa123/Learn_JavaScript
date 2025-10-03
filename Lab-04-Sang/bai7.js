let T=0;
let so_xe=12345;
while (so_xe>0){
    T+=so_xe%10;
    so_xe = Math.floor(so_xe/10);
}
console.log(T)
console.log("so nut so xe:",T%10);