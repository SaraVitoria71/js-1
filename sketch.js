let campoIdade;
let campoDrama;
let campoComedia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoDrama = createCheckbox("Gosta de drama?");
  campoComedia = createCheckbox("Gosta de comédia?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeComedia = campoComedia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeDrama, gostaDeComedia);

  fill(color(0, 0, 128));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama, gostaDeComedia) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "A Origem";
    } else {
      if (idade >= 12) {
        if (gostaDeDrama || gostaDeComedia) {
          return "O Mágico de Oz";
        } else {
          return "A Fantástica Fábrica de Chocolates";
        }
      } else {
        if (gostaDeDrama) {
          return "A Viagem de Chihiro";
        } else {
          return "Peter Pan";
        }
      }
    }
  } else {
    if (gostaDeDrama) {
      return "Divertida Mente";
    } else {
      return "Toy Story";
    }
  }
}