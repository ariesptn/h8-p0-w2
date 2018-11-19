var hari = 31;
var bulan = 12;
var tahun = 2200;
var namabulan = '';

if (hari < 1 || hari > 31) {
    console.log('format hari salah');
} else if (bulan < 1 || bulan > 12) {
    console.log('format bulan salah');
} else if (tahun < 1900 || tahun > 2200) {
    console.log('tahun hanya bisa dari 1900 hingga 2200');
} else {
    switch (bulan) {
        case 1:
            namabulan = 'Januari';
            break;
        case 2:
            namabulan = 'Febuari';
            break;
        case 3:
            namabulan = 'Maret';
            break;
        case 4:
            namabulan = 'April';
            break;
        case 5:
            namabulan = 'Mei';
            break;
        case 6:
            namabulan = 'Juni';
            break;
        case 7:
            namabulan = 'Juli';
            break;
        case 8:
            namabulan = 'Agustus';
            break;
        case 9:
            namabulan = 'September';
            break;
        case 10:
            namabulan = 'Oktober';
            break;
        case 11:
            namabulan = 'November';
            break;
        case 12:
            namabulan = 'Desember';
            break;
    }
    console.log(hari + ' ' + namabulan + ' ' + tahun);
}
