/*
1. Menyusun Barisan Bintang
*/

var rows1 = 5;
var i = 0;
for (i = 0; i < rows1; i++) {
    console.log('*');
}

/*
2. Menyusun Barisan Bintang Dengan Nested Looping
*/

var rows2 = 5;
var j = 0;
var s = '';
for (i = 1; i <= rows2; i++) {
    s = '';
    for (j = 1; j <= rows2; j++) {
        s = s + '*';
    }
    console.log(s);
}

/*
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
*/

var rows3 = 5;
for (i = 1; i <= rows3; i++) {
    s = '';
    for (j = 1; j <= i; j++) {
        s = s + '*';
    }
    console.log(s);
}
