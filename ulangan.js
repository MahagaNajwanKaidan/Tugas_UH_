// No.1

function cetakFunction(a){
    return`Hallo Nama saya` + a
}

console.log(cetakFunction(" Mahaga "));

// No.2

function myFunction(a,b){
    return angka1+angka2
}
let angka1 = 20;

let angka2 = 7;

let output = myFunction("angka1.angka2");

console.log(output);

// No.3

 Hello = () => {
   return "Hello";
};

console.log(Hello);

// no.4
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
}
console.log(obj.bahasa);

// no.5
let array = ["john Doe", "laki-laki" , "bacabuku" , 1992 ];

let man = {
    nama : array [0],
    jenisklamin : array [1], 
    hobi: array [2],
    lahir: array [3],

};
console.log(man);

// no.6

let buah = [{
    nama : "nanas", 
    Warna : "kuning",
    adaBijinya : "tidakAda",
    harga : 9000,
},{
    nama : "jeruk",
    Warna : "orange",
    adaBijinya : "ada",
    harga : 8000,
},{
    nama : "semangka", 
    Warna : "hijau & merah",
    adaBijinya : "ada",
    harga : 9000,
},{
    nama : "pisang",
    Warna : "kuning",
    adaBijinya :"tidakAda",
    harga : 7000,
}
];

let bijinya = buah.filter((buah) => buah.adaBijinya === "tidakAda");

 console.log(bijinya);

