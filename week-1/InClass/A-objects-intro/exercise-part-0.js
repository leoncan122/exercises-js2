/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/

let laptop = {
  brand: "Asus",
  screenSize: 13,
  ram: 8,
  isTouchscreen: false,
  color: "grey",
  lugarFabricacion: "ES",
  stock: 3000,
  almacenamiento: ['hdd', 'ssd', 'cdrom', 'floppy', 'usb', 'microsd'],
  puertos: ['wga', 'usb', 'hdmi', 'ethernet'],
  procesador: {
    procesadorMarca: "intel",
    ghz: 1.8,
    turbo: false
  },
  salidas: function (cantidad) {
    this.stock = this.stock - cantidad;
  },
  entradas: (cantidad) => {
    this.stock = this.stock + cantidad;
  } //porque asi no?


};
laptop.salidas(100);
console.log(laptop.stock);
console.log(laptop.salidas(100));

console.log("--------------");
console.log(Object.keys(laptop));

let arr = Object.keys(laptop);

arr.forEach(elemento => {
  console.log(laptop[elemento])
}
)
