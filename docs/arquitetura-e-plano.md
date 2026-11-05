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

 Interfaces principais

O sistema GARDENSTICK contará com interfaces destinadas aos clientes, funcionários e administradores, facilitando a utilização das funcionalidades da floricultura virtual.

As principais interfaces serão:

 Página inicial: apresentará a floricultura, os produtos em destaque e as opções de navegação.
 Catálogo de produtos: permitirá visualizar flores, plantas e arranjos, além de pesquisar produtos pelo nome e categoria.
Carrinho de compras: permitirá visualizar os produtos selecionados, alterar quantidades, remover itens e consultar o valor total.
Finalização da compra: permitirá confirmar os produtos, informar os dados de entrega e selecionar uma forma de pagamento.
Meus pedidos: permitirá que os clientes consultem suas compras e acompanhem o status dos pedidos.
Painel administrativo: permitirá que os administradores cadastrem, editem e removam produtos, além de visualizar e gerenciar pedidos.

Principais dados manipulados

Para garantir o funcionamento do sistema, serão manipuladas informações relacionadas aos usuários, produtos e operações de compra.

Usuários: nome, e-mail, senha protegida e tipo de usuário.
Produtos: nome, descrição, preço, imagem e categoria.
Categorias: nome e descrição dos grupos de produtos.
Carrinho: identificação dos produtos selecionados e suas respectivas quantidades.
Pedidos: número do pedido, identificação do cliente, data, valor total e status.
Pagamentos: identificador da transação, valor, método utilizado e situação do pagamento.
Entrega: endereço e informações necessárias para a entrega dos produtos.

Essas informações serão utilizadas para organizar as operações da floricultura e permitir o gerenciamento adequado das compras realizadas pelos clientes.

Equipe do projeto

A equipe da GARDENSTICK será responsável pelo planejamento, documentação, modelagem, desenvolvimento e testes do sistema.

Responsabilidade conjunta: ambos os integrantes participarão do planejamento, revisão dos requisitos, acompanhamento das atividades e validação das funcionalidades.

Recursos necessários

Para o desenvolvimento do projeto serão utilizados os seguintes recursos:

GitHub: utilizado para armazenar os arquivos, organizar a documentação e controlar as versões do projeto.
Computadores: utilizados para realizar as atividades de desenvolvimento e documentação.
Internet: necessária para acessar as ferramentas e serviços utilizados.
Editor de código: utilizado para desenvolver o sistema.
Ferramenta de modelagem UML: utilizada para elaborar os diagramas do projeto.
Banco de dados: utilizado para armazenar informações de clientes, produtos e pedidos.
Serviço de pagamento: utilizado futuramente para permitir o processamento de pagamentos online.

Estratégia de acompanhamento

O acompanhamento do projeto será realizado por meio da divisão das tarefas entre os integrantes e da definição de prazos para cada atividade.

As alterações e atualizações serão registradas no GitHub, permitindo acompanhar o histórico de desenvolvimento e manter os documentos organizados.

Também serão realizadas revisões periódicas para verificar o andamento das tarefas, identificar dificuldades e garantir que os requisitos estabelecidos estejam sendo atendidos.

Os integrantes deverão manter uma comunicação constante para organizar as atividades e resolver possíveis problemas durante o desenvolvimento.

Identificação de riscos e ações preventivas

Durante o desenvolvimento da GARDENSTICK, foram identificados alguns riscos que podem afetar o andamento do projeto.

Risco 1 — Atraso nas entregas: pode ocorrer devido à falta de organização ou dificuldade em concluir as atividades dentro do prazo.

Ação preventiva: dividir as tarefas entre os integrantes, estabelecer prazos e acompanhar o andamento do projeto.

Risco 2 — Informações incorretas: pode acontecer quando dados de produtos, clientes ou pedidos são cadastrados incorretamente.

Ação preventiva: validar as informações antes de salvá-las e realizar testes periódicos.

Risco 3 — Problemas na integração de pagamentos: podem ocorrer falhas de comunicação com o serviço externo responsável pelo processamento das transações.

Ação preventiva: planejar a integração com antecedência e realizar testes em ambiente de testes antes de disponibilizar pagamentos reais.

Risco 4 — Perda de alterações: pode acontecer devido a exclusões acidentais ou problemas durante o desenvolvimento.

Ação preventiva: utilizar o GitHub para armazenar os arquivos e realizar commits frequentes, mantendo o histórico das alterações.

 Considerações finais

O planejamento da GARDENSTICK estabelece uma organização inicial para o desenvolvimento do sistema, definindo os componentes da arquitetura, as principais interfaces, os dados manipulados, as responsabilidades da equipe e os possíveis riscos.

Essas informações servirão como referência para orientar as próximas etapas de implementação e garantir que o desenvolvimento aconteça de maneira organizada.

