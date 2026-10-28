window.SENTINEL_DOCS = [
  {
    "id": "visao-geral",
    "title": "Visão geral",
    "group": "Comece aqui",
    "lead": "Da autorização à evidência: entenda cada fronteira de uma auditoria Sentinel.",
    "sources": [
      "README.md",
      "Sentinel/Program.cs",
      "Sentinel/Core/Domain.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Investigar com contexto. Concluir com evidências.",
        "paragraphs": [
          "Sentinel organiza avaliações de segurança de aplicações por projeto, organização e escopo autorizado. A interface cria e acompanha auditorias; o backend governa a execução; plugins produzem controles e evidências verificáveis. Os adaptadores atuais trabalham com URLs HTTP/HTTPS e snapshots ZIP.",
          "O fluxo central é projeto → escopo → auditoria e outbox → RabbitMQ → worker → plugin isolado → gateway autorizado → controles, evidências e achados. PostgreSQL mantém o estado durável. A notificação da fila não substitui o envelope persistido."
        ]
      },
      {
        "title": "Quatro perguntas para começar",
        "paragraphs": [],
        "items": [
          [
            "O que pode ser testado?",
            "O escopo define alvo, ambiente, métodos, perfis e janela. A API e o worker revalidam a autorização."
          ],
          [
            "O que foi executado?",
            "Estados, eventos e checkpoints mostram o progresso e as interrupções. Conclusão da auditoria não significa aprovação dos controles."
          ],
          [
            "O que foi observado?",
            "Controles carregam estado, severidade, confiança e origem. Evidências permitem conferir o recorte e a integridade."
          ],
          [
            "O que fazer depois?",
            "Achados consolidados preservam ocorrências, decisões humanas e reavaliações comparáveis."
          ]
        ]
      },
      {
        "title": "Estado da leitura",
        "paragraphs": [
          "Esta documentação descreve a revisão indicada nas fontes, consultada em 28/10/2026. Não acessa bancos, credenciais ou resultados privados da instalação. Exemplos e interações do site são didáticos e não executam auditorias.",
          "O produto está em validação, sem homologação empresarial declarada. A leitura separa implementação atual, resultados históricos e limites. Nenhum score, plugin ou ausência de achado equivale a certificação."
        ]
      },
      {
        "title": "Percurso de leitura",
        "paragraphs": [],
        "table": [
          [
            "Objetivo",
            "Comece por",
            "Continue em"
          ],
          [
            "Instalar e experimentar",
            "Primeiros passos",
            "Configuração e operação"
          ],
          [
            "Entender o sistema",
            "Arquitetura",
            "Domínio, execução e persistência"
          ],
          [
            "Investigar um resultado",
            "Plugins e controles",
            "Evidências, achados e score"
          ],
          [
            "Manter e evoluir",
            "API e frontend",
            "Testes, decisões e limites"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Comece aqui</p><h2>Investigar com contexto. Concluir com evidências.</h2></div></div><div class=\"prose\"><p>Sentinel organiza avaliações de segurança de aplicações por projeto, organização e escopo autorizado. A interface cria e acompanha auditorias; o backend governa a execução; plugins produzem controles e evidências verificáveis. Os adaptadores atuais trabalham com URLs HTTP/HTTPS e snapshots ZIP.</p></div><div class=\"prose\"><p>O fluxo central é projeto → escopo → auditoria e outbox → RabbitMQ → worker → plugin isolado → gateway autorizado → controles, evidências e achados. PostgreSQL mantém o estado durável. A notificação da fila não substitui o envelope persistido.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Comece aqui</p><h2>Quatro perguntas para começar</h2></div></div><div class=\"card-grid\"><article class=\"card\"><h3>O que pode ser testado?</h3><p>O escopo define alvo, ambiente, métodos, perfis e janela. A API e o worker revalidam a autorização.</p></article><article class=\"card\"><h3>O que foi executado?</h3><p>Estados, eventos e checkpoints mostram o progresso e as interrupções. Conclusão da auditoria não significa aprovação dos controles.</p></article><article class=\"card\"><h3>O que foi observado?</h3><p>Controles carregam estado, severidade, confiança e origem. Evidências permitem conferir o recorte e a integridade.</p></article><article class=\"card\"><h3>O que fazer depois?</h3><p>Achados consolidados preservam ocorrências, decisões humanas e reavaliações comparáveis.</p></article></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Comece aqui</p><h2>Estado da leitura</h2></div></div><div class=\"prose\"><p>Esta documentação descreve a revisão indicada nas fontes, consultada em 28/10/2026. Não acessa bancos, credenciais ou resultados privados da instalação. Exemplos e interações do site são didáticos e não executam auditorias.</p></div><div class=\"prose\"><p>O produto está em validação, sem homologação empresarial declarada. A leitura separa implementação atual, resultados históricos e limites. Nenhum score, plugin ou ausência de achado equivale a certificação.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Comece aqui</p><h2>Percurso de leitura</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Percurso de leitura\"><table><thead><tr><th scope=\"col\">Objetivo</th><th scope=\"col\">Comece por</th><th scope=\"col\">Continue em</th></tr></thead><tbody><tr><td>Instalar e experimentar</td><td>Primeiros passos</td><td>Configuração e operação</td></tr><tr><td>Entender o sistema</td><td>Arquitetura</td><td>Domínio, execução e persistência</td></tr><tr><td>Investigar um resultado</td><td>Plugins e controles</td><td>Evidências, achados e score</td></tr><tr><td>Manter e evoluir</td><td>API e frontend</td><td>Testes, decisões e limites</td></tr></tbody></table></div></section>"
  },
  {
    "id": "primeiros-passos",
    "title": "Primeiros passos",
    "group": "Comece aqui",
    "lead": "Prepare um laboratório local, abra o workspace e siga o primeiro fluxo autorizado.",
    "sources": [
      "README.md",
      "scripts/README.md",
      "scripts/start-local.ps1",
      "scripts/build-plugin-sandbox.ps1"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Pré-requisitos e preparação",
        "paragraphs": [
          "O README requer SDKs .NET 8/9, Node/npm e Rancher Desktop com PostgreSQL e RabbitMQ locais já configurados. Consulte os TargetFramework dos projetos antes de instalar SDKs. O bootstrap reutiliza recursos existentes; não é um provisionador universal de uma máquina vazia.",
          "Instale as dependências do frontend com npm ci em Sentinel.Web. Construa a imagem de plugins com o script próprio. Os comandos abaixo devem ser executados na raiz do código Sentinel, não na pasta desta documentação."
        ],
        "code": "cd Sentinel.Web\nnpm ci\ncd ..\n.\\scripts\\build-plugin-sandbox.ps1\n.\\scripts\\start-local.ps1"
      },
      {
        "title": "Entrada na aplicação",
        "paragraphs": [
          "A interface local usa http://localhost:4200; a API, http://localhost:5161. O Swagger fica em /swagger no ambiente Development. O script verifica saúde, configuração OIDC e página. Entre pelo provedor de identidade e selecione a organização autorizada.",
          "Cadastre um projeto de software, abra sua área e registre um escopo para um alvo de laboratório sob sua autorização. Defina explicitamente métodos, perfil e expiração. Salvar o plano de testes não inicia tráfego nem renova o escopo."
        ]
      },
      {
        "title": "Primeiro resultado",
        "paragraphs": [
          "Na tela Rodar testes, confira as modalidades disponíveis e confirme a execução desejada. Acompanhe o identificador retornado no histórico. Um bloqueio de política também pode ser persistido: leia o motivo antes de tentar novamente.",
          "Abra o detalhe, examine os controles e verifique a evidência. Separe Failed, Inconclusive e erro de execução. O site de documentação não cria projetos nem envia requisições ao alvo."
        ]
      },
      {
        "title": "Retomar após alterações",
        "paragraphs": [],
        "code": ".\\scripts\\start-local.ps1 -RestartApi",
        "note": "Se a conexão cair durante o envio de uma auditoria, consulte o histórico antes de reenviar: a API pode já ter aceitado o pedido. O bootstrap local e as credenciais de laboratório não devem ser usados como configuração de produção."
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Comece aqui</p><h2>Pré-requisitos e preparação</h2></div></div><div class=\"prose\"><p>O README requer SDKs .NET 8/9, Node/npm e Rancher Desktop com PostgreSQL e RabbitMQ locais já configurados. Consulte os TargetFramework dos projetos antes de instalar SDKs. O bootstrap reutiliza recursos existentes; não é um provisionador universal de uma máquina vazia.</p></div><div class=\"prose\"><p>Instale as dependências do frontend com npm ci em Sentinel.Web. Construa a imagem de plugins com o script próprio. Os comandos abaixo devem ser executados na raiz do código Sentinel, não na pasta desta documentação.</p></div><pre class=\"codebox\"><code>cd Sentinel.Web\nnpm ci\ncd ..\n.\\scripts\\build-plugin-sandbox.ps1\n.\\scripts\\start-local.ps1</code></pre></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Comece aqui</p><h2>Entrada na aplicação</h2></div></div><div class=\"prose\"><p>A interface local usa http://localhost:4200; a API, http://localhost:5161. O Swagger fica em /swagger no ambiente Development. O script verifica saúde, configuração OIDC e página. Entre pelo provedor de identidade e selecione a organização autorizada.</p></div><div class=\"prose\"><p>Cadastre um projeto de software, abra sua área e registre um escopo para um alvo de laboratório sob sua autorização. Defina explicitamente métodos, perfil e expiração. Salvar o plano de testes não inicia tráfego nem renova o escopo.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Comece aqui</p><h2>Primeiro resultado</h2></div></div><div class=\"prose\"><p>Na tela Rodar testes, confira as modalidades disponíveis e confirme a execução desejada. Acompanhe o identificador retornado no histórico. Um bloqueio de política também pode ser persistido: leia o motivo antes de tentar novamente.</p></div><div class=\"prose\"><p>Abra o detalhe, examine os controles e verifique a evidência. Separe Failed, Inconclusive e erro de execução. O site de documentação não cria projetos nem envia requisições ao alvo.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Comece aqui</p><h2>Retomar após alterações</h2></div></div><pre class=\"codebox\"><code>.\\scripts\\start-local.ps1 -RestartApi</code></pre><div class=\"callout\"><span>Se a conexão cair durante o envio de uma auditoria, consulte o histórico antes de reenviar: a API pode já ter aceitado o pedido. O bootstrap local e as credenciais de laboratório não devem ser usados como configuração de produção.</span></div></section>"
  },
  {
    "id": "arquitetura",
    "title": "Arquitetura",
    "group": "Estrutura do sistema",
    "lead": "Camadas explícitas entre apresentação, política, coordenação, execução e armazenamento.",
    "sources": [
      "Sentinel/Program.cs",
      "Sentinel/Workers/AuditWorker.cs",
      "Sentinel/Execution/OutboxDispatcher.cs",
      "Sentinel/Execution/ScopedHttpGateway.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Composição do host",
        "paragraphs": [
          "Program.cs registra controllers, serialização de enums, identidade, DbContextFactory, armazenamento, políticas, coordenação e serviços de background. Migrações EF Core são aplicadas na inicialização. Não há fallback em memória quando PostgreSQL está indisponível.",
          "A API e os workers usam serviços registrados no mesmo host. Não confunda a fronteira lógica do worker com a exigência de um executável independente: a separação principal do plugin ocorre no PluginHost, governado pelo runtime."
        ]
      },
      {
        "title": "Fronteiras de responsabilidade",
        "paragraphs": [],
        "items": [
          [
            "Sentinel.Web",
            "Angular apresenta contexto, formulários, histórico e artefatos. A interface não concede autorização por conta própria."
          ],
          [
            "Sentinel",
            "ASP.NET Core aplica identidade e política, persiste pedidos, coordena a fila e governa acessos ao alvo."
          ],
          [
            "Sentinel.Contracts",
            "Contratos de manifesto, protocolo e regras de snapshots compartilhados pelo host e PluginHost."
          ],
          [
            "Sentinel.PluginHost",
            "Implementações dos controles executadas com entrada limitada, prazo e resposta validada."
          ]
        ]
      },
      {
        "title": "Do pedido ao checkpoint",
        "paragraphs": [
          "Auditoria e outbox são gravados na mesma transação. O dispatcher publica no RabbitMQ com confirmação. O worker resolve o envelope persistido e adquire a posse antes de executar. O plugin solicita operações ao gateway, em vez de herdar acesso livre à rede ou credenciais do host.",
          "Controles e referências de evidências são persistidos por checkpoint. Projeção de achados e expurgo de conteúdo são serviços posteriores, com estados e limites próprios. A interface pode observar essa defasagem sem assumir perda de resultado."
        ]
      },
      {
        "title": "Dependências operacionais",
        "paragraphs": [],
        "table": [
          [
            "Componente",
            "Responsabilidade",
            "Falha relevante"
          ],
          [
            "PostgreSQL",
            "Estado, outbox, orçamento, lease e metadados",
            "Sem banco não há autorização distribuída confiável"
          ],
          [
            "RabbitMQ",
            "Notificação durável de trabalho",
            "Atraso de fila não elimina o pedido persistido"
          ],
          [
            "Docker",
            "Execução isolada dos plugins",
            "Imagem ou daemon indisponível impede sandbox"
          ],
          [
            "OIDC",
            "Identidade e papéis",
            "Token inválido impede acesso às rotas protegidas"
          ],
          [
            "Filesystem / S3",
            "Conteúdo cifrado das evidências",
            "Metadados existentes não garantem disponibilidade do artefato"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Estrutura do sistema</p><h2>Composição do host</h2></div></div><div class=\"prose\"><p>Program.cs registra controllers, serialização de enums, identidade, DbContextFactory, armazenamento, políticas, coordenação e serviços de background. Migrações EF Core são aplicadas na inicialização. Não há fallback em memória quando PostgreSQL está indisponível.</p></div><div class=\"prose\"><p>A API e os workers usam serviços registrados no mesmo host. Não confunda a fronteira lógica do worker com a exigência de um executável independente: a separação principal do plugin ocorre no PluginHost, governado pelo runtime.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Estrutura do sistema</p><h2>Fronteiras de responsabilidade</h2></div></div><div class=\"card-grid\"><article class=\"card\"><h3>Sentinel.Web</h3><p>Angular apresenta contexto, formulários, histórico e artefatos. A interface não concede autorização por conta própria.</p></article><article class=\"card\"><h3>Sentinel</h3><p>ASP.NET Core aplica identidade e política, persiste pedidos, coordena a fila e governa acessos ao alvo.</p></article><article class=\"card\"><h3>Sentinel.Contracts</h3><p>Contratos de manifesto, protocolo e regras de snapshots compartilhados pelo host e PluginHost.</p></article><article class=\"card\"><h3>Sentinel.PluginHost</h3><p>Implementações dos controles executadas com entrada limitada, prazo e resposta validada.</p></article></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Estrutura do sistema</p><h2>Do pedido ao checkpoint</h2></div></div><div class=\"prose\"><p>Auditoria e outbox são gravados na mesma transação. O dispatcher publica no RabbitMQ com confirmação. O worker resolve o envelope persistido e adquire a posse antes de executar. O plugin solicita operações ao gateway, em vez de herdar acesso livre à rede ou credenciais do host.</p></div><div class=\"prose\"><p>Controles e referências de evidências são persistidos por checkpoint. Projeção de achados e expurgo de conteúdo são serviços posteriores, com estados e limites próprios. A interface pode observar essa defasagem sem assumir perda de resultado.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Estrutura do sistema</p><h2>Dependências operacionais</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Dependências operacionais\"><table><thead><tr><th scope=\"col\">Componente</th><th scope=\"col\">Responsabilidade</th><th scope=\"col\">Falha relevante</th></tr></thead><tbody><tr><td>PostgreSQL</td><td>Estado, outbox, orçamento, lease e metadados</td><td>Sem banco não há autorização distribuída confiável</td></tr><tr><td>RabbitMQ</td><td>Notificação durável de trabalho</td><td>Atraso de fila não elimina o pedido persistido</td></tr><tr><td>Docker</td><td>Execução isolada dos plugins</td><td>Imagem ou daemon indisponível impede sandbox</td></tr><tr><td>OIDC</td><td>Identidade e papéis</td><td>Token inválido impede acesso às rotas protegidas</td></tr><tr><td>Filesystem / S3</td><td>Conteúdo cifrado das evidências</td><td>Metadados existentes não garantem disponibilidade do artefato</td></tr></tbody></table></div></section>"
  },
  {
    "id": "dominio",
    "title": "Domínio e dados",
    "group": "Estrutura do sistema",
    "lead": "Projetos dão contexto; escopos autorizam; auditorias registram o que aconteceu.",
    "sources": [
      "Sentinel/Core/Domain.cs",
      "Sentinel/Core/DataOrigins.cs",
      "Sentinel/Core/ProjectRunProfile.cs",
      "Sentinel/Findings/FindingModel.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Entidades e relações",
        "paragraphs": [],
        "table": [
          [
            "Entidade",
            "Papel",
            "Relação"
          ],
          [
            "Projeto",
            "Nome, propósito e contexto de trabalho",
            "Agrupa escopos, auditorias e fontes"
          ],
          [
            "Escopo autorizado",
            "Alvo, ambiente, janela e regras",
            "Pertence a um projeto"
          ],
          [
            "Auditoria",
            "Pedido, estado e origem declarada",
            "Vincula alvo, escopo, controles e evidências"
          ],
          [
            "Controle",
            "Avaliação de um critério",
            "Preserva plugin, versão, confiança e severidade"
          ],
          [
            "Evidência",
            "Conteúdo verificável e metadados",
            "Hash, retenção e referência de armazenamento"
          ],
          [
            "Achado",
            "Consolidação temporal para triagem",
            "Agrupa ocorrências comparáveis"
          ],
          [
            "Plano",
            "Preferências reutilizáveis de execução",
            "Referências a credencial e snapshot do projeto"
          ]
        ]
      },
      {
        "title": "Referência não é segredo",
        "paragraphs": [
          "O plano persiste URLs e identificadores de credenciais/snapshots. A configuração usa expectedVersion para evitar sobrescrita concorrente, inclusive no primeiro salvamento. Referências de outro projeto são recusadas.",
          "Tokens e senhas permanecem no cofre. A validade do perfil e do escopo continua sendo verificada quando o plano é executado. Salvar uma configuração não cria uma autorização nova."
        ]
      },
      {
        "title": "Leitura dos estados",
        "paragraphs": [
          "AuditState contém Queued, WaitingForBudget, Running, Cancelling, Cancelled, Interrupted, Completed, Blocked e Failed. O estado da auditoria representa o ciclo de execução. O estado de cada controle representa sua avaliação; os dois não são intercambiáveis."
        ]
      },
      {
        "title": "Estados terminais",
        "paragraphs": [],
        "table": [
          [
            "Estado",
            "Interpretação"
          ],
          [
            "Completed",
            "Execução concluída; controles ainda podem falhar ou ser inconclusivos"
          ],
          [
            "Blocked",
            "Política recusou a execução"
          ],
          [
            "Failed",
            "Falha operacional da auditoria"
          ],
          [
            "Cancelled",
            "Cancelamento concluído"
          ],
          [
            "Interrupted",
            "Execução interrompida, com efeitos incertos que não devem ser repetidos automaticamente"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Estrutura do sistema</p><h2>Entidades e relações</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Entidades e relações\"><table><thead><tr><th scope=\"col\">Entidade</th><th scope=\"col\">Papel</th><th scope=\"col\">Relação</th></tr></thead><tbody><tr><td>Projeto</td><td>Nome, propósito e contexto de trabalho</td><td>Agrupa escopos, auditorias e fontes</td></tr><tr><td>Escopo autorizado</td><td>Alvo, ambiente, janela e regras</td><td>Pertence a um projeto</td></tr><tr><td>Auditoria</td><td>Pedido, estado e origem declarada</td><td>Vincula alvo, escopo, controles e evidências</td></tr><tr><td>Controle</td><td>Avaliação de um critério</td><td>Preserva plugin, versão, confiança e severidade</td></tr><tr><td>Evidência</td><td>Conteúdo verificável e metadados</td><td>Hash, retenção e referência de armazenamento</td></tr><tr><td>Achado</td><td>Consolidação temporal para triagem</td><td>Agrupa ocorrências comparáveis</td></tr><tr><td>Plano</td><td>Preferências reutilizáveis de execução</td><td>Referências a credencial e snapshot do projeto</td></tr></tbody></table></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Estrutura do sistema</p><h2>Referência não é segredo</h2></div></div><div class=\"prose\"><p>O plano persiste URLs e identificadores de credenciais/snapshots. A configuração usa expectedVersion para evitar sobrescrita concorrente, inclusive no primeiro salvamento. Referências de outro projeto são recusadas.</p></div><div class=\"prose\"><p>Tokens e senhas permanecem no cofre. A validade do perfil e do escopo continua sendo verificada quando o plano é executado. Salvar uma configuração não cria uma autorização nova.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Estrutura do sistema</p><h2>Leitura dos estados</h2></div></div><div class=\"prose\"><p>AuditState contém Queued, WaitingForBudget, Running, Cancelling, Cancelled, Interrupted, Completed, Blocked e Failed. O estado da auditoria representa o ciclo de execução. O estado de cada controle representa sua avaliação; os dois não são intercambiáveis.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Estrutura do sistema</p><h2>Estados terminais</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Estados terminais\"><table><thead><tr><th scope=\"col\">Estado</th><th scope=\"col\">Interpretação</th></tr></thead><tbody><tr><td>Completed</td><td>Execução concluída; controles ainda podem falhar ou ser inconclusivos</td></tr><tr><td>Blocked</td><td>Política recusou a execução</td></tr><tr><td>Failed</td><td>Falha operacional da auditoria</td></tr><tr><td>Cancelled</td><td>Cancelamento concluído</td></tr><tr><td>Interrupted</td><td>Execução interrompida, com efeitos incertos que não devem ser repetidos automaticamente</td></tr></tbody></table></div></section>"
  },
  {
    "id": "identidade",
    "title": "Identidade e organizações",
    "group": "Governança",
    "lead": "Autenticação do operador, permissões e isolamento dos dados por organização.",
    "sources": [
      "Sentinel/Identity/IdentitySetup.cs",
      "Sentinel/Identity/TenantAccess.cs",
      "Sentinel/Persistence/SentinelDbContext.cs",
      "Sentinel/Controllers/IdentityController.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Entrada com OIDC",
        "paragraphs": [
          "O frontend utiliza Authorization Code com PKCE S256. Tokens ficam na memória da aba; o estado temporário do protocolo usa sessionStorage. Recarregar a aplicação exige entrar novamente, podendo reaproveitar a sessão no provedor.",
          "A API valida assinatura, emissor, audiência, prazo, papéis e vínculo com uma única organização existente. Rotas de saúde e configuração de identidade são públicas; rotas de negócio exigem autenticação e políticas aplicáveis."
        ]
      },
      {
        "title": "Isolamento por organização",
        "paragraphs": [
          "Filtros globais do EF Core limitam os recursos HTTP ao tenant. Uma requisição anônima não herda a organização histórica. Serviços de background trabalham com envelopes persistidos entre organizações e precisam manter os vínculos de cada operação.",
          "Administradores de plataforma gerenciam organizações e infraestrutura global, mas consultas a projetos continuam no contexto da organização do token. Atribuição de papéis e organização acontece no provedor."
        ]
      },
      {
        "title": "Credenciais diferentes, fronteiras diferentes",
        "paragraphs": [
          "O login do operador permite usar o Sentinel. O acesso ao alvo é outro contrato, administrado no cofre do projeto. Não reutilize credenciais de infraestrutura como credenciais do alvo."
        ]
      },
      {
        "title": "Papéis e responsabilidades",
        "paragraphs": [],
        "table": [
          [
            "Papel",
            "Capacidade principal"
          ],
          [
            "ReadOnly / Auditor",
            "Consultar recursos autorizados da organização"
          ],
          [
            "Developer",
            "Consultar, cadastrar projetos, executar baixo risco, cancelar e fazer triagem permitida"
          ],
          [
            "SecurityEngineer / OrganizationAdmin",
            "Também gerenciar escopos e executar laboratório ativo"
          ],
          [
            "PlatformAdmin",
            "Também administrar organizações, infraestrutura e orçamento global por alvo"
          ]
        ],
        "note": "As políticas do servidor são a autoridade. Permissões por projeto e aprovação de produção não devem ser presumidas a partir de um papel global."
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Entrada com OIDC</h2></div></div><div class=\"prose\"><p>O frontend utiliza Authorization Code com PKCE S256. Tokens ficam na memória da aba; o estado temporário do protocolo usa sessionStorage. Recarregar a aplicação exige entrar novamente, podendo reaproveitar a sessão no provedor.</p></div><div class=\"prose\"><p>A API valida assinatura, emissor, audiência, prazo, papéis e vínculo com uma única organização existente. Rotas de saúde e configuração de identidade são públicas; rotas de negócio exigem autenticação e políticas aplicáveis.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Isolamento por organização</h2></div></div><div class=\"prose\"><p>Filtros globais do EF Core limitam os recursos HTTP ao tenant. Uma requisição anônima não herda a organização histórica. Serviços de background trabalham com envelopes persistidos entre organizações e precisam manter os vínculos de cada operação.</p></div><div class=\"prose\"><p>Administradores de plataforma gerenciam organizações e infraestrutura global, mas consultas a projetos continuam no contexto da organização do token. Atribuição de papéis e organização acontece no provedor.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Credenciais diferentes, fronteiras diferentes</h2></div></div><div class=\"prose\"><p>O login do operador permite usar o Sentinel. O acesso ao alvo é outro contrato, administrado no cofre do projeto. Não reutilize credenciais de infraestrutura como credenciais do alvo.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Papéis e responsabilidades</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Papéis e responsabilidades\"><table><thead><tr><th scope=\"col\">Papel</th><th scope=\"col\">Capacidade principal</th></tr></thead><tbody><tr><td>ReadOnly / Auditor</td><td>Consultar recursos autorizados da organização</td></tr><tr><td>Developer</td><td>Consultar, cadastrar projetos, executar baixo risco, cancelar e fazer triagem permitida</td></tr><tr><td>SecurityEngineer / OrganizationAdmin</td><td>Também gerenciar escopos e executar laboratório ativo</td></tr><tr><td>PlatformAdmin</td><td>Também administrar organizações, infraestrutura e orçamento global por alvo</td></tr></tbody></table></div><div class=\"callout\"><span>As políticas do servidor são a autoridade. Permissões por projeto e aprovação de produção não devem ser presumidas a partir de um papel global.</span></div></section>"
  },
  {
    "id": "escopos",
    "title": "Escopos e políticas",
    "group": "Governança",
    "lead": "A autorização é um contrato verificável de alvo, janela, método e ação.",
    "sources": [
      "Sentinel/Core/ScopeRules.cs",
      "Sentinel/Core/PolicyAndAuditService.cs",
      "Sentinel/Core/ScopeLifecycle.cs",
      "Sentinel/Controllers/ScopeLifecycleController.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Como o alvo é comparado",
        "paragraphs": [
          "A política compara esquema, host, porta e prefixo de caminho com limite de segmento. /api/cars inclui descendentes, mas não /api/cars-other. URLs com credenciais, fragmento, segmentos perigosos e codificação percentual no caminho são recusadas.",
          "A janela inclui o início e exclui a expiração. Regras aceitam métodos conhecidos, ações reconhecidas e até cinquenta exclusões dentro da base. Uma exclusão de escopo vigente prevalece sobre permissões de outro escopo sobreposto."
        ]
      },
      {
        "title": "Perfis e produção",
        "paragraphs": [
          "simulated é o nome histórico do perfil HTTP de baixo risco e pode produzir tráfego real. lab-active e authenticated-lab exigem confirmação explícita, ambiente laboratorio e localhost/IP de loopback. source-analysis usa autorização exata do snapshot.",
          "Ambientes identificados como produção retornam ApprovalRequired. O mecanismo completo de aprovação de produção permanece indisponível; não existe liberação implícita por ser administrador."
        ]
      },
      {
        "title": "Revogar sem apagar o histórico",
        "paragraphs": [
          "Revogação exige permissão scopes.manage e motivo de 8 a 1000 caracteres. O primeiro ator/motivo é preservado em chamadas concorrentes. A operação solicita cancelamento dos trabalhos associados, sem reativação do registro. Para nova autorização, crie outro escopo.",
          "Revogar impede novas permissões, mas não desfaz requisições já admitidas. Acompanhe as auditorias até o estado terminal. Regras não são editadas no lugar: revogue e registre a substituição."
        ]
      },
      {
        "title": "Exemplo didático de regras",
        "paragraphs": [],
        "code": "{\n  \"startsAtUtc\": null,\n  \"methods\": [\"GET\"],\n  \"actions\": [\"simulated\"],\n  \"exclusions\": [\"/api/admin\"]\n}",
        "note": "O exemplo é somente o objeto rules. O cadastro completo também precisa de targetBaseUrl, environment e expiresAtUtc futuro. Nenhum exemplo deste site executa tráfego."
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Como o alvo é comparado</h2></div></div><div class=\"prose\"><p>A política compara esquema, host, porta e prefixo de caminho com limite de segmento. /api/cars inclui descendentes, mas não /api/cars-other. URLs com credenciais, fragmento, segmentos perigosos e codificação percentual no caminho são recusadas.</p></div><div class=\"prose\"><p>A janela inclui o início e exclui a expiração. Regras aceitam métodos conhecidos, ações reconhecidas e até cinquenta exclusões dentro da base. Uma exclusão de escopo vigente prevalece sobre permissões de outro escopo sobreposto.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Perfis e produção</h2></div></div><div class=\"prose\"><p>simulated é o nome histórico do perfil HTTP de baixo risco e pode produzir tráfego real. lab-active e authenticated-lab exigem confirmação explícita, ambiente laboratorio e localhost/IP de loopback. source-analysis usa autorização exata do snapshot.</p></div><div class=\"prose\"><p>Ambientes identificados como produção retornam ApprovalRequired. O mecanismo completo de aprovação de produção permanece indisponível; não existe liberação implícita por ser administrador.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Revogar sem apagar o histórico</h2></div></div><div class=\"prose\"><p>Revogação exige permissão scopes.manage e motivo de 8 a 1000 caracteres. O primeiro ator/motivo é preservado em chamadas concorrentes. A operação solicita cancelamento dos trabalhos associados, sem reativação do registro. Para nova autorização, crie outro escopo.</p></div><div class=\"prose\"><p>Revogar impede novas permissões, mas não desfaz requisições já admitidas. Acompanhe as auditorias até o estado terminal. Regras não são editadas no lugar: revogue e registre a substituição.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Exemplo didático de regras</h2></div></div><pre class=\"codebox\"><code>{\n  &quot;startsAtUtc&quot;: null,\n  &quot;methods&quot;: [&quot;GET&quot;],\n  &quot;actions&quot;: [&quot;simulated&quot;],\n  &quot;exclusions&quot;: [&quot;/api/admin&quot;]\n}</code></pre><div class=\"callout\"><span>O exemplo é somente o objeto rules. O cadastro completo também precisa de targetBaseUrl, environment e expiresAtUtc futuro. Nenhum exemplo deste site executa tráfego.</span></div></section>"
  },
  {
    "id": "origens",
    "title": "Origem dos resultados",
    "group": "Governança",
    "lead": "Separe software avaliado, corpus sintético e legado desconhecido antes de comparar.",
    "sources": [
      "Sentinel/Core/DataOrigins.cs",
      "Sentinel/Core/DataOriginClassification.cs",
      "Sentinel/Controllers/DataOriginsController.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Origem declarada, sem inferência",
        "paragraphs": [
          "SoftwareUnderTest identifica resultados do software avaliado. SyntheticCorpus identifica validação sintética. Unknown preserva entradas legadas sem classificação. O nome do projeto, uma pasta ou uma URL não prova a origem.",
          "Projetos comuns não recebem corpus automaticamente. Projetos SentinelValidation são dedicados à validação e exigem criação com privilégio apropriado. A API impede novas combinações incompatíveis de propósito e origem."
        ]
      },
      {
        "title": "Classificação do legado",
        "paragraphs": [
          "A operação de classificação recebe grupos de auditorias encerradas, motivo e origem; registra ator e evento append-only. Preserva IDs, evidências e decisões humanas. Grupos incompletos, colisões e substituição de origem já declarada são recusados.",
          "Consultas por contexto aplicam origem antes de paginar. Relatórios individuais mantêm a origem histórica. A separação também participa de fingerprints: uma aprovação sintética não resolve um achado do software."
        ]
      },
      {
        "title": "Impacto nas leituras",
        "paragraphs": [],
        "table": [
          [
            "Consulta",
            "Regra de interpretação"
          ],
          [
            "Score",
            "Exclui corpus, desconhecidos e fixtures"
          ],
          [
            "Achados",
            "Não mistura origens conhecidas em uma mesma conclusão"
          ],
          [
            "Histórico",
            "Pode mostrar todas as origens autorizadas, com filtros explícitos"
          ],
          [
            "Classificação",
            "Declaração do operador; não é prova independente de procedência"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Origem declarada, sem inferência</h2></div></div><div class=\"prose\"><p>SoftwareUnderTest identifica resultados do software avaliado. SyntheticCorpus identifica validação sintética. Unknown preserva entradas legadas sem classificação. O nome do projeto, uma pasta ou uma URL não prova a origem.</p></div><div class=\"prose\"><p>Projetos comuns não recebem corpus automaticamente. Projetos SentinelValidation são dedicados à validação e exigem criação com privilégio apropriado. A API impede novas combinações incompatíveis de propósito e origem.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Classificação do legado</h2></div></div><div class=\"prose\"><p>A operação de classificação recebe grupos de auditorias encerradas, motivo e origem; registra ator e evento append-only. Preserva IDs, evidências e decisões humanas. Grupos incompletos, colisões e substituição de origem já declarada são recusados.</p></div><div class=\"prose\"><p>Consultas por contexto aplicam origem antes de paginar. Relatórios individuais mantêm a origem histórica. A separação também participa de fingerprints: uma aprovação sintética não resolve um achado do software.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Governança</p><h2>Impacto nas leituras</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Impacto nas leituras\"><table><thead><tr><th scope=\"col\">Consulta</th><th scope=\"col\">Regra de interpretação</th></tr></thead><tbody><tr><td>Score</td><td>Exclui corpus, desconhecidos e fixtures</td></tr><tr><td>Achados</td><td>Não mistura origens conhecidas em uma mesma conclusão</td></tr><tr><td>Histórico</td><td>Pode mostrar todas as origens autorizadas, com filtros explícitos</td></tr><tr><td>Classificação</td><td>Declaração do operador; não é prova independente de procedência</td></tr></tbody></table></div></section>"
  },
  {
    "id": "execucao",
    "title": "Execução e concorrência",
    "group": "Motor de auditoria",
    "lead": "Fila, posse, orçamento e checkpoints controlam o trabalho entre processos.",
    "sources": [
      "Sentinel/Execution/ExecutionCoordinator.cs",
      "Sentinel/Execution/LeaseHeartbeat.cs",
      "Sentinel/Execution/ExecutionReconciler.cs",
      "Sentinel/Workers/AuditWorker.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Uma posse válida por vez",
        "paragraphs": [
          "O PostgreSQL coordena locks, fencing token e lease de doze segundos. O heartbeat renova a posse a cada 500 ms por thread dedicada. O relógio do banco define a validade; paralisia do processo, indisponibilidade do banco e perda de posse continuam relevantes.",
          "Uma auditoria por host/porta compartilha orçamento entre projetos e perfis. localhost, IPv4 e IPv6 de loopback são agrupados; aliases DNS externos e portas distintas não são automaticamente tratados como o mesmo alvo. A taxa global varia de uma a dez permissões por segundo."
        ]
      },
      {
        "title": "Checkpoints e retomada",
        "paragraphs": [
          "O checkpoint de cada plugin persiste controles e evidências atomicamente. Queda entre plugins permite retomar o trabalho sem repetir checkpoints, dentro do limite de posses. Queda durante um plugin preserva resultados e pode terminar como Interrupted após a reserva de segurança.",
          "Fencing e checkpoint reduzem repetição, mas não oferecem desfazer efeitos já enviados. Cancelamento persistido recusa novas permissões e o monitor encerra o filho. O estado Cancelling precisa ser acompanhado até Cancelled ou outro terminal."
        ]
      },
      {
        "title": "Histórico completo por cursor",
        "paragraphs": [
          "O snapshot da execução mostra os últimos cem eventos. O endpoint /execution/events aceita beforeId, pageSize de 1 a 500, kind e pluginId; nextBeforeId permite acessar páginas anteriores. O tamanho de página não limita o histórico total.",
          "O reconciliador usa outbox para republicar trabalhos em espera. Não confunda uma contagem de fila vazia com execução concluída: o trabalho pode estar em processamento ou aguardando orçamento."
        ]
      },
      {
        "title": "Fluxo de estados",
        "paragraphs": [],
        "table": [
          [
            "Etapa",
            "Condição observável"
          ],
          [
            "Queued",
            "Pedido persistido e pendente de processamento"
          ],
          [
            "WaitingForBudget",
            "Aguarda disponibilidade global do alvo"
          ],
          [
            "Running",
            "Posse válida e execução em andamento"
          ],
          [
            "Cancelling",
            "Cancelamento solicitado; efeitos em trânsito podem concluir"
          ],
          [
            "Completed / Failed / Interrupted",
            "Conclusão, falha ou interrupção conforme o resultado operacional"
          ]
        ],
        "note": "O diagrama didático da página não reproduz todas as transições internas. Consulte os eventos persistidos para diagnosticar uma execução real."
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Uma posse válida por vez</h2></div></div><div class=\"prose\"><p>O PostgreSQL coordena locks, fencing token e lease de doze segundos. O heartbeat renova a posse a cada 500 ms por thread dedicada. O relógio do banco define a validade; paralisia do processo, indisponibilidade do banco e perda de posse continuam relevantes.</p></div><div class=\"prose\"><p>Uma auditoria por host/porta compartilha orçamento entre projetos e perfis. localhost, IPv4 e IPv6 de loopback são agrupados; aliases DNS externos e portas distintas não são automaticamente tratados como o mesmo alvo. A taxa global varia de uma a dez permissões por segundo.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Checkpoints e retomada</h2></div></div><div class=\"prose\"><p>O checkpoint de cada plugin persiste controles e evidências atomicamente. Queda entre plugins permite retomar o trabalho sem repetir checkpoints, dentro do limite de posses. Queda durante um plugin preserva resultados e pode terminar como Interrupted após a reserva de segurança.</p></div><div class=\"prose\"><p>Fencing e checkpoint reduzem repetição, mas não oferecem desfazer efeitos já enviados. Cancelamento persistido recusa novas permissões e o monitor encerra o filho. O estado Cancelling precisa ser acompanhado até Cancelled ou outro terminal.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Histórico completo por cursor</h2></div></div><div class=\"prose\"><p>O snapshot da execução mostra os últimos cem eventos. O endpoint /execution/events aceita beforeId, pageSize de 1 a 500, kind e pluginId; nextBeforeId permite acessar páginas anteriores. O tamanho de página não limita o histórico total.</p></div><div class=\"prose\"><p>O reconciliador usa outbox para republicar trabalhos em espera. Não confunda uma contagem de fila vazia com execução concluída: o trabalho pode estar em processamento ou aguardando orçamento.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Fluxo de estados</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Fluxo de estados\"><table><thead><tr><th scope=\"col\">Etapa</th><th scope=\"col\">Condição observável</th></tr></thead><tbody><tr><td>Queued</td><td>Pedido persistido e pendente de processamento</td></tr><tr><td>WaitingForBudget</td><td>Aguarda disponibilidade global do alvo</td></tr><tr><td>Running</td><td>Posse válida e execução em andamento</td></tr><tr><td>Cancelling</td><td>Cancelamento solicitado; efeitos em trânsito podem concluir</td></tr><tr><td>Completed / Failed / Interrupted</td><td>Conclusão, falha ou interrupção conforme o resultado operacional</td></tr></tbody></table></div><div class=\"callout\"><span>O diagrama didático da página não reproduz todas as transições internas. Consulte os eventos persistidos para diagnosticar uma execução real.</span></div></section>"
  },
  {
    "id": "mensageria",
    "title": "Outbox e mensageria",
    "group": "Motor de auditoria",
    "lead": "Entrega confirmada e reconciliação conectam o pedido persistido à execução.",
    "sources": [
      "Sentinel/Execution/OutboxDispatcher.cs",
      "Sentinel/Execution/RabbitMqTopology.cs",
      "Sentinel/Execution/RabbitMqConnectionProvider.cs",
      "Sentinel/Workers/DeadLetterAuditConsumer.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Por que existe uma outbox",
        "paragraphs": [
          "A criação de auditoria e sua mensagem pendente pertencem à mesma transação PostgreSQL. Assim, um pedido Queued não depende de publicar no broker durante a requisição HTTP. O dispatcher tenta entregar a notificação e registra seu progresso.",
          "A topologia usa filas quorum, publisher confirms, confirmação manual, prefetch 1, limite de redelivery e dead-letter queue. Confirmação de publicação indica aceitação pelo broker, não término do plugin."
        ]
      },
      {
        "title": "Mensagem não é autoridade",
        "paragraphs": [
          "O worker recebe uma notificação e carrega o envelope persistido. Alvo, escopo e confirmação não são aceitos cegamente do payload AMQP. Redelivery não deve duplicar um checkpoint concluído.",
          "A DLQ é observada pelo consumidor dedicado. Antes de reenviar manualmente um trabalho, verifique estado, lease, checkpoints e causa da falha; uma execução com efeito incerto não deve ser tratada como pedido novo."
        ]
      },
      {
        "title": "Observar sem consumir",
        "paragraphs": [
          "O painel operacional usa consulta passiva do AMQP para mensagens prontas e consumidores. Não lê payloads privados nem consome a fila para medir seu estado. Uma contagem instantânea não mede throughput."
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Por que existe uma outbox</h2></div></div><div class=\"prose\"><p>A criação de auditoria e sua mensagem pendente pertencem à mesma transação PostgreSQL. Assim, um pedido Queued não depende de publicar no broker durante a requisição HTTP. O dispatcher tenta entregar a notificação e registra seu progresso.</p></div><div class=\"prose\"><p>A topologia usa filas quorum, publisher confirms, confirmação manual, prefetch 1, limite de redelivery e dead-letter queue. Confirmação de publicação indica aceitação pelo broker, não término do plugin.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Mensagem não é autoridade</h2></div></div><div class=\"prose\"><p>O worker recebe uma notificação e carrega o envelope persistido. Alvo, escopo e confirmação não são aceitos cegamente do payload AMQP. Redelivery não deve duplicar um checkpoint concluído.</p></div><div class=\"prose\"><p>A DLQ é observada pelo consumidor dedicado. Antes de reenviar manualmente um trabalho, verifique estado, lease, checkpoints e causa da falha; uma execução com efeito incerto não deve ser tratada como pedido novo.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Observar sem consumir</h2></div></div><div class=\"prose\"><p>O painel operacional usa consulta passiva do AMQP para mensagens prontas e consumidores. Não lê payloads privados nem consome a fila para medir seu estado. Uma contagem instantânea não mede throughput.</p></div></section>"
  }
];
