var a = parseInt(prompt('Masukan Nilai 1 :'));
var b = parseInt(prompt('Masukan Nilai 2 :'));

function jumlahVolumeDuaKubus(a, b){
    var total, volumeA, volumeB;
    volumeA = a ** 3;
    volumeB = b ** 3;

    total = volumeA + volumeB;

    return total;
}


console.log(jumlahVolumeDuaKubus(a, b));//parameter bisa berupa variable
console.log(jumlahVolumeDuaKubus(8, 3));