GARDENSTICK 🌷
Arquitetura e Plano do Projeto
Arquitetura de alto nível

A GARDENSTICK utilizará uma arquitetura organizada em cinco blocos principais, responsáveis por dividir as funções do sistema e facilitar seu desenvolvimento e manutenção.

 Interface Web

Responsável pela interação entre os usuários e o sistema. Disponibilizará páginas para visualização de produtos, pesquisa, carrinho de compras, realização de pedidos e gerenciamento administrativo.

 API / Backend

Responsável por receber as solicitações feitas pela interface e encaminhá-las aos componentes responsáveis pelo processamento das operações.

 Regras de negócio

Responsável por controlar as funcionalidades do sistema, como gerenciamento de produtos, carrinho de compras, pedidos, permissões e validação das informações.

 Banco de dados

Responsável por armazenar e organizar as informações dos clientes, produtos, categorias, pedidos e pagamentos.

 Serviço de pagamento

Responsável pela comunicação com um provedor externo para processar os pagamentos realizados pelos clientes.

 Representação da arquitetura

A arquitetura da GARDENSTICK segue a seguinte organização:

Interface Web → API / Backend → Regras de negócio → Banco de dados.

O serviço de pagamento é acionado pelas regras de negócio durante a realização de uma compra.

 Considerações sobre a arquitetura

A divisão do sistema em componentes permite organizar melhor suas responsabilidades, facilitar futuras alterações e tornar o desenvolvimento mais estruturado.

Essa arquitetura representa o planejamento inicial do sistema e servirá como referência para as próximas etapas de implementação.

4. Interfaces principais

O sistema GARDENSTICK contará com interfaces destinadas aos clientes, funcionários e administradores, facilitando a utilização das funcionalidades da floricultura virtual.

As principais interfaces serão:

4.1 Página inicial: apresentará a floricultura, os produtos em destaque e as opções de navegação.

4.2 Catálogo de produtos: permitirá visualizar flores, plantas e arranjos, além de pesquisar produtos pelo nome e categoria.

4.3 Carrinho de compras: permitirá visualizar os produtos selecionados, alterar quantidades, remover itens e consultar o valor total.

4.4 Finalização da compra: permitirá confirmar os produtos, informar os dados de entrega e selecionar uma forma de pagamento.

4.5 Meus pedidos: permitirá que os clientes consultem suas compras e acompanhem o status dos pedidos.

4.6 Painel administrativo: permitirá que os administradores cadastrem, editem e removam produtos, além de visualizar e gerenciar pedidos.

5. Principais dados manipulados

Para garantir o funcionamento do sistema, serão manipuladas informações relacionadas aos usuários, produtos e operações de compra.

5.1 Usuários: nome, e-mail, senha protegida e tipo de usuário.

5.2 Produtos: nome, descrição, preço, imagem e categoria.

5.3 Categorias: nome e descrição dos grupos de produtos.

5.4 Carrinho: identificação dos produtos selecionados e suas respectivas quantidades.

5.5 Pedidos: número do pedido, identificação do cliente, data, valor total e status.

5.6 Pagamentos: identificador da transação, valor, método utilizado e situação do pagamento.

5.7 Entrega: endereço e informações necessárias para a entrega dos produtos.

Essas informações serão utilizadas para organizar as operações da floricultura e permitir o gerenciamento adequado das compras realizadas pelos clientes.
