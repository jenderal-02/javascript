var jmlangkot = 10
var angkotberoprasi =6

for(noangkot =1; noangkot <= jmlangkot; noangkot++){

    if(noangkot <= 6) {
        console.log('Angkot No. ' + noangkot + ' Beroprasi dengan baik')
    }

    else if( noangkot === 8) {
        console.log('Angkot No. ' + noangkot + ' sedang Lembur')
    }

    else{
        console.log('Angkot No. ' + noangkot + ' sedang tidak beroprasi')
    }
}