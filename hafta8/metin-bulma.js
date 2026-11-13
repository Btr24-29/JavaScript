const metinUzunlugunuBul = metin=> metin.length;
let cumle = prompt("Bir Cümle Giriniz");
if (cumle == null || cumle.trim()==="")
{
    document.writeln("Lütfen Geçerli Bir Cümle Giriniz");
}
else
{
    let uzunluk=metinUzunlugunuBul(cumle.trim());
    document.writeln(`Girdiğiniz Cümlenin Uzunluğu: ${uzunluk} Karakterdir`)
}
