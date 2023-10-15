// manipulasi Array

// 1. menambah isi array
// var arr = []
// arr[0] ="Sandika"
// arr[1] ="Galih"
// arr[2] ="Nofa"
// arr[6 = "Doddy"]

// console.log(arr);

// 2.Menghapus isi Array
// var arr =["Sandika", "Galih", "Nofa"]
// arr[1] = undefined
// console.log(arr)

// // 3.Menampilkan isi Array
// var arr =["Sahar", "Mulyadi", "Kiki", "Kemal",]

// for(var i = 0; i < arr.length; i++){
//     console.log('mahasiswa ke-' + (i+1) + ' : ' + arr[i])
// }







// Method pada Array

// // 1.join
// console.log(arr.join(' - '));

// 2.push & pop
// arr.push('Doddy')
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3.unshift & shift
// arr.unshift('Doddy')
// arr.shift()

// console.log(arr.join(' - '));


// 4.splice
// splice (indexawal, maudihapusberapa, elemnbaru1, elemenbaru2, ...)
// arr.splice(1, 2, 'Doddy', 'fitri' );
// console.log(arr.join(' - '));

// 5,slice
// slice(awal, akhir)
var arr=["Sahar", "Kiki", "Kemal", "Doddy", "Fitri"]
// var arr2= arr.slice(1,4)
// console.log(arr.join(' - '))
// console.log(arr2.join(' - '))

// 6. foreach
var angka=[1,2,3,4,5,6,7,8];
var nama =['Sandika', 'Galih', 'Nofa'];
// for(var i = 0; i < angka.length; i++){
//     console.log(angka[i])
// }

// angka.forEach( function (e){
// console.log(e)
// })

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + ' Adalah : ' + e)
// })

// 7.map
// var angka= [1,2,5,3,6,8,4]
// var angka2 = angka.map(function(e){
//    return e * 2;
// });
// console.log(angka2.join(' - '));

//  8.sort
// var angka= [1,2,10,5,20,3,6,8,4,7]
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9.filter & find
var angka= [1,2,10,5,20,3,6,8,4,7]
var angka2 =angka.find(function(x){
return x > 5;
});

console.log(angka2.join(' - '))




