/**
 * tambahPenumpang()
 * # 2 parameter:
 *      a. namaPenumpang
 *      b. arrayPenumpang
 * # Rules
 *      a. jika angkot kosong, penumpang naik di kursi pertama
 *      b. penumpang berikutnya duduk di kursi berikutnya
 *      c. jika ada kursi kosong (karena penumpang turun), penumoang yang naik berikutnya duduk di kursi kosong tersebut
 *      d. asumsi kursi tidak akan pernah penuh, dan akan terus bertambah jika ada penumpang naik
 *      e. nama penumpag tidak boleh sama 
 */


var penumpang = [];
var tambahPenumpang =  function (namaPenumpang, penumpang){
   //jika angkot kosong
   if (penumpang.length == 0 ){
    //tambah penumpang
    penumpang.push(namaPenumpang);
    //kembalikan isi array dan keluar dari function
    return penumpang;
   }else{
      //telusuri seluruh kursi dari awal
      for (var i = 0; i < penumpang.length; i++){
         //jika ada kursi kosong
         if (penumpang[i]== undefined){
            //tambah peunmpang
            penumpang[i] = namaPenumpang;
            //kembalikan isi array dan keluar dari function
            return penumpang;
            //jika nama penumpang ada yang sama
         } else if (penumpang[i] == namaPenumpang) {
            //tampilkan pesan kesalahanya
            console.log(namaPenumpang + ' Sudah ada di dalam angkot.')
            ////kembalikan isi array dan keluar dari function
            return penumpang;
            //jika seluruh kursi terisi
         } else if (i == penumpang.length -1){
            //tambah penumpang di akhir array 
            penumpang.push(namaPenumpang);
            //kembalikan isi array dan keluar dari function
            return penumpang;
         }
      }
   }
    
}

var hapusPenumpang = function(namaPenumpang, penumpang){
   if (penumpang.length == 0){
      console.log('Penumpang kosong');
   } else {
      for(var i = 0; i < penumpang.length; i++){
         if (penumpang[i] == namaPenumpang){
            penumpang[i] = undefined;
            return penumpang
         } else if (i == penumpang.length -1){
            console.log('Nama Penumpang '+ namaPenumpang + ' tidak ada di dalam angkot');
            return penumpang;
         }
      }
   }

}


