GARDENSTICK 🌷
Diagramas UML
1. Diagrama de Casos de Uso

O Diagrama de Casos de Uso representa os atores que interagem com o sistema GARDENSTICK e as funcionalidades disponíveis para cada um deles.

Atores
Cliente: responsável por visualizar produtos, pesquisar flores, adicionar itens ao carrinho, realizar pedidos, efetuar pagamentos e acompanhar compras.
Administrador: responsável pelo gerenciamento dos produtos e dos pedidos.
Funcionário: responsável por consultar pedidos e auxiliar no acompanhamento das compras.
Funcionalidades

Cliente:

Visualizar catálogo.
Pesquisar produtos.
Adicionar produtos ao carrinho.
Realizar pedidos.
Efetuar pagamento.
Acompanhar pedidos.

Administrador:

Cadastrar produtos.
Editar produtos.
Remover produtos.
Visualizar pedidos.
Atualizar status dos pedidos.

Funcionário:

Consultar pedidos.
Acompanhar status dos pedidos.
Código do diagrama
mermaid
flowchart LR
    C[Cliente]
    A[Administrador]
    F[Funcionário]

    subgraph G["Sistema GARDENSTICK"]
      UC1([Visualizar catálogo])
      UC2([Pesquisar produtos])
      UC3([Adicionar ao carrinho])
      UC4([Realizar pedido])
      UC5([Efetuar pagamento])
      UC6([Acompanhar pedidos])
      UC7([Cadastrar produtos])
      UC8([Editar produtos])
      UC9([Remover produtos])
      UC10([Visualizar pedidos])
      UC11([Atualizar status])
    end

    C --- UC1
    C --- UC2
    C --- UC3
    C --- UC4
    C --- UC5
    C --- UC6

    A --- UC7
    A --- UC8
    A --- UC9
    A --- UC10
    A --- UC11

    F --- UC10
    F --- UC6

Explicação

O diagrama apresenta as principais funcionalidades disponíveis para cada tipo de usuário. O cliente utiliza o sistema para realizar compras, enquanto o administrador gerencia os produtos e pedidos. O funcionário auxilia no acompanhamento das compras.

2. Diagrama de Classes

O Diagrama de Classes apresenta a estrutura do sistema por meio de classes, atributos e relacionamentos.

Principais classes
Cliente
Produto
Categoria
Carrinho
ItemCarrinho
Pedido
ItemPedido
Pagamento
Administrador
Código do diagrama
mermaid
classDiagram
    class Cliente {
        +int id
        +string nome
        +string email
        +cadastrar()
        +consultarPedidos()
    }

    class Produto {
        +int id
        +string nome
        +string descricao
        +decimal preco
        +int estoque
        +consultar()
    }

    class Categoria {
        +int id
        +string nome
    }

    class Carrinho {
        +int id
        +adicionarProduto()
        +removerProduto()
        +calcularTotal()
    }

    class ItemCarrinho {
        +int quantidade
        +decimal subtotal
    }

    class Pedido {
        +int id
        +date data
        +string status
        +decimal valorTotal
        +criarPedido()
        +atualizarStatus()
    }

    class ItemPedido {
        +int quantidade
        +decimal precoUnitario
    }

    class Pagamento {
        +int id
        +string metodo
        +string status
        +decimal valor
    }

    class Administrador {
        +int id
        +string nome
        +gerenciarProdutos()
        +gerenciarPedidos()
    }

    Categoria "1" --> "0..*" Produto
    Cliente "1" --> "1" Carrinho
    Carrinho "1" --> "0..*" ItemCarrinho
    Produto "1" --> "0..*" ItemCarrinho
    Cliente "1" --> "0..*" Pedido
    Pedido "1" --> "1..*" ItemPedido
    Produto "1" --> "0..*" ItemPedido
    Pedido "1" --> "0..1" Pagamento
    Administrador ..> Produto
    Administrador ..> Pedido

Explicação

O diagrama apresenta as principais entidades do sistema e como elas se relacionam. Um cliente pode possuir um carrinho e realizar vários pedidos. Os pedidos são compostos por itens relacionados aos produtos disponíveis no catálogo. O administrador gerencia os produtos e pedidos.

3. Considerações finais

Os diagramas UML permitem visualizar a organização e o funcionamento da GARDENSTICK antes da implementação.

## Modelagem Orientada a Objetos — Classes Centrais

O sistema GARDENSTICK possui oito classes centrais que representam as principais funcionalidades de uma floricultura virtual.

### 1. Cliente
**Atributos:**
- idCliente
- nome
- email
- senha
- telefone
- endereco

**Métodos:**
- cadastrar()
- atualizarDados()
- consultarPedidos()

### 2. Produto
**Atributos:**
- idProduto
- nome
- descricao
- preco
- quantidadeEstoque
- imagem

**Métodos:**
- cadastrar()
- atualizar()
- excluir()
- consultarDisponibilidade()

### 3. Categoria
**Atributos:**
- idCategoria
- nome
- descricao

**Métodos:**
- cadastrar()
- editar()
- listarProdutos()

### 4. Carrinho
**Atributos:**
- idCarrinho
- dataCriacao
- valorTotal

**Métodos:**
- adicionarProduto()
- removerProduto()
- calcularTotal()
- limparCarrinho()

### 5. ItemCarrinho
**Atributos:**
- idItem
- quantidade
- precoUnitario
- subtotal

**Métodos:**
- alterarQuantidade()
- calcularSubtotal()

### 6. Pedido
**Atributos:**
- idPedido
- dataPedido
- status
- valorTotal
- enderecoEntrega

**Métodos:**
- criarPedido()
- atualizarStatus()
- calcularValorTotal()
- consultarPedido()

### 7. ItemPedido
**Atributos:**
- idItemPedido
- quantidade
- precoUnitario
- subtotal

**Métodos:**
- calcularSubtotal()
- consultarProduto()

### 8. Pagamento
**Atributos:**
- idPagamento
- formaPagamento
- valor
- status
- dataPagamento

**Métodos:**
- processarPagamento()
- confirmarPagamento()
- consultarStatus()

### Relacionamentos entre as classes

- Um Cliente possui um Carrinho.
- Um Cliente pode realizar vários Pedidos.
- Uma Categoria pode possuir vários Produtos.
- Um Carrinho pode conter vários ItensCarrinho.
- Cada ItemCarrinho está associado a um Produto.
- Um Pedido possui um ou mais ItensPedido.
- Cada ItemPedido está associado a um Produto.
- Um Pedido pode possuir um Pagamento.


classDiagram
    class Cliente {
        -idCliente
        -nome
        -email
        -senha
        -telefone
        -endereco
        +cadastrar()
        +atualizarDados()
        +consultarPedidos()
    }

    class Produto {
        -idProduto
        -nome
        -descricao
        -preco
        -quantidadeEstoque
        -imagem
        +cadastrar()
        +atualizar()
        +excluir()
        +consultarDisponibilidade()
    }

    class Categoria {
        -idCategoria
        -nome
        -descricao
        +cadastrar()
        +editar()
        +listarProdutos()
    }

    class Carrinho {
        -idCarrinho
        -dataCriacao
        -valorTotal
        +adicionarProduto()
        +removerProduto()
        +calcularTotal()
        +limparCarrinho()
    }

    class ItemCarrinho {
        -idItem
        -quantidade
        -precoUnitario
        -subtotal
        +alterarQuantidade()
        +calcularSubtotal()
    }

    class Pedido {
        -idPedido
        -dataPedido
        -status
        -valorTotal
        -enderecoEntrega
        +criarPedido()
        +atualizarStatus()
        +calcularValorTotal()
        +consultarPedido()
    }

    class ItemPedido {
        -idItemPedido
        -quantidade
        -precoUnitario
        -subtotal
        +calcularSubtotal()
        +consultarProduto()
    }

    class Pagamento {
        -idPagamento
        -formaPagamento
        -valor
        -status
        -dataPagamento
        +processarPagamento()
        +confirmarPagamento()
        +consultarStatus()
    }

    Categoria "1" --> "0..*" Produto
    Cliente "1" --> "1" Carrinho
    Carrinho "1" --> "0..*" ItemCarrinho
    Produto "1" --> "0..*" ItemCarrinho
    Cliente "1" --> "0..*" Pedido
    Pedido "1" --> "1..*" ItemPedido
    Produto "1" --> "0..*" ItemPedido
    Pedido "1" --> "0..1" Pagamento


O Administrador e o Funcionário continuam fazendo parte do sistema como perfis de acesso responsáveis pelo gerenciamento de produtos e pedidos, mas não foram incluídos entre as oito classes centrais desta modelagem.


## Mudança Futura e Tipo de Manutenção

Uma mudança futura provável no sistema GARDENSTICK seria a implementação de um sistema de cupons de desconto. Com essa funcionalidade, os clientes poderiam inserir códigos promocionais no carrinho de compras para receber descontos no valor total do pedido.

Para implementar essa melhoria, seria necessário adicionar novas regras de negócio e adaptar o cálculo do valor total do carrinho e do pedido.

**Tipo de manutenção: Manutenção Perfectiva (Evolutiva).**

Essa manutenção é classificada como perfectiva porque tem como objetivo melhorar o sistema e adicionar uma nova funcionalidade, proporcionando mais benefícios e praticidade aos usuários. Não se trata de corrigir um erro existente, mas de ampliar os recursos oferecidos pelo GARDENSTICK.
