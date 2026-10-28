# Documentação Sentinel

Documentação técnica em português do Sentinel, organizada no padrão visual e editorial das documentações Locadora e DinoTube: navegação lateral, busca, páginas temáticas, tabelas, fontes locais e tema claro/escuro. A identidade visual usa as cores do Sentinel e uma nova interpretação vetorial da harpia brasileira.

**Site:** https://davidinovargas.github.io/DocumentacaoSentinel/

**Código documentado:** [DaviDinoVargas/Sentinel](https://github.com/DaviDinoVargas/Sentinel), revisão `5bb78a6adf7255d63ee2fa938d942257299ca757`, consultada em 28/10/2026. O código prevalece sobre descrições históricas. Resultados anteriores de testes são identificados; não representam uma nova execução ou homologação.

## Leitura local

Requer Node.js 22 ou posterior para gerar e verificar. A leitura do site não precisa de instalação de dependências, servidor de aplicação ou serviços Sentinel.

```powershell
npm run build
npm test
npm run serve
```

Abra http://127.0.0.1:8000/DocumentacaoSentinel/. O site também funciona por `index.html` local.

## Estrutura e manutenção

- `docs/*.json`: conteúdo editorial por tema, fontes e tabelas.
- `docs/INDICE.md`: índice gerado.
- `assets/docs.js`: conteúdo estático gerado por `npm run build`.
- `assets/app.js`: busca, navegação, atalhos e preferências visuais.
- `assets/styles.css`: estrutura visual compartilhada com a documentação DinoTube.
- `assets/experience.css` e `assets/experience.js`: identidade Harpia, mapa interativo, simulador e filtros dos catálogos.
- `tools/`: geração, verificação e servidor local.
- `.github/workflows/`: validação e publicação.

Edite a página temática, confira os arquivos de origem, atualize a revisão e gere novamente. Preserve distinções entre comportamento implementado, amostra sintética e limitação conhecida. Nunca copie logs, arquivos privados, tokens, senhas, keyrings, snapshots ou dados de clientes. Exemplos usam somente loopback e identificadores fictícios.

Cada tema possui sua branch `tema/<nome>`; etapas de conteúdo, contratos e revisão são commits separados. A `main` integra os temas sem apagar as branches.

## Publicação

O workflow publica `index.html` e `assets/` no GitHub Pages após validar um push na `main`. A origem de publicação deve ser GitHub Actions. O workflow de verificação também aceita branches temáticas e pull requests.

## Fonte e licença

A fonte Inter é local e acompanha a [SIL Open Font License 1.1](assets/OFL.txt). Não há dependência de CDN, telemetria ou conexão com os serviços do Sentinel para consultar estas páginas.
