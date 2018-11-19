/*
Tugas 1
*/

function shoutOut() {
    return 'Halo Function!';
}
console.log(shoutOut());

/*
Tugas 2
*/

function calculateMultiply(n1, n2) {
    return n1 * n2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

/*
Tugas 3
*/

function processSentence(na, ag, ad, ho) {
    return 'Nama saya ' + na + ', umur saya ' + ag + ' tahun, alamat saya di ' + ad + ', dan saya punya hobby yaitu ' + ho + '!';
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
