//Manipulasi Array

//1. Menambah isi array

// var arr1 = [];
// arr1 [0] = "Anggit";
// arr1 [1] = "Akbar";
// arr1 [2] = "Maulana";
// arr1 [4] = "Jhon";
// console.log(arr1);

//2. Mwnghaapus isi array

// var arr2 = ['Doni','Jaka','Dadan', 'komar']
// arr2[2] = undefined;
// console.log(arr2);

//3. Menampilkan isi array

// var arr3 = ['Doni','Jaka','Dadan', 'Komar']

// for (i = 0; i < arr3.length; i++){
//     console.log("Mahasiswa ke-"+ (i + 1) + ' : ' + arr3[i]);
// }

//Method Array
//1.Join

// var namaMhs = ['Doni','Jaka','Dadan','Koni','Sofan'];
// var angka =[1,3,4,2,6,9,8,7,5,20,10,30];

//1. Method "push" digunakan untuk menambah element dari belakang, untuk method ini bisa langsung menambahkan 2 element

//arr4.push('Nara', 'Fiqi');

//2. Method "pop" digunakan untuk menghapus 1 element dari belakang

//arr4.pop();

//3. Method "unshift" digunakan untuk menambah element dari depan

//arr4.unshift('Fikri','Koni')

//4. Method "shift" digunakan untuk menghapus 1 element dari depan

//arr4.shift();

//5. Method "splice" digunakan untuk mnambahkan elemnet di tengah array
//splice(indexAwal, MauDihapusBerapa, Elementbaru1, Elementbaru2)

//arr4.splice(2,1,'Sofyan','Nara');

//6. Method "silice" digunakan untuk memotong array dan dijadikan array baru
//silice(indexAwal,indexAkhir) index awal akan terbawa dan index akhir tidak

//var arrN = arr4.slice(2,4);
//console.log(arr4.join(' - ')); //Method Join
//console.log(arrN.join(' - '));

// angka.forEach(function(j){
//     console.log(j);
// })

//7. Method "forEach" pengulangan untuk array

// namaMhs.forEach(function(e,i){
//     console.log('Mahasiswa ke '+ (i+1) +' : '+ e)
// })

//8. Method "map" pengulangan untuk array dan dapat mengembalikan nilai array

// var angka2 = angka.map(function(j){
//     return j * 2;
// })
// console.log(angka2.join(' - '));

//9. Method "sort"

// angka.sort()
// console.log(angka.join('-'));

// angka.sort(function(a,b){
//     return a - b
// });

// console.log(angka.join('-'));

//10. Method "filter" mencari nilai dalam array dan mengembalikan dalam bentuk array

var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.filter(function(x){
    return x > 5;
});
console.log(angka2.join('-'));

//11. Method "find" mencari nilai 1 element array

var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angkaBaru = angka.find(function(e){
    return e > 5;
});
console.log(angkaBaru);