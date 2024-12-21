/*const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num ** 2);
console.log(squared);

const numbers = [10, 20, 30, 40];
const greaterThanTwenty = numbers.filter(num => num > 20);
console.log(greaterThanTwenty);

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));

const urunler = [
    { isim: "Telefon", fiyat: 10000 },
    { isim: "Bilgisayar", fiyat: 20000 },
    { isim: "Tablet", fiyat: 8000 },
];

const KDV_ORANI = 0.18;

const yeniUrun = urunler.map(function(urun) {
    return {
        isim: urun.isim,
        fiyat: urun.fiyat * (1 + KDV_ORANI)
    };
});

console.log(yeniUrun);*/


/*const kdvliUrun = urunler.map(num => (num.fiyat * 0.18) + num.fiyat);
console.log(kdvliUrun);


const urunler = [
    { isim: "Telefon", fiyat: 10000 },
    { isim: "Bilgisayar", fiyat: 20000 },
    { isim: "Tablet", fiyat: 8000 },
];

const filtreleme = urunler.filter(function(urun) {
    return urun.fiyat > 10000;
});

console.log(filtreleme);

const toplamFiyat = urunler.reduce(function(toplam, urun) {
    return toplam + urun.fiyat;
}, 0);

console.log(toplamFiyat);

const urunIsimleri = urunler.forEach(urun => console.log(urun.isim))

console.log(urunIsimleri);

const ogrenciler = [
    { isim: "Ali", not: 85 },
    { isim: "Ayşe", not: 92 },
    { isim: "Fatma", not: 76 },
    { isim: "Mehmet", not: 59 },
];

const harfNotu = ogrenciler.map(function(ogr) {
    let harfliNot = ""
    if (ogr.not >= 90) {
        harfliNot = "AA";
    } else if (ogr.not >= 80) {
        harfliNot = "BB";
    } else if (ogr.not >= 70) {
        harfliNot = "CC";
    } else if (ogr.not >= 60) {
        harfliNot = "DD";
    } else {
        harfliNot = "FF";
    }

    return {
        isim: ogr.isim,
        harfliNot: harfliNot,
    };
});

console.log(harfNotu);

const ogrenciler = [{ isim: "Ali", yas: 16 },
    { isim: "Ayşe", yas: 19 },
    { isim: "Fatma", yas: 17 },
    { isim: "Mehmet", yas: 22 },
]

const kucukYasOlanlar = ogrenciler.filter(function(ogr) {
    return ogr.yas < 18;
});

console.log("Yaşı Küçük Olanlar: ", kucukYasOlanlar);

const sepet = [
    { urun: "Telefon", adet: 2, fiyat: 5000 },
    { urun: "Kulaklık", adet: 1, fiyat: 800 },
    { urun: "Kılıf", adet: 3, fiyat: 100 },
];

const toplamTutar = sepet.reduce(function(toplam, urun) {
    return toplam + (urun.adet * urun.fiyat);
}, 0);

console.log(toplamTutar);

const urunler = [
    { isim: "Telefon", stok: 5 },
    { isim: "Tablet", stok: 0 },
    { isim: "Laptop", stok: 3 },
];

urunler.forEach(function(urun) {
    if (urun.stok > 0) {
        console.log(urun.isim + " stokta var: " + urun.stok + " Tane");
    } else {
        console.log(urun.isim + " stokta yok.");
    }
});

const ogrenciler = [
    { isim: "Ali", yas: 16, not: 85 },
    { isim: "Ayşe", yas: 19, not: 92 },
    { isim: "Fatma", yas: 22, not: 76 },
    { isim: "Mehmet", yas: 17, not: 59 },
];

const harfNotu = ogrenciler.map(function(ogr) {
    let harfliNot = ""
    if (ogr.not >= 90) {
        harfliNot = "AA";
    } else if (ogr.not >= 80) {
        harfliNot = "BB";
    } else if (ogr.not >= 70) {
        harfliNot = "CC";
    } else if (ogr.not >= 60) {
        harfliNot = "DD";
    } else {
        harfliNot = "FF";
    }

    return {
        isim: ogr.isim,
        harfliNot: harfliNot,
    };
});*/