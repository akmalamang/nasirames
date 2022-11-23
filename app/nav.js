const sp2 = document.querySelector('.sp2');
const sp1 = document.querySelector('.sp1');
const sp3 = document.querySelector('.sp3');
const con_sp = document.querySelector('.con-span');
const item = document.querySelector('.item');
const daftarMenu = document.querySelector('.daftar-menu');

con_sp.addEventListener('click', () => {
  sp2.classList.toggle('none');
  sp1.classList.toggle('up');
  sp3.classList.toggle('down');
  item.classList.toggle('tambah');
  daftarMenu.classList.toggle('opa');
});

let h1 = document.querySelectorAll('.c-h');
h1.forEach((a) => {
  a.classList.add('capitalize');
});
