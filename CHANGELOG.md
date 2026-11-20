# Changelog

## [1.0.0] — 2026-11-20 (validação e documentação)

### Testes
- Executados manualmente no navegador os dez cenários CT-001 a CT-010 do plano de testes; todos foram confirmados como aprovados pelo responsável pela execução.
- Registrados os resultados em `docs/plano-de-testes-v1.0.md`.
- A rodada não utilizou framework de testes automatizados.

### Segurança
- Adicionada análise básica de segurança em `docs/analise-de-seguranca.md`.
- Documentados os limites do protótipo, incluindo ausência de backend, autenticação, banco de dados e pagamentos.
- Registrado o ponto de atenção sobre uso de `innerHTML` e recomendações para conteúdo dinâmico futuro.

### Documentação
- README atualizado com links para o plano de testes e a análise de segurança.

### Limites
- Esta etapa documenta e valida o frontend existente; não adiciona funcionalidades de backend, persistência, contas de usuário ou pagamento.
- Evidências visuais devem ser mantidas em `docs/evidencias-testes/`; a confirmação dos resultados não substitui a conferência dos arquivos de captura.

Todas as alterações relevantes do projeto GARDENSTICK serão registradas neste arquivo.

O formato segue a organização de versões, com datas e categorias de mudanças.

## [0.2.0] — 2026-11-20 (pré-lançamento)

### Adicionado
- Seção visual do carrinho na página.
- Inclusão de produtos e soma de quantidades quando o mesmo produto é adicionado novamente.
- Controles para aumentar, diminuir e remover itens.
- Cálculo de subtotal por item e total geral.
- Mensagem para carrinho vazio.

### Corrigido
- Pesquisa ou filtro sem resultados agora apresenta a mensagem “Nenhum produto encontrado”, em vez de deixar a área vazia.

### Documentação e integração
- Definido o modelo incremental e o planejamento das releases em `docs/planejamento-incremental.md`.
- Desenvolvimento realizado na branch `feature/carrinho-basico` e integrado à `main` pelo Pull Request #1.
- Release `v0.2.0` publicada como pré-lançamento no GitHub.

### Limites desta versão
- O carrinho é mantido apenas em memória no navegador; os dados não permanecem após recarregar a página.
- Ainda não há integração com banco de dados, criação de pedidos ou processamento de pagamentos.

## [0.1.0] — Marco do protótipo inicial

### Adicionado
- Catálogo com seis produtos.
- Pesquisa de produtos por nome.
- Filtro por categoria.

> Este registro descreve o marco funcional inicial do protótipo. A release formal publicada nesta etapa é a v0.2.0.
