//generate angka random 1-10
let angka = Math.floor(Math.random() * 10)+1;
console.log(angka);


var hasil = ''
var i = 2;
while(hasil !== 'Benar' && i <= 2){
//input angka tebakan
var n = prompt('Masukan Angka Tebakan : 1 - 10');   
    if (n == angka){
        hasil = 'Benar';
    }else if(n < angka) {
        hasil = 'Salah';
        alert('kesempatan anda sebanyak ' + i);
    }else{
        hasil = 'Salah';
        alert('kesempatan anda sebanyak ' + i);
    }
  i--
 }
