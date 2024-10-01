let num1 = prompt("Introduce un número");
let num2 = prompt("Introduce otro número");

if (num1 > num2) {
  alert(
    "El resultado de la suma es " +
      (Number(num1) + Number(num2)) +
      " y su diferencia es " +
      (num1 - num2)
  );
} else {
  alert("El producto es " + num1 * num2 + " y la división es " + num1 / num2);
}
