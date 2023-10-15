var jmlangkot= 10
var angkotberoprasi = 6
var noangkot = 1
while( noangkot  <= angkotberoprasi ) {
    console.log('Angkot NO. ' + noangkot + ' beroprasi dengan baik.')
noangkot++
}

for(var noangkot = angkotberoprasi +1; noangkot <= jmlangkot; noangkot++){
    console.log('Angkot No. ' + noangkot + ' sedang tidak beroprasi.')
}