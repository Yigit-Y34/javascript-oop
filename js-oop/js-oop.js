/*let araba = {
    marka: "Toyota",
    model: "Corolla",
    renk: "Kırmızı",
};

console.log(araba["renk"]);

araba.yil = 2023;

console.log(araba.yil);

let ogrenci = {
    isim: "Yiğit",
    yas: 17,
    adres: {
        sehir: "İzmir",
        ilce: "Aliağa"
    }
};

console.log(ogrenci.adres.sehir);

console.log(ogrenci.adres.ilce);

let telefon = {
    marka: "Apple",
    model: "iPhone 14",
    tanit: function() {
        console.log("Bu Telefon " + this.marka + " " + this.model + ".");
    }
}

telefon.tanit();

let araba = {
    marka: "Toyota",
    model: "Corolla",
    renk: "Kırmızı"
}

for (let key in araba) {
    console.log(key + ": " + araba[key]);
}


///////////////////////////////////////////////////////////////////////////////////////

let kullaniciYonetimi = {

    kullanıcılar: [],

    ekle: function(isim, email, yas) {
        this.kullanıcılar.push({ isim: isim, email: email, yas: yas });
        console.log("Kullanıcı eklendi: " + isim);
    },

    listele: function() {
        console.log("Kullanıcılar:");
        for (let i = 0; i < this.kullanıcılar.length; i++) {
            let kullanıcı = this.kullanıcılar[i];
            console.log((i + 1) + ". " + kullanıcı.isim + " - " + kullanıcı.email + " - " + kullanıcı.yas);
        }
    },
    sil: function(email) {

        for (let i = 0; i < this.kullanıcılar.length; i++) {
            if (this.kullanıcılar[i].email === email) {
                console.log("Silinen Kullanıcı:");
                this.kullanıcılar.splice(i, 1);
                console.log(email);
                break;
            }
        }
    }
};

kullaniciYonetimi.ekle("Yiğit", "yigit@example.com", 17);
kullaniciYonetimi.ekle("Cihat", "Cihat@example.com", 16);

kullaniciYonetimi.listele();

kullaniciYonetimi.sil("Cihat@example.com");*/

///////////////////////////////////////////////////////////////////////////////////////////////

/*
let GorevYonetimi = {
    gorevler: [],

    ekle: function(baslik) {
        let id = this.gorevler.length + 1;
        this.gorevler.push({ id: id, baslik: baslik, tamamlandı: false });
        console.log("Görev eklendi: " + baslik);
    },
    listele: function() {
        console.log("Görevler:");
        for (let i = 0; i < this.gorevler.length; i++) {
            let gorev = this.gorevler[i];
            console.log("ID: " + gorev.id + " " + "Başlık: " + gorev.baslik + " : " + (gorev.tamamlandı ? "Tamamlandı" : "Hala tamamlanmadı"));
        }
    },
    tamamla: function(id) {
        for (let i = 0; i < this.gorevler.length; i++) {
            if (this.gorevler[i].id === id) {
                this.gorevler[i].tamamlandı = true;
                console.log("Görev tamamlandı: " + this.gorevler[i].baslik);
                break;
            }
        }
    },
    sil: function(id) {
        for (let i = 0; i < this.gorevler.length; i++) {
            if (this.gorevler[i].id === id) {
                this.gorevler[i].tamamlandı = true;
                console.log("Görev Silindi:");
                this.gorevler.splice(i, 1);
                console.log(id);
                break;
            }
        }
    }
}

GorevYonetimi.ekle("login page");
GorevYonetimi.ekle("image optimizasyonu");
GorevYonetimi.listele();
GorevYonetimi.tamamla(1);
GorevYonetimi.sil(2);*/