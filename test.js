/*console.log('merhaba');
console.log('benim adım berat');
console.warn('UYARI MESAJI');
console.error('HATA MESAJI');
console.table(['berat','tural','24']);



let isim2 = prompt('İsminizi Giriniz');
console.log('isminiz:'+ isim2);


let yas = prompt('Yaşınız');
console.log('yaşınız:'+ yas);

let onay2 = confirm('kabul ediyor musunuz?')*/

Swal.fire({
  title: "<strong>HTML <u>example</u></strong>",
  icon: "info",
  html: `
    You can use <b>bold text</b>,
    <a href="#" autofocus>links</a>,
    and other HTML tags
  `,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: `
    👍 Great!
  `,
  confirmButtonAriaLabel: "Thumbs up, great!",
  cancelButtonText: `
    👎
  `,
  cancelButtonAriaLabel: "Thumbs down"
});

