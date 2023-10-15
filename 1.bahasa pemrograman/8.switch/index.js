var item = prompt('masukkan nama makanan/minuman :\n(cth: nasi, daging, susu, hamburger, softdrink)')

switch(item){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan/minuman sehat')
        break
    case 'hamburger':
    case  'softdrink':
        alert('makanan/minuman tidak sehat')
        break
    default:
        alert('anda memasukkan makanan/minuman yang salah')
        break           
}



// contoh 2

// var angka = prompt('masukkan angka:')

// switch(angka){
//     case '1':
//         alert('anda memasukkan angka 1')
//         break
//     case '2':
//         alert('anda memasukkan angka 2')
//         break
//     case '3':
//         alert('anda memasukkan angka 3')
//         break
//         default:
//         alert ('angka yang kamu masukkan salah!')
//         break
// }



// contoh 1

// if(angka == 1){
//     alert('anda memasukkan angka 1')
// } 
// else if(angka == 2){
//     alert('anda memasukkan angka 2')
// }
// else if(angka == 3){
//     alert('anda memasukkan angka 3')
// }
// else{
//     alert('angka yang anda masukkan salah! ')
// }