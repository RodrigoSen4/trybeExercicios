const notaDoALuno = 109;


if (notaDoALuno < 0 || notaDoALuno > 100) {
  console.log("Erro, nota incorreta!");
} else if (notaDoALuno >= 90) {
  console.log("A");
} else if (notaDoALuno >= 80) {
  console.log("B");
} else if (notaDoALuno >= 70) {
  console.log("C");
} else if (notaDoALuno >= 60) {
  console.log("D");
} else if (notaDoALuno >= 50) {
  console.log("E");
} else {
  console.log("F");
}