//1. literal
var mahasiswa = {
    nama : 'Anggit Akbar',
    nrp: '046672938',
    email : 'anggit@gmail.com',
    jurusan : 'Teknik Komputer'
}

//2. function declaration

function buatObjectMahasiswa (nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan= jurusan;

    return mhs;
}

var mhs3 = buatObjectMahasiswa('Anggit', '82738728372', 'anggit@gmail.com', 'Teknik Komputer');

//3. cosntractor
function Mahasiswa (nama, nrp, email, jurusan){

    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    
}
var mhs4 = new Mahasiswa('Anggit', '9728823', 'anggit@gmail.com', 'Teknik Komputer');
