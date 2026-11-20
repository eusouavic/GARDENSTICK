# Análise Básica de Segurança — GARDENSTICK v1.0

## 1. Objetivo e escopo

Esta análise avalia apenas o protótipo frontend atualmente publicado. O sistema utiliza HTML, CSS e JavaScript no navegador e está hospedado no GitHub Pages. Não existe backend, API própria ou banco de dados nesta versão.

## 2. Dados sensíveis

- O protótipo não possui cadastro, login, formulário de cliente, criação real de pedidos ou pagamento.
- Não solicita, processa ou armazena intencionalmente dados pessoais, senhas ou dados financeiros.
- O carrinho existe somente na memória da página e é perdido ao recarregar o navegador.
- Portanto, não devem ser inseridos dados reais de clientes ou informações confidenciais no protótipo.

## 3. Autenticação e autorização

- Não há autenticação de usuários.
- Não há perfis, permissões ou autorização de operações administrativas.
- Como não existe área administrativa nem backend, essas funções não são aplicáveis à implementação atual.
- Se forem adicionadas futuramente, a autenticação e a autorização deverão ser implementadas e verificadas no servidor, e não apenas escondidas na interface.

## 4. Validação de entradas

- A pesquisa de produtos é utilizada para filtrar uma lista fixa de produtos no navegador.
- O nome do produto enviado às funções do carrinho é conferido com a lista fixa antes de ser adicionado.
- O catálogo atual é definido diretamente no arquivo JavaScript, não recebido de usuários ou de uma API.
- **Ponto de atenção:** a interface monta partes do HTML com `innerHTML`. Isso é aceitável apenas enquanto os valores inseridos vierem do catálogo estático e confiável. Se futuramente forem usados nomes, descrições ou outros dados fornecidos por usuários ou serviços externos, será necessário validar os dados e preferir `textContent` e criação segura de elementos para evitar Cross-Site Scripting (XSS).

## 5. Senhas, credenciais e segredos

- A versão atual não possui senhas, tokens de acesso, chaves de API ou credenciais de serviços.
- Não há credenciais que precisem ser armazenadas no código-fonte.
- Em futuras integrações, segredos não devem ser publicados no repositório nem enviados ao JavaScript do navegador. Devem ser mantidos em ambiente seguro no servidor.

## 6. Dependências e tecnologias

- O projeto utiliza HTML5, CSS3 e JavaScript nativo.
- Não foram identificadas bibliotecas ou dependências externas no código da aplicação analisado.
- A ausência de dependências reduz a exposição a vulnerabilidades em pacotes de terceiros, mas não elimina riscos no código próprio ou na plataforma de hospedagem.
- Alterações futuras que adicionem bibliotecas devem incluir avaliação de origem, manutenção e atualizações de segurança.

## 7. Hospedagem e exposição do código

- O site é publicado no GitHub Pages por HTTPS.
- O código-fonte frontend é público e pode ser visualizado por qualquer visitante; isso é esperado para uma aplicação estática.
- Não devem ser colocados dados privados ou segredos em arquivos publicados.

## 8. Riscos residuais e melhorias necessárias

| Risco ou limitação | Situação atual | Medida recomendada para evolução |
|---|---|---|
| Ausência de autenticação e autorização | Não existem contas nem área administrativa | Implementar autenticação e controle de acesso no backend caso essas funções sejam criadas |
| Dados não persistentes | Carrinho é mantido apenas em memória | Projetar armazenamento seguro e regras de privacidade antes de persistir dados |
| XSS em conteúdo dinâmico | O código utiliza `innerHTML` com dados do catálogo estático | Usar inserção segura de texto e validação ao receber conteúdo externo |
| Exposição de segredos | Não há segredos na aplicação atual | Manter credenciais futuras fora do repositório e do código cliente |
| Pedidos e pagamentos inexistentes | Não há processamento real | Integrar serviços confiáveis no servidor, sem armazenar dados de cartão no frontend |
| Dependências vulneráveis | Não há dependências externas identificadas | Avaliar e atualizar dependências caso sejam adicionadas |

## 9. Conclusão

O protótipo possui uma superfície de ataque reduzida por ser uma aplicação estática, sem contas, backend, banco de dados ou processamento financeiro. Ainda assim, não deve ser considerado um sistema de comércio eletrônico pronto para operar com dados reais. Antes de incluir clientes, pedidos, pagamentos ou administração, será necessário desenvolver a infraestrutura de servidor e aplicar controles de segurança apropriados.

**Limite desta análise:** trata-se de uma avaliação básica do código e das funcionalidades existentes, não de uma auditoria profissional, teste de invasão ou certificação de segurança.
