# Changelog

Todas as alterações relevantes do projeto GARDENSTICK serão registradas neste arquivo.

O formato segue a organização de versões, com datas e categorias de mudanças.

## [Em desenvolvimento] — 2026-11-20

### Adicionado
- Seção visual do carrinho na página.
- Inclusão de produtos e soma de quantidades quando o mesmo produto é adicionado novamente.
- Controles para aumentar, diminuir e remover itens.
- Cálculo de subtotal por item e total geral.
- Mensagem para carrinho vazio.

### Corrigido
- Pesquisa ou filtro sem resultados agora apresenta a mensagem “Nenhum produto encontrado”, em vez de deixar a área vazia.

### Validação pendente
- Teste manual no navegador antes de integrar a branch à `main`.

### Documentação
- Definido o modelo incremental e o planejamento das releases em `docs/planejamento-incremental.md`.
- Criada a branch `feature/carrinho-basico` para o desenvolvimento isolado do incremento 2.

## [0.1.0] — Marco do protótipo inicial

### Adicionado
- Catálogo com seis produtos.
- Pesquisa de produtos por nome.
- Filtro por categoria.

> Este registro descreve o marco funcional já existente no repositório. A tag formal da versão deverá ser criada no GitHub quando a operação estiver disponível.
