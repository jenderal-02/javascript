var penumpang =[];
var tambahpenumpang = function(namapenumpang, penumpang){
    // jika angkot kosong
    if( penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namapenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    }
    else{
        // telusuri seluruh kursi dari awal
        for (var i=0; i < penumpang.length; i++)
            // jikaada kursi kosong
            if(penumpang[i] == undefined){
            // tambah penumpang di kursi tersebut
            penumpang[i] = namapenumpang;
            // kembalikan isi array & keluar dari function
            return penumpang;
            }   
        // jika sudah ada nama yang sama
        else if(penumpang[i] == namapenumpang){
            // tampilkan pesan kesalahannya
            console.log(namapenumpang + ' sudah ada di dalam angkot.')
            // kembalikan isi array & keluar dari function
            return penumpang;
        }
        // jika seluruh kursi terisi
        else if (i==penumpang.length - 1) {
            // tambah penumpang di akhir array
            penumpang.push(namapenumpang)
            // kembalikan isi array & keluar dari function
            return penumpang;
        };
    };
};


var hapuspenumpang = function (namapenumpang, penumpang){
    if(penumpang.length == 0) {
        console.log('Angkot masih kosong')
        return penumpang;
    }else {
        for( var i=0; i<penumpang.length; i++){
            if(penumpang[i] == namapenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            }else if(i == penumpang.length - 1){
                console.log(namapenumpang + ' tidak ada di dalam angkot ini.')
                return penumpang;
            }
        }
    }

    return penumpang;
};