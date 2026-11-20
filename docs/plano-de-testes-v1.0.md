# Plano de Testes — GARDENSTICK v1.0

## 1. Objetivo

Verificar as funcionalidades que já existem no protótipo da GARDENSTICK, identificar falhas e registrar evidências. Os testes deste documento não representam funcionalidades futuras como login, banco de dados, pedidos ou pagamentos, que ainda não estão implementadas.

## 2. Escopo atual

Funcionalidades disponíveis para teste:
- Exibição do catálogo com seis produtos.
- Pesquisa de produtos pelo nome.
- Filtro por categoria.
- Adição de produtos ao carrinho.
- Aumento e diminuição da quantidade.
- Remoção de itens.
- Cálculo de subtotal e total.
- Mensagens de carrinho vazio e pesquisa sem resultados.

Fora do escopo implementado: autenticação, autorização, persistência, cadastro de clientes, pedidos, painel administrativo, banco de dados e pagamento.

## 3. Tipos de teste

- **Unitário:** verifica uma função isolada, como a formatação de valores em reais ou o cálculo de subtotal.
- **Integração:** verifica a comunicação entre catálogo, filtros e carrinho.
- **Sistema:** verifica o fluxo completo no navegador, incluindo pesquisa e operações do carrinho.
- **Aceitação:** verifica se as tarefas principais podem ser realizadas de forma compreensível pelo usuário.

Como o projeto ainda não possui estrutura de testes automatizados, os casos abaixo devem ser executados manualmente no navegador e registrados com capturas de tela. Não declarar teste automatizado sem implementar e executar uma ferramenta específica.

## 4. Casos de teste

| ID | Tipo | Cenário | Entrada / ação | Resultado esperado |
|---|---|---|---|---|
| CT-001 | Sistema (verificação manual) | Exibição de preço no catálogo | Localizar Buquê de Rosas | Preço exibido como R$ 89,90 |
| CT-002 | Integração | Adicionar produto pelo catálogo | Adicionar Buquê de Rosas ao carrinho | Produto aparece com quantidade 1 e total R$ 89,90 |
| CT-003 | Integração | Aumentar quantidade | Clicar uma vez no botão “+” do Buquê de Rosas | Quantidade 2 e total R$ 179,80 |
| CT-004 | Integração | Diminuir quantidade | Clicar uma vez no botão “−” | Quantidade 1 e total R$ 89,90 |
| CT-005 | Integração | Remover produto | Clicar no botão de remover do item | Item removido e mensagem de carrinho vazio |
| CT-006 | Sistema | Pesquisar produto existente | Digitar “Orquídea” | Apenas o produto correspondente é exibido |
| CT-007 | Sistema | Combinar pesquisa e categoria | Manter “Orquídea” na busca e selecionar “Plantas” | Orquídea continua sendo exibida |
| CT-008 | Sistema | Pesquisa sem resultado | Pesquisar “Flor inexistente” | Mensagem “Nenhum produto encontrado” |
| CT-009 | Sistema | Carrinho vazio | Conferir o carrinho sem itens | Mensagem de carrinho vazio e total R$ 0,00 |
| CT-010 | Aceitação | Fluxo principal de compra demonstrativa | Pesquisar Lírio Branco e adicioná-lo ao carrinho | Produto aparece com quantidade 1 e total R$ 45,00 |

## 5. Procedimento de execução

1. Abrir o site publicado: https://eusouavic.github.io/GARDENSTICK/
2. Atualizar a página com Ctrl + F5.
3. Executar cada cenário da tabela.
4. Comparar o resultado observado com o resultado esperado.
5. Registrar o status como **Aprovado**, **Reprovado** ou **Bloqueado**.
6. Para cada caso executado, salvar uma captura de tela que demonstre o resultado.
7. Se houver falha, registrar o bug, corrigir, repetir o teste e guardar a evidência da nova execução.

## 6. Registro de execução

Os dez casos abaixo foram executados manualmente no navegador em 20/11/2026. A pessoa responsável confirmou que cada resultado esperado foi observado. Como não há framework de testes automatizados no projeto, estes registros representam testes manuais; CT-001 não é um teste unitário isolado de função.

| ID | Status | Resultado observado |
|---|---|---|
| CT-001 | Aprovado | Buquê de Rosas exibiu R$ 89,90 |
| CT-002 | Aprovado | Buquê de Rosas entrou no carrinho com quantidade 1 e total R$ 89,90 |
| CT-003 | Aprovado | Quantidade passou para 2 e total para R$ 179,80 |
| CT-004 | Aprovado | Quantidade voltou para 1 e total para R$ 89,90 |
| CT-005 | Aprovado | Produto foi removido e o carrinho ficou vazio |
| CT-006 | Aprovado | Busca por Orquídea exibiu o produto correspondente |
| CT-007 | Aprovado | Orquídea continuou aparecendo com o filtro Plantas |
| CT-008 | Aprovado | Busca sem correspondência exibiu “Nenhum produto encontrado” |
| CT-009 | Aprovado | Carrinho vazio exibiu a mensagem correspondente e total R$ 0,00 |
| CT-010 | Aprovado | Lírio Branco foi adicionado com quantidade 1 e total R$ 45,00 |

**Evidências visuais:** as capturas de tela ainda precisam ser salvas no repositório em `docs/evidencias-testes/`. A confirmação dos resultados nesta execução não substitui os arquivos de evidência.

**Bugs:** nenhum defeito foi relatado durante esta rodada manual. Isso não comprova ausência de bugs em cenários não testados.

## 7. Critério de conclusão

A execução manual dos dez cenários foi concluída com resultado aprovado. A etapa de documentação de evidências visuais permanece pendente. Caso sejam identificadas falhas em testes futuros, elas deverão ser registradas, corrigidas e retestadas. Casos não aplicáveis devem ser justificados.

## 8. Limitações

Os testes cobrem apenas o frontend existente. Não é possível validar autenticação, autorização, persistência em banco, criação real de pedidos, integração de pagamento ou segurança de uma API porque esses componentes ainda não fazem parte da implementação.
