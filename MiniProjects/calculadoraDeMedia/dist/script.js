//Resultado dos dados inseridos no formulário - Results from form
var formulario = document.querySelector("form");

//Ações para limpar e calcular - Action to clear and compute
var btnLimpar = document.querySelector("#clear");
var btnCalcular = document.querySelector("#compute");

// Input notas - Input with grades
var notaPrimeiroBimestre = document.querySelector(".input-1");
var notaSegundoBimestre = document.querySelector(".input-2");
var notaTerceiroBimestre = document.querySelector(".input-3");
var notaQuartoBimestre = document.querySelector(".input-4");

var situacaoFinal = document.querySelector(".situacao-final");

//Calcular a média
function calcularMedia(
  notaPrimeiroBimestre,
  notaSegundoBimestre,
  notaTerceiroBimestre,
  notaQuartoBimestre
) {
  let calculo =
    (notaPrimeiroBimestre +
      notaSegundoBimestre +
      notaTerceiroBimestre +
      notaQuartoBimestre) /
    4;
  return calculo;
}

// Formatação do resultado
function calculoFinal(mediaFinal) {
  let calculoFinal = "";

  if (mediaFinal >= 5) {
    calculoFinal = "Aprovado(a)";
    document.querySelector(
      ".situacao-final"
    ).textContent = `Sua média é ${mediaFinal} Aprovado(a)`;
    console.log("adicionar aprovado");
  } else if (mediaFinal <= 4) {
    calculoFinal = "Reprovado(a)";
    document.querySelector(
      ".situacao-final"
    ).textContent = `Sua média é ${mediaFinal} Reprovado(a)`;
    console.log("adicionar reprovado");
  } else {
    calculoFinal = "Recuperação";
    document.querySelector(
      ".situacao-final"
    ).textContent = `Sua média é ${mediaFinal} Recuperação`;
    console.log("adicionar recuperação");
  }
  return calculoFinal;
}

btnCalcular.addEventListener("click", function (e) {
  console.log("Calcular Média");
  let nota1 = parseFloat(notaPrimeiroBimestre.value);
  let nota2 = parseFloat(notaSegundoBimestre.value);
  let nota3 = parseFloat(notaTerceiroBimestre.value);
  let nota4 = parseFloat(notaQuartoBimestre.value);
  let media = calcularMedia(nota1, nota2, nota3, nota4);

  if (isNaN(media) || media < 0) {
    console.log("Número indefinido");
    document.querySelector(".situacao-final").textContent = "Nota inválida";
  } else {
    situacaoFinal.value = calculoFinal(media);
    calculoFinal.value = calculoFinal(media);
  }
  e.preventDefault();
});

btnLimpar.addEventListener("click", function () {
  document.querySelector(
    ".situacao-final"
  ).textContent = `Seu resultado irá aparecer aqui`;
  console.log("adicionar texto inicial");
});