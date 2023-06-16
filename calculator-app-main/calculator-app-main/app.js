function calculadora(operacao, valor) {
  if (operacao === "acao") {
    if (valor === "RESET") {
      document.getElementById("visor").value = "";
    }
    if (
      valor === "+" ||
      valor === "*" ||
      valor === "/" ||
      valor === "-" ||
      valor === "."
    ) {
      document.getElementById("visor").value += valor;
    }
    if (valor === "=") {
      let valorCampo = eval(document.getElementById("visor").value);
      document.getElementById("visor").value = valorCampo;
    }
    if (valor === "del") {
      document.getElementById("visor").value = "";
    }
  } else if (operacao === "valor") {
    document.getElementById("visor").value += valor;
  }
}
