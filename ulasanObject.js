//1. literal object

// let mahasiswa = {
//     nama :'Anggit',
//     energi : 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//         return mahasiswa;
//     },
//     main: function(jam){
//         this.energi = this.energi - jam;
//         console.log(`Halo ${this.nama}, Selamay bermain`);
//         return mahasiswa;
//     }
// }

//2. fucntion declaration
// function Player (nama, energi){
    
//     let player = {};
//     player.nama = nama;
//     player.energi = energi;

//     player.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selmat makan`)

//     }

//     player.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama} Selamat bermain`);
//     }
// return player;

// } 

// let Anggit = Player ('Anggit',10);

// 3. construction
function Mahasiswa (nama, energi) {
    
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan`)
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat bermain`)
    }
}

let Anggit = new Mahasiswa('Anggit', 10);