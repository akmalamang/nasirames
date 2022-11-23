class Nav {
  constructor(nama, pesan, alamat) {
    this.nama = nama;
    this.pesan = pesan;
    this.alamat = alamat;
  }
  masuk(name) {
    this.nama += name;
    return this.nama;
  }
}
function masukNama() {
  let nama = prompt(`masukan nama`);
  return nama;
}
let nav1 = new Nav();
//eksekusi code
masukNama();
nav1.masuk(nama);
