function bcnn(a,b) {
    let somax=Math.max(a,b)
    let i=somax;
    while (i>=somax) {
        if (i%a==0 && i%b==0) {
            return i;
        }
        i++;
    }
}
console.log(bcnn(12,29));