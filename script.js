// Função para carregar a retrospectiva
function carregaRetrospectiva() {
  var retrospectiva = {
    mes01: {
      nome: "Janeiro",
      img: "img/show.png",
      descricao: "Show do Jão no Allianz Parque. Não imaginei que seria tão incrível!",
    },
    mes02: {
      nome: "Fevereiro",
      img: "img/contato-tecnologia.png",
      descricao: "Meu primeiro contato com tecnologia foi através do curso da Programaria. Desde então, não parei mais!",
    },
    mes03: {
      nome: "Março",
      img: "img/habilitacao.jpg",
      descricao:"Recebi minha habilitação provisória, depois de muita emoção haha.",
    },
    mes04: {
      nome: "Abril",
      img: "img/encontro-e-risadas.png",
      descricao: "Dei muitas risadas com pessoas importantes para mim.",
    },
    mes05: {
      nome: "Maio",
      img: "img/maceio.png",
      descricao: "Viajei para Maceió.",
    },
    mes06: {
      nome: "Junho",
      img: "img/curso-minas.png",
      descricao: "Iniciei o curso do Minas Programam <3!!!",
    },
    mes07: {
      nome: "Julho",
      img: "img/unhas.png",
      descricao: "Descobri um novo hobby este ano, sempre adorei fazer minhas unhas e percebi o quanto essa atividade me traz prazer.",
    },
    mes08: {
      nome: "Agosto",
      img: "img/integrante.png",
      descricao: "Tivemos um novo integrante na família.",
    },
    mes09: {
      nome: "Setembro",
      img: "img/comprinhas.png",
      descricao: "Participei da Bienal do Livro, um evento que amo e onde sempre encontro livros incríveis.",
    },
    mes10: {
      nome: "Outubro",
      img: "img/momentos-especiais.png",
      descricao: "Reencontrei pessoas que não via há muito tempo, e foi muito bom estar com eles.",
    },
    mes11: {
      nome: "Novembro",
      img: "img/evento.png",
      descricao: "Fui ao meu primeiro evento de tecnologia sozinha e adorei a experiência.",
    },
    mes12: {
      nome: "Dezembro",
      img: "img/estagio.png",
      descricao: "Estou animada para começar meu estágio, uma nova etapa!",
    },
  };

  var content = document.getElementById("content");

  for (var mes in retrospectiva) {
    content.innerHTML += `
      <div class="card">
        <img src="${retrospectiva[mes].img}" alt="Imagem representando ${retrospectiva[mes].nome}" class="card-img">
        <details>
          <summary>${retrospectiva[mes].nome}</summary>
          <p>${retrospectiva[mes].descricao}</p>
        </details>
      </div>
    `;
  }
}

// Chama a função para carregar a retrospectiva ao carregar a página
carregaRetrospectiva();

document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll(".card-img");

  imagens.forEach(img => {
    img.addEventListener("click", function () {
      // Se a imagem já está com zoom, remove o zoom
      if (img.classList.contains("zoomed")) {
        img.classList.remove("zoomed");
      } else {
        // Remove o zoom de todas as imagens antes de aplicar na nova
        imagens.forEach(imagem => imagem.classList.remove("zoomed"));
        img.classList.add("zoomed");
      }
    });
  });
});
