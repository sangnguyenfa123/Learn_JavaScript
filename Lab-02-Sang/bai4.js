let a = 1,b = -6,c = 9;
/*
if (a==0 && b==0){
    console.log("PT vo nghiem")
} else if (a==0){
    console.log("PT co 1 nghiem",-c/b);
} else if ((b**2 - 4*a*c) < 0 ){
    console.log("PT vo nghiem");
} else if ((b**2 - 4*a*c) == 0 ){
    console.log("PT co nghiem kep =",-b/(2*a));
} else if ((b**2 - 4*a*c) > 0 ){
    console.log("PT co 2 nghiem phan biet")
    console.log("x1 =",(-b + Math.sqrt(b**2 - 4*a*c))/(2*a));
    console.log("x1 =",(-b - Math.sqrt(b**2 - 4*a*c))/(2*a));
}
*/
if (a==0 && b==0){
    console.log("PT vo nghiem")
} else if (a==0){
    console.log("PT co 1 nghiem",-c/b);
} else {
    let delta=b**2 - 4*a*c;
    if (delta < 0 ){
    console.log("PT vo nghiem");
} else if (delta == 0 ){
    console.log("PT co 1 nghiem kep =",-b/(2*a));
} else if (delta > 0 ){
    console.log("PT co 2 nghiem phan biet")
    console.log("x1 =",(-b + Math.sqrt(delta))/(2*a));
    console.log("x1 =",(-b - Math.sqrt(delta))/(2*a));
}
}