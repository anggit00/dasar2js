const methodMahasiswa = {
    makan: function (porsi){
        this.energi += porsi;
        console.log(`Hi ${this.nama}, selmata makan`);
    },
    main: function (jam){
        this.energi -= jam;
        console.log(`Hi ${this.nama}, selamat main`);
    },
    tidur: function (jam){
        this.energi += jam * 2;
        console.log(`Hi ${this.nama}, selamat tidur`);
    }
}

function Mahasiswa (nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let anggit = Mahasiswa ('Anggit', 10);
let risky = Mahasiswa ('Risky', 10);

