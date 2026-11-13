
const produtos = [
    {
        nome: "Buquê de Rosas",
        categoria: "Flores",
        preco: 89.90
    },
    {
        nome: "Girassol",
        categoria: "Flores",
        preco: 25.00
    },
    {
        nome: "Orquídea",
        categoria: "Plantas",
        preco: 75.00
    },
    {
        nome: "Lírio Branco",
        categoria: "Flores",
        preco: 45.00
    },
    {
        nome: "Suculenta",
        categoria: "Plantas",
        preco: 18.00
    },
    {
        nome: "Arranjo Primavera",
        categoria: "Arranjos",
        preco: 110.00
    }
];

const listaProdutos = document.getElementById("listaProdutos");
const campoPesquisa = document.getElementById("campoPesquisa");

function exibirProdutos(lista) {
    listaProdutos.innerHTML = "";

    lista.forEach(function(produto) {
        const card = document.createElement("div");

        card.classList.add("produto");

        card.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.categoria}</p>
            <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
        `;

        listaProdutos.appendChild(card);
    });
}

campoPesquisa.addEventListener("input", function() {
    const pesquisa = campoPesquisa.value.toLowerCase();
    const filtroCategoria = document.getElementById("filtroCategoria");

    const produtosFiltrados = produtos.filter(function(produto) {
        return produto.nome.toLowerCase().includes(pesquisa);
    });

    exibirProdutos(produtosFiltrados);
});

exibirProdutos(produtos);
