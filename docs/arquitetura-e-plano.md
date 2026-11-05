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

GARDENSTICK — Flores que tornam momentos especiais! 🌷
