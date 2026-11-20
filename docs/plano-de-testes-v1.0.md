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
| CT-001 | Unitário | Formatação de preço | Exibir o preço 89.90 | Valor formatado como R$ 89,90 |
| CT-002 | Unitário | Cálculo de subtotal | Adicionar 2 unidades de Buquê de Rosas (R$ 89,90) | Subtotal de R$ 179,80 |
| CT-003 | Integração | Adicionar produto pelo catálogo | Clicar em “Adicionar ao carrinho” no Buquê de Rosas | Produto aparece no carrinho com quantidade 1 |
| CT-004 | Integração | Atualizar quantidade e total | Adicionar o mesmo produto duas vezes | Quantidade 2 e total de R$ 179,80 |
| CT-005 | Integração | Remover produto | Clicar em “Remover” no item do carrinho | Item removido e total atualizado |
| CT-006 | Sistema | Pesquisar produto existente | Digitar “Orquídea” | Apenas o produto correspondente é exibido |
| CT-007 | Sistema | Combinar pesquisa e categoria | Selecionar “Plantas” e pesquisar “Orquídea” | Orquídea é exibida |
| CT-008 | Sistema | Pesquisa sem resultado | Pesquisar um nome inexistente | Mensagem “Nenhum produto encontrado” |
| CT-009 | Sistema | Carrinho vazio | Remover todos os itens | Mensagem “Seu carrinho está vazio” e total R$ 0,00 |
| CT-010 | Aceitação | Fluxo principal de compra demonstrativa | Localizar um produto e adicioná-lo ao carrinho | Usuário consegue localizar o produto e conferir quantidade e valor no carrinho |

## 5. Procedimento de execução

1. Abrir o site publicado: https://eusouavic.github.io/GARDENSTICK/
2. Atualizar a página com Ctrl + F5.
3. Executar cada cenário da tabela.
4. Comparar o resultado observado com o resultado esperado.
5. Registrar o status como **Aprovado**, **Reprovado** ou **Bloqueado**.
6. Para cada caso executado, salvar uma captura de tela que demonstre o resultado.
7. Se houver falha, registrar o bug, corrigir, repetir o teste e guardar a evidência da nova execução.

## 6. Registro de execução

Os casos CT-001 a CT-010 estão definidos, mas precisam ter seus resultados e evidências registrados nesta etapa. Os testes manuais do carrinho realizados durante o incremento 0.2.0 foram registrados no histórico de desenvolvimento; isso não substitui a execução e evidência individual de todos os casos desta matriz.

| ID | Status nesta revisão | Evidência |
|---|---|---|
| CT-001 a CT-010 | Pendente de execução e registro individual | Salvar em `docs/evidencias-testes/` |

## 7. Critério de conclusão

A rodada de testes será considerada concluída quando todos os casos aplicáveis tiverem status registrado, as falhas estiverem documentadas e os testes reprovados forem repetidos após a correção. Casos não aplicáveis devem ser justificados.

## 8. Limitações

Os testes cobrem apenas o frontend existente. Não é possível validar autenticação, autorização, persistência em banco, criação real de pedidos, integração de pagamento ou segurança de uma API porque esses componentes ainda não fazem parte da implementação.
