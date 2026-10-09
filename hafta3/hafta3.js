/*let isim = prompt("isminizi giriniz");
     console.log(isim);

let yas = prompt("yaşınızı giriniz");
     console.log(yas);

document.writeln("<h1>Merhaba "+ isim + "</h1>");   
document.writeln("<h1>Yaşınız "+ yas + "</h1>");

let sayi1 = prompt("1. sayıyı giriniz");
console.log("Girilen birinci sayı :" + sayi1);
let sayi2 = prompt("2. sayıyı giriniz");
console.log("Girilen ikinci sayı :" +sayi2);
let toplam = Number(sayi1)+Number(sayi2)
console.log("Toplam sayı : "+ toplam);

document.writeln("<h1>Sayınızın toplamı şudur : "+toplam+"</h2>");

const dogru_Sifre = "1234";

let girilen_Sifre=prompt("şifrenizi Giriniz")
document.writeln("<h1>Girdiğiniz şifre :"+ girilen_Sifre +  "</h1>");
document.writeln("<h1>Doğru Şifre :"+ dogru_Sifre +  "</h1>");*/

let urunAdi = prompt("Ürün adı");
let kategori = prompt("Kategori nedir");
let aciklama = prompt("Açıklama nedir");
let fiyat = prompt("Fiyatı giriniz");
let adet = prompt("Kaç adet");
prompt("bilgileriniz için teşekkürler hesaplanıyor");

let ara_toplam = Number(fiyat)*  Number(adet)
let KDV = Number(ara_toplam)*0.18
let kargo = 49;

let son_toplam = Number(ara_toplam)+ Number(KDV)+ Number(kargo);
document.write("<h1>Son toplam şu: "+ son_toplam+ "</h1>");

document.write("<h1>Ürün Adı: "+ urunAdi+ "</h1>");
document.write("<h1>Kategori: "+ kategori+ "</h1>");
document.write("<h1>Açıklama: "+ aciklama+ "</h1>");
