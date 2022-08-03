function Mahasiswa (nama, energi){

    this.nama = nama;
    this.energi = energi;

}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    console.log(`Hi ${this.nama} selamat makan`) 
}

Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    console.log(`Hi ${this.nama} selamat main`)
}

Mahasiswa.prototype.tidur = function (jam){
    this.energi += jam * 2;
    console.log(`Hi ${this.nama} selamat tidur`);
}

let anggit = new Mahasiswa('Anggit', 10);
let puteri = new Mahasiswa('Puteri', 10);