// Jawaban singkat untuk latihan Bab 2

// 1) Array: tambah elemen dan tampilkan panjang
const nums = [1, 
    2, 
    3
];
nums.push(
    4,
    5,
    7,
    8,
    10
);
console.log('Array nums:', nums);
console.log('Panjang array nums:', nums.length);

// 2) Array (akses)
const fruits = ['apel', 'pisang', 'jeruk'];
console.log('Item ke-2:', fruits[1]);

// 3) String (gabung & uppercase)
const first = 'Halo';
const last = 'Dunia';
console.log((first + ' ' + last).toUpperCase());

// 4) Number (operasi)
const panjang = 5;
const lebar = 3;
console.log('Luas:', panjang * lebar);

// 5) Boolean (cek genap)
function isEven(n) {
    return n % 2 === 0;
}
console.log('2 genap?', isEven(2));
console.log('3 genap?', isEven(3));

// 6) Comparison
const a = 10;
const b = 7;
if (a > b) console.log('a lebih besar');
else if (b > a) console.log('b lebih besar');
else console.log('sama');

// 7) Conditional (lulus/tidak)
let score = 75;
console.log(score >= 60 ? 'Lulus' : 'Tidak lulus');

// 8) Else-if (grade)
function gradeFromScore(s) {
    if (s >= 85) return 'A';
    if (s >= 70) return 'B';
    if (s >= 50) return 'C';
    return 'D';
}
console.log('Grade untuk 75:', gradeFromScore(75));

// 9) Object
const person = { name: 'Siti', age: 20 };
person.age = 21;
console.log('Person name:', person.name, 'age:', person.age);

// 10) Kombinasi: jumlah array
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log('Sum:', sum);