const p1 = new Producto("Tornillo estrella 5mm", 0.25);
const p2 = new Producto("Alicates", 9.25);

console.log(p1);
console.log(p2);

p1.incrementarStock(50);
console.log(p1.valorEnStock());

p2.incrementarStock(1500);
p2.precio = 12;
console.log(p2);
p2.disminuirStock(14000);
console.log("Valor stock " + p2.valorEnStock());
