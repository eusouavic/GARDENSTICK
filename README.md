🌷 GARDENSTICK
Floricultura Virtual

## Objetivo
Desenvolver um sistema de comércio eletrônico para uma floricultura, facilitando a visualização e a compra de produtos, além de oferecer ferramentas para o gerenciamento de produtos e pedidos.

## Usuários
- Clientes: visualizam produtos, realizam compras e acompanham pedidos.
- Administradores: gerenciam produtos e pedidos.
- Funcionários: auxiliam nas atividades e no atendimento dos pedidos.

## Stakeholders
- Proprietários;
- Fornecedores;
- Entregadores;
- Equipe de desenvolvimento.

## Funcionalidades previstas para o sistema
- Visualização do catálogo de flores, plantas e arranjos.
- Pesquisa de produtos por nome e categoria.
- Adição de produtos ao carrinho.
- Realização de pedidos pelo site.
- Disponibilização de formas de pagamento online.
- Acompanhamento do status dos pedidos.
- Cadastro, edição e remoção de produtos pelos administradores.
- Visualização e gerenciamento de pedidos na área administrativa.

## Estado atual do desenvolvimento
A versão principal contém um protótipo funcional com catálogo de produtos, pesquisa por nome, filtro por categoria e carrinho básico de compras.

O carrinho permite adicionar produtos, aumentar e diminuir quantidades, remover itens e calcular subtotais e total geral. Também apresenta mensagens para carrinho vazio e para pesquisa sem resultados.

**Limite atual:** o carrinho funciona em memória no navegador. Os dados não são mantidos após recarregar a página. Ainda não há backend, banco de dados, criação de pedidos ou processamento de pagamentos; essas funcionalidades permanecem planejadas para incrementos futuros.

## Requisitos não funcionais
- Interface intuitiva e fácil de utilizar.
- Layout responsivo para celulares, tablets e computadores.
- Proteção dos dados pessoais e financeiros dos clientes.

## Escopo planejado
O planejamento prevê catálogo, pesquisa, carrinho, pedidos, pagamentos, acompanhamento de pedidos, área administrativa e layout responsivo. Aplicativo próprio para celulares, chat com atendentes, personalização avançada de arranjos e recomendações automáticas não fazem parte do escopo inicial.

## Integrantes
- Vitoria Cristina Feitosa da Silva
- Gustavo de Lima Alves

**Disciplina:** Projeto de Software

## Arquitetura e modelagem
A arquitetura da GARDENSTICK foi planejada em cinco componentes principais:
- Interface Web;
- API / Backend;
- Regras de negócio;
- Banco de dados;
- Serviço de pagamento.

Foram elaborados os diagramas de Casos de Uso e de Classes.

## Documentação do projeto
Os documentos técnicos estão disponíveis na pasta `docs`:
- Requisitos e Escopo;
- Arquitetura e Plano;
- Diagramas UML;
- [DFD e Dicionário de Dados](docs/dfd-e-dicionario-dados.md);
- [Planejamento incremental](docs/planejamento-incremental.md).

O projeto também possui planejamento de equipe, definição de recursos necessários, estratégia de acompanhamento e identificação de riscos com ações preventivas.

## Planejamento e controle de versão
- [Planejamento incremental](docs/planejamento-incremental.md): modelo de processo, incrementos, branches e critérios de validação.
- [CHANGELOG](CHANGELOG.md): histórico das alterações e melhorias.
- [Release v0.2.0](https://github.com/eusouavic/GARDENSTICK/releases/tag/v0.2.0): pré-lançamento do incremento do carrinho.

## Como executar o projeto
O projeto está disponível pelo GitHub Pages:

https://eusouavic.github.io/GARDENSTICK/

Para visualizar o sistema:
1. Acesse o link acima pelo navegador.
2. Aguarde o carregamento da página inicial.
3. Visualize os produtos disponíveis no catálogo.
4. Utilize a barra de pesquisa para buscar produtos pelo nome.
5. Utilize o filtro para visualizar produtos por categoria.
6. Adicione produtos ao carrinho e teste os controles de quantidade e remoção.

## Tecnologias utilizadas
- HTML5: estrutura das páginas.
- CSS3: estilização e layout.
- JavaScript: funcionalidades de pesquisa, filtragem e carrinho básico.
