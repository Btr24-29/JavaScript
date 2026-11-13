let urunFiyati = Number(prompt("ürün Fiyatını Giriniz"));
const indirimliFiyatiHesapla = function(orijinalFiyat,indirimFiyat)
{
    const indirimMiktari = orijinalFiyat*(indirimFiyat/100);
    const nihaiFiyat = orijinalFiyat-indirimMiktari;
    return nihaiFiyat;

}
let kazancim = indirimliFiyatiHesapla(urunFiyati,25);
document.writeln(`<b>Ürünün %25 indirimle : ${kazancim} TL'ye satılıcaktır</b>`)
