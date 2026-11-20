const produtos = [
    { nome: "Buquê de Rosas", categoria: "Flores", preco: 89.90 },
    { nome: "Girassol", categoria: "Flores", preco: 25.00 },
    { nome: "Orquídea", categoria: "Plantas", preco: 75.00 },
    { nome: "Lírio Branco", categoria: "Flores", preco: 45.00 },
    { nome: "Suculenta", categoria: "Plantas", preco: 18.00 },
    { nome: "Arranjo Primavera", categoria: "Arranjos", preco: 110.00 }
];

const listaProdutos = document.getElementById("listaProdutos");
const campoPesquisa = document.getElementById("campoPesquisa");
const filtroCategoria = document.getElementById("filtroCategoria");
const itensCarrinho = document.getElementById("itensCarrinho");
const valorTotal = document.getElementById("valorTotal");

const carrinho = [];

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function exibirProdutos(lista) {
    listaProdutos.innerHTML = "";

    if (lista.length === 0) {
        listaProdutos.innerHTML = '<p class="mensagem-vazia">Nenhum produto encontrado.</p>';
        return;
    }

    lista.forEach(function(produto) {
        const card = document.createElement("article");
        card.classList.add("produto");

        card.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.categoria}</p>
            <p>${formatarMoeda(produto.preco)}</p>
            <button class="botao-adicionar" data-nome="${produto.nome}">
                Adicionar ao carrinho
            </button>
        `;

        listaProdutos.appendChild(card);
    });
}

function filtrarProdutos() {
    const pesquisa = campoPesquisa.value.toLowerCase().trim();
    const categoria = filtroCategoria.value;

    const produtosFiltrados = produtos.filter(function(produto) {
        const nomeCorresponde = produto.nome.toLowerCase().includes(pesquisa);
        const categoriaCorresponde = categoria === "" || produto.categoria === categoria;

        return nomeCorresponde && categoriaCorresponde;
    });

    exibirProdutos(produtosFiltrados);
}

function adicionarAoCarrinho(nomeProduto) {
    const produto = produtos.find(function(item) {
        return item.nome === nomeProduto;
    });

    if (!produto) return;

    const itemExistente = carrinho.find(function(item) {
        return item.nome === nomeProduto;
    });

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        });
    }

    exibirCarrinho();
}

function alterarQuantidade(nomeProduto, variacao) {
    const item = carrinho.find(function(produto) {
        return produto.nome === nomeProduto;
    });

    if (!item) return;

    item.quantidade += variacao;

    if (item.quantidade <= 0) {
        removerDoCarrinho(nomeProduto);
        return;
    }

    exibirCarrinho();
}

function removerDoCarrinho(nomeProduto) {
    const indice = carrinho.findIndex(function(item) {
        return item.nome === nomeProduto;
    });

    if (indice !== -1) {
        carrinho.splice(indice, 1);
    }

    exibirCarrinho();
}

function exibirCarrinho() {
    itensCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<p class="mensagem-vazia">Seu carrinho está vazio.</p>';
        valorTotal.textContent = formatarMoeda(0);
        return;
    }

    let total = 0;

    carrinho.forEach(function(item) {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        const linha = document.createElement("div");
        linha.classList.add("item-carrinho");
        linha.innerHTML = `
            <div>
                <strong>${item.nome}</strong>
                <p>${formatarMoeda(item.preco)} cada</p>
                <p>Subtotal: ${formatarMoeda(subtotal)}</p>
            </div>
            <div class="controles-carrinho">
                <button data-acao="diminuir" data-nome="${item.nome}" aria-label="Diminuir quantidade">−</button>
                <span>${item.quantidade}</span>
                <button data-acao="aumentar" data-nome="${item.nome}" aria-label="Aumentar quantidade">+</button>
                <button data-acao="remover" data-nome="${item.nome}">Remover</button>
            </div>
        `;

        itensCarrinho.appendChild(linha);
    });

    valorTotal.textContent = formatarMoeda(total);
}

listaProdutos.addEventListener("click", function(evento) {
    const botao = evento.target.closest("button[data-nome]");

    if (botao) {
        adicionarAoCarrinho(botao.dataset.nome);
    }
});

itensCarrinho.addEventListener("click", function(evento) {
    const botao = evento.target.closest("button[data-acao]");

    if (!botao) return;

    const nome = botao.dataset.nome;
    const acao = botao.dataset.acao;

    if (acao === "aumentar") alterarQuantidade(nome, 1);
    if (acao === "diminuir") alterarQuantidade(nome, -1);
    if (acao === "remover") removerDoCarrinho(nome);
});

campoPesquisa.addEventListener("input", filtrarProdutos);
filtroCategoria.addEventListener("change", filtrarProdutos);

exibirProdutos(produtos);
exibirCarrinho();
