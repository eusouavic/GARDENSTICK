# Planejamento Incremental — GARDENSTICK

## Modelo de processo escolhido

O projeto será conduzido pelo **modelo incremental**, pois permite entregar funcionalidades em partes pequenas, validar cada etapa e evoluir o sistema sem esperar que todas as funções estejam prontas. Essa estratégia também combina com o estado atual: o protótipo já possui catálogo, pesquisa e filtro por categoria.

## Incrementos e releases planejados

| Incremento | Release prevista | Conteúdo | Situação |
|---|---|---|---|
| 1 — Catálogo | 0.1.0 | Estrutura inicial do site, catálogo de produtos, pesquisa e filtro por categoria. | Concluído como protótipo inicial. |
| 2 — Carrinho | 0.2.0 | Adicionar produtos, alterar quantidades, remover itens e calcular subtotal/total. | Implementado, testado manualmente e integrado à `main`; release v0.2.0 publicada como pré-lançamento. |
| 3 — Pedidos | 0.3.0 | Identificação do cliente, dados de entrega, resumo e registro do pedido. | Planejado. |
| 4 — Administração | 0.4.0 | Cadastro, edição, remoção de produtos e consulta/atualização de pedidos. | Planejado. |
| 5 — Persistência e pagamento | 1.0.0 | Backend, banco de dados, integração de pagamento, validações e testes integrados. | Planejado. |

As versões são metas de organização. Uma release só deverá ser marcada como concluída quando suas funcionalidades forem implementadas e verificadas.

## Composição do incremento 2 — Carrinho

1. Exibir a ação de adicionar ao carrinho nos produtos.
2. Manter os itens adicionados durante a navegação na página.
3. Permitir aumentar e diminuir a quantidade.
4. Permitir remover um produto.
5. Atualizar subtotal por item e total do carrinho.
6. Exibir uma mensagem quando o carrinho estiver vazio.

**Limite desta entrega:** o carrinho é mantido apenas em memória no navegador. Ele ainda não salva dados em banco, não cria pedidos e não processa pagamentos.

## Organização do repositório e branches

- `main`: versão principal, contendo as funcionalidades integradas e verificadas.
- `feature/nome-da-funcionalidade`: desenvolvimento isolado de cada incremento.
- `fix/nome-do-ajuste`: correções pontuais.
- Após testar a funcionalidade, as alterações da branch de trabalho podem ser integradas à `main` por pull request ou merge.

Branch utilizada nesta etapa: `feature/carrinho-basico`. As alterações foram integradas à `main` pelo Pull Request #1, que foi concluído.

## Controle de versão e release

- `v0.2.0`: release publicada no GitHub como pré-lançamento, referente ao incremento do carrinho.
- `v0.1.0`: marco do protótipo inicial do catálogo, registrado neste planejamento como referência histórica.

## Bug/melhoria identificada e tratamento

**Problema observado no código:** quando a pesquisa ou o filtro não encontra nenhum produto, a função de renderização limpa a lista e não apresenta orientação ao usuário, deixando uma área vazia.

**Tratamento:** incluir uma mensagem clara de “Nenhum produto encontrado” e estilizar essa mensagem. A correção foi implementada e verificada no navegador, melhorando o retorno visual sem alterar os produtos cadastrados.

## Critérios de validação do incremento do carrinho

- Adicionar um produto deve exibi-lo no carrinho.
- Adicionar o mesmo produto novamente deve aumentar sua quantidade.
- Os controles de quantidade devem atualizar subtotal e total.
- Remover um item deve atualizar a lista e o total.
- Carrinho sem itens deve apresentar mensagem apropriada.
- Pesquisa sem resultados deve apresentar mensagem apropriada.

## Histórico de execução

- 2026-11-20: modelo incremental escolhido e planejamento registrado.
- 2026-11-20: criada a branch `feature/carrinho-basico` para trabalhar isoladamente no incremento do carrinho.
- 2026-11-20: implementados inclusão de itens, alteração de quantidades, remoção e totalização do carrinho.
- 2026-11-20: corrigida a ausência de mensagem quando pesquisa/filtro não retorna produtos.
- 2026-11-20: funcionalidades do carrinho testadas manualmente no navegador.
- 2026-11-20: alterações integradas à `main` pelo Pull Request #1.
- 2026-11-20: release `v0.2.0` publicada como pré-lançamento.
