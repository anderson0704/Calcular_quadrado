function calcularQuadrados() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);

    var quadrado1 = valor1 * valor1;
    var quadrado2 = valor2 * valor2;
    var quadrado3 = valor3 * valor3;

    var resultado = "O quadrado de " + valor1 + " é " + quadrado1 + ", o quadrado de " + valor2 + " é " + quadrado2 + " e o quadrado de " + valor3 + " é " + quadrado3 + ".";

    document.getElementById("resultado").innerText = resultado;
}