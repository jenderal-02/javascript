var nama = prompt('Masukkan Merk Heandphonemu:');
alert( nama);


alert('Warning Your Phone is not compatible')


var tes = confirm('Tetap Membuka?')
if(tes === true){
    alert('user menekan ok!')
}
else{
    alert('user menekan cancel')
}




alert ('Selamat Datang')
var lagi = true;
while(lagi === true){
    var nama = prompt('masukkan nama')
    alert('halo ' + nama)

    lagi = confirm('coba lagi')
}
alert('terima kasih')