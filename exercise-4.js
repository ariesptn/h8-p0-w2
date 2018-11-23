var hari = 31;
var bulan = 12;
var tahun = 2200;
var namaBulan = '';

if (hari < 1 || hari > 31) {
    console.log('format hari salah');
} else if (bulan < 1 || bulan > 12) {
    console.log('format bulan salah');
} else if (tahun < 1900 || tahun > 2200) {
    console.log('tahun hanya bisa dari 1900 hingga 2200');
} else {
    switch (bulan) {
        case 1:
            namaBulan = 'Januari';
            break;
        case 2:
            namaBulan = 'Febuari';
            break;
        case 3:
            namaBulan = 'Maret';
            break;
        case 4:
            namaBulan = 'April';
            break;
        case 5:
            namaBulan = 'Mei';
            break;
        case 6:
            namaBulan = 'Juni';
            break;
        case 7:
            namaBulan = 'Juli';
            break;
        case 8:
            namaBulan = 'Agustus';
            break;
        case 9:
            namaBulan = 'September';
            break;
        case 10:
            namaBulan = 'Oktober';
            break;
        case 11:
            namaBulan = 'November';
            break;
        case 12:
            namaBulan = 'Desember';
            break;
    }
    console.log(hari + ' ' + namaBulan + ' ' + tahun);
}
