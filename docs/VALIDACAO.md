# Validação da documentação

Revisão local: 28/10/2026.

## Conteúdo e estrutura

- 27 páginas temáticas geradas e verificadas.
- 41 manifestos de plugins e 44 rotas catalogados a partir do código.
- Fontes citadas conferidas no checkout analisado.
- Geração determinística, identificadores únicos, estrutura das tabelas, arquivos estáticos e links internos verificados por `npm test`.
- Conteúdo público revisado para excluir credenciais, logs privados, dados de clientes e caminhos pessoais.

## Navegador

- Percurso das páginas em desktop de 1440 pixels e celular de 390 pixels.
- Nenhuma página apresentou transbordamento horizontal do documento; tabelas extensas mantêm rolagem própria.
- Busca sem acentos, filtro do catálogo, mapa de etapas e cancelamento didático exercitados.
- Temas claro/escuro e menu móvel com Escape conferidos.
- Foco isolado no menu móvel e retorno ao conteúdo implementados.

As verificações são da documentação. Não representam nova execução da suíte Sentinel, auditoria de aplicações ou certificação de acessibilidade. Os números históricos do produto estão identificados na página Testes e validação.

## Repetir

```powershell
npm run build
npm test
npm run serve
```

Para conferir a existência das fontes em um checkout, defina `SENTINEL_SOURCE_ROOT` no ambiente antes de executar `npm test`. Não inclua credenciais nessa variável.
