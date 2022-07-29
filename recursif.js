function cetakAngka (a) {
    if (a==0) return;
    console.log(a);
    cetakAngka(a-1);
}
cetakAngka(10)

function faktorial (n) {
    if  (n === 0 ) return 1;
    return n * faktorial (n-1); 
}
console.log(faktorial(5));