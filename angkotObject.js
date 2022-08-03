function Angkot (sopir, trayek, penumpang, kas){

    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas

    this.penumpangNaik = function (namaPenumpang){
       if (this.penumpang.length == 0){
           this.penumpang.push(namaPenumpang);
           return this.penumpang;
       }else {
            for (var i = 0; i < this.penumpang.length; i++){
                if (this.penumpang[i] == undefined){
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                }else if(this.penumpang[i] == namaPenumpang){
                    console.log('Penumpang ' +namaPenumpang+ ' sudah ada di dalam');
                    return this.penumpang;
                }else if (i == this.penumpang.length - 1){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
        
    }

    this.penumpangTurun = function (namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            console.log('Angkot masih kosong')
            return false;
        }else{
            for(var i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == namaPenumpang && bayar > 0){
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }else if(i == this.penumpang.length -1){
                     console.log('Nama ' +namaPenumpang+ ' tidak ada di dalam angkot');
                     return this.penumpang;
                }else if(bayar == 0 || bayar == undefined || bayar == false){
                    console.log('Penumpang tidak boleh turun')
                    return false;
                }
            }
        }
        
    }

}

var angkot1 = new Angkot('Sandika Galih',['Cicaheum', 'Cibiru'], [], 0 );