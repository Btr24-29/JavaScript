/*let yas = Number(prompt("Yaşınızı giriniz"));
console.log(`Yaşınız : ${yas}`);

let butce = Number(prompt("Maaşınızı giriniz"));
console.log(`Maaş : ${butce}`);

if (yas>18 && butce>2000)
{
    alert("Ehliyet sınavına girebilirsiniz")
}
else
{
    alert("Ehliyet sınavına giremessiniz")
}
*/
/*
let sinav1 = Number(prompt("1.Sınav notunuzu giriniz"))
let sinav2 = Number(prompt("2.Sınav notunuzu giriniz"))
let sinav3 = Number(prompt("3.Sınav notunuzu giriniz"))

let ortalama = ((sinav1*20)/100) + ((sinav2*30)/100) + ((sinav3*50)/100)

if (ortalama > 60)
{
    alert("Tebrikler, Dersten geçtiniz")
}    
else
{
    alert("kaldınız ;(")
}    
*/
/*
let kilo = Number(prompt("Kilonuzu giriniz"))
let boy = Number(prompt("Boyunuzu giriniz"))

BKI = kilo/(boy*boy)

if (BKI < 18.5)
{
    alert("İdeal kilonun altında")
}
else if  (BKI >= 18.5 && BKI <=24.9)
{
    alert("İdeal kiloda")
}
else if (BKI >= 25 && BKI <= 29.9)
{
    alert("İdeal kilonun üstünde")
}
else if (BKI>= 30 && BKI <= 34.9)
{
    alert("Sınırdasın brom" )
}
else
{
    alert("ob3z")
}
    */
/*
let sayi = prompt("1 ile 5 arasında sayı giriniz")
switch(sayi)
{
    case "1":
        alert("girilen sayı 1'dir");
        break;
    case "2":
        alert("girilen sayı 2'dir");
        break;
    case "3":
        alert("girilen sayı 3'dür");
        break;
    case "4":
        alert("girilen sayı 4'tür");
        break;
    case "5":
        alert("girilen sayı 5'tir");
        break;
    default:
        alert("Hatalı giriş yaptınız")

}
        */
/*
let metin = "MERHABA DÜNYA";
alert(metin.toLowerCase());

let metin2 = "merhaba dünya";
alert(metin.toUpperCase());
*/
/*
let mevsim = prompt("Mevsimi giriniz")
mevsim.toLocaleLowerCase();

switch(mevsim)
{
    case "kış":
        alert("Önerilen aktivite = KAYAK");
        break;
    case "yaz":
        alert("önerilen aktivite = YÜZME");
        break;  
    case "ilkbahar":
        alert("önerilen aktivite DOĞA YÜRÜYÜŞÜ");
        break;
    case "sonbahar":
        alert("önerilen aktivite = YAPRAK TOPLAMA");
        break;
    default:
        alert("Hatalı giriş yaptınız, Girilebilir mevsimler : kış, yaz, ilkbahar, sonbahar")  

}
*/
/*
document.writeln("<u> 0'dan 10'a kadar çift sayılar : </u> " + " <br> ");
for (let i=0;i<=10;i+=2)
{
    document.writeln(i);
}
*/

/*let sayi = Number(prompt("sayı giriniz"))
let faktoriyel = 1

for (let i =1; i<sayi; i++)
{
    faktoriyel*=i;
}
alert(sayi + " Sayısının faktoriyeli " + faktoriyel);
*/

let sifre = 1234
deneme_sayisi = 3
let sifre_giris = prompt("şifrenizi giriniz")
if (sifre != sifre_giris)
{
    for (let i; i<=deneme_sayisi; i -= 1)
    {
        deneme_sayisi-=i;
        alert("Kalan deneme sayısı : " + i)
    }
}
    
