class Mahasiswa {
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        console.log(`Hi, ${this.nama} selamat makan`);
    }
    main(jam){
        this.energi -= jam;
        console.log(`Hi, ${this.nama} selamat main`); 
    }
    tidur(jam){
        this.energi += jam * 2;
        console.log(`hi, ${this.nama} selamt tidur`);
    }

}

let anggit = new Mahasiswa ('Anggit', 10);