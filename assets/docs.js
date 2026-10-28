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
      },
      {
        "title": "Roteiro de diagnóstico",
        "paragraphs": [],
        "items": [
          [
            "Outbox crescendo",
            "Verifique conectividade do broker, confirmação de publicação e erros do dispatcher."
          ],
          [
            "Fila pronta crescendo",
            "Verifique consumidores e disponibilidade de workers; depois orçamento e sandbox."
          ],
          [
            "Sem mensagens prontas",
            "Consulte auditorias Running e WaitingForBudget antes de concluir que não existe trabalho."
          ],
          [
            "DLQ com entradas",
            "Investigue redeliveries e estado persistido; preserve o histórico do pedido."
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Por que existe uma outbox</h2></div></div><div class=\"prose\"><p>A criação de auditoria e sua mensagem pendente pertencem à mesma transação PostgreSQL. Assim, um pedido Queued não depende de publicar no broker durante a requisição HTTP. O dispatcher tenta entregar a notificação e registra seu progresso.</p></div><div class=\"prose\"><p>A topologia usa filas quorum, publisher confirms, confirmação manual, prefetch 1, limite de redelivery e dead-letter queue. Confirmação de publicação indica aceitação pelo broker, não término do plugin.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Mensagem não é autoridade</h2></div></div><div class=\"prose\"><p>O worker recebe uma notificação e carrega o envelope persistido. Alvo, escopo e confirmação não são aceitos cegamente do payload AMQP. Redelivery não deve duplicar um checkpoint concluído.</p></div><div class=\"prose\"><p>A DLQ é observada pelo consumidor dedicado. Antes de reenviar manualmente um trabalho, verifique estado, lease, checkpoints e causa da falha; uma execução com efeito incerto não deve ser tratada como pedido novo.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Observar sem consumir</h2></div></div><div class=\"prose\"><p>O painel operacional usa consulta passiva do AMQP para mensagens prontas e consumidores. Não lê payloads privados nem consome a fila para medir seu estado. Uma contagem instantânea não mede throughput.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Roteiro de diagnóstico</h2></div></div><div class=\"card-grid\"><article class=\"card\"><h3>Outbox crescendo</h3><p>Verifique conectividade do broker, confirmação de publicação e erros do dispatcher.</p></article><article class=\"card\"><h3>Fila pronta crescendo</h3><p>Verifique consumidores e disponibilidade de workers; depois orçamento e sandbox.</p></article><article class=\"card\"><h3>Sem mensagens prontas</h3><p>Consulte auditorias Running e WaitingForBudget antes de concluir que não existe trabalho.</p></article><article class=\"card\"><h3>DLQ com entradas</h3><p>Investigue redeliveries e estado persistido; preserve o histórico do pedido.</p></article></div></section>"
  },
  {
    "id": "plugins",
    "title": "Plugins e controles",
    "group": "Motor de auditoria",
    "lead": "Manifestos declaram capacidades, controles, permissões e limites de cada execução.",
    "sources": [
      "Sentinel/Execution/PluginRegistry.cs",
      "Sentinel/Execution/PluginSelectionPolicy.cs",
      "Sentinel/Execution/PluginSchemaValidator.cs",
      "Sentinel.Contracts/PluginManifest.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Contrato antes da execução",
        "paragraphs": [
          "Cada plugin possui manifesto YAML validado por schema e um contrato de entrada/saída. O catálogo declara identificador, versão, controles, modo, permissões, capacidades de gateway, isolamento e recursos. Um manifesto presente não comprova execução bem-sucedida.",
          "Plugins de ativação explicit exigem seleção e compatibilidade com o perfil. O gateway só libera capacidades declaradas e autorizadas. Contratos de login, escrita, dupla identidade e leitura de OpenAPI não são permissões genéricas de rede."
        ]
      },
      {
        "title": "Interpretação dos controles",
        "paragraphs": [
          "Passed vale para o critério e o recorte efetivamente observados. Failed pode produzir candidato a achado, preservando confiança e severidade. Inconclusive registra lacunas e pré-condições não satisfeitas. Informational registra informação sem aprovação de segurança.",
          "SIM-001 é fixture determinística do pipeline, não teste do alvo. Manifestos válidos locais ainda são aprovados automaticamente; isso não equivale a admissão empresarial de extensões de terceiros."
        ]
      },
      {
        "title": "Catálogo extraído dos manifestos",
        "paragraphs": [],
        "table": [
          [
            "Plugin",
            "Versão",
            "Controles",
            "Modo / ativação",
            "Prazo / memória"
          ],
          [
            "sentinel.dast.zap-baseline",
            "1.0.0",
            "[DAST-01]",
            "passive / explicit",
            "240 s / 1536 MiB"
          ],
          [
            "sentinel.fixture.sim-001",
            "1.0.1",
            "[SIM-001]",
            "passive / automática",
            "15 s / 64 MiB"
          ],
          [
            "sentinel.http.cookie-security",
            "1.0.0",
            "[TLS-02]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.http.cors-reflection",
            "1.0.0",
            "[WEB-CFG-02]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.http.csp-quality",
            "1.0.0",
            "[WEB-CFG-07]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.http.error-disclosure",
            "1.0.0",
            "[WEB-CFG-04]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.http.exposed-endpoints",
            "1.0.0",
            "[WEB-CFG-05]",
            "passive / automática",
            "90 s / 128 MiB"
          ],
          [
            "sentinel.http.host-header-trust",
            "1.0.0",
            "[WEB-CFG-06]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.http.security-headers",
            "1.0.0",
            "[WEB-CFG-01]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.http.tech-fingerprint-headers",
            "1.0.0",
            "[WEB-CFG-09]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.http.transport-security",
            "1.0.0",
            "[TLS-01]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.http.waf-fingerprint",
            "1.0.0",
            "[NET-WAF-01]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.lab.api-anonymous-access",
            "1.0.0",
            "[API-AUTHZ-01]",
            "active / automática",
            "18 s / 128 MiB"
          ],
          [
            "sentinel.lab.auth-brute",
            "1.0.0",
            "[AUTH-BRUTE-01]",
            "active / explicit",
            "30 s / 128 MiB"
          ],
          [
            "sentinel.lab.authenticated-access",
            "1.1.0",
            "[LAB-ACCESS-01]",
            "active / automática",
            "12 s / 128 MiB"
          ],
          [
            "sentinel.lab.body-robustness",
            "1.0.1",
            "[WEB-INJ-03]",
            "active / automática",
            "40 s / 128 MiB"
          ],
          [
            "sentinel.lab.bounded-http-load",
            "1.0.0",
            "[LAB-PERF-01]",
            "active / automática",
            "15 s / 128 MiB"
          ],
          [
            "sentinel.lab.contract-fuzz",
            "1.0.0",
            "[FUZZ-05, WEB-INJ-07]",
            "active / automática",
            "90 s / 128 MiB"
          ],
          [
            "sentinel.lab.endpoint-discovery",
            "1.0.0",
            "[LAB-DISC-01]",
            "active / automática",
            "25 s / 128 MiB"
          ],
          [
            "sentinel.lab.function-level-authz",
            "1.0.1",
            "[API-AUTHZ-06]",
            "active / automática",
            "60 s / 128 MiB"
          ],
          [
            "sentinel.lab.fuzz-surface",
            "1.0.0",
            "[FUZZ-01]",
            "active / automática",
            "90 s / 128 MiB"
          ],
          [
            "sentinel.lab.injection-probe",
            "1.0.1",
            "[WEB-INJ-01, WEB-INJ-02]",
            "active / automática",
            "120 s / 128 MiB"
          ],
          [
            "sentinel.lab.input-probes",
            "1.0.0",
            "[LAB-AUTH-01, LAB-INP-01]",
            "active / automática",
            "18 s / 128 MiB"
          ],
          [
            "sentinel.lab.jwt-forgery",
            "1.0.0",
            "[AUTH-JWT-01]",
            "active / automática",
            "30 s / 128 MiB"
          ],
          [
            "sentinel.lab.jwt-lifecycle",
            "1.0.0",
            "[AUTH-JWT-02]",
            "active / automática",
            "20 s / 128 MiB"
          ],
          [
            "sentinel.lab.mass-assignment",
            "1.0.0",
            "[API-AUTHZ-04]",
            "active / automática",
            "60 s / 128 MiB"
          ],
          [
            "sentinel.lab.object-level-authz",
            "1.0.1",
            "[API-AUTHZ-02]",
            "active / automática",
            "60 s / 128 MiB"
          ],
          [
            "sentinel.lab.session-logout",
            "1.0.0",
            "[AUTH-SES-01-LOGOUT]",
            "active / explicit",
            "90 s / 128 MiB"
          ],
          [
            "sentinel.lab.session-refresh",
            "1.0.0",
            "[AUTH-SES-01-REFRESH, AUTH-SES-02-FAMILY]",
            "active / explicit",
            "120 s / 128 MiB"
          ],
          [
            "sentinel.net.asn-info",
            "1.0.0",
            "[NET-ASN-01]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.net.dns-info",
            "1.0.0",
            "[NET-DNS-01]",
            "passive / automática",
            "10 s / 128 MiB"
          ],
          [
            "sentinel.net.port-scan",
            "1.0.0",
            "[NET-PORTS-01]",
            "active / automática",
            "15 s / 128 MiB"
          ],
          [
            "sentinel.source.api-auth-declared",
            "1.0.0",
            "[API-AUTHZ-08]",
            "passive / automática",
            "90 s / 512 MiB"
          ],
          [
            "sentinel.source.dependencies",
            "1.0.0",
            "[SUP-01]",
            "passive / automática",
            "150 s / 512 MiB"
          ],
          [
            "sentinel.source.inventory",
            "1.0.1",
            "[SRC-INV-01]",
            "passive / automática",
            "30 s / 256 MiB"
          ],
          [
            "sentinel.source.lockfile-integrity",
            "1.0.0",
            "[SUP-02]",
            "passive / automática",
            "20 s / 128 MiB"
          ],
          [
            "sentinel.source.model-integrity",
            "1.0.0",
            "[SUP-03]",
            "passive / automática",
            "60 s / 256 MiB"
          ],
          [
            "sentinel.source.openapi",
            "1.0.0",
            "[SRC-API-01]",
            "passive / automática",
            "90 s / 512 MiB"
          ],
          [
            "sentinel.source.sbom-diff",
            "1.0.1",
            "[SUP-06]",
            "passive / automática",
            "15 s / 128 MiB"
          ],
          [
            "sentinel.source.secrets",
            "1.0.0",
            "[SUP-04]",
            "passive / automática",
            "90 s / 512 MiB"
          ],
          [
            "sentinel.source.unused-dependencies",
            "1.0.0",
            "[SUP-05]",
            "passive / automática",
            "30 s / 256 MiB"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Contrato antes da execução</h2></div></div><div class=\"prose\"><p>Cada plugin possui manifesto YAML validado por schema e um contrato de entrada/saída. O catálogo declara identificador, versão, controles, modo, permissões, capacidades de gateway, isolamento e recursos. Um manifesto presente não comprova execução bem-sucedida.</p></div><div class=\"prose\"><p>Plugins de ativação explicit exigem seleção e compatibilidade com o perfil. O gateway só libera capacidades declaradas e autorizadas. Contratos de login, escrita, dupla identidade e leitura de OpenAPI não são permissões genéricas de rede.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Interpretação dos controles</h2></div></div><div class=\"prose\"><p>Passed vale para o critério e o recorte efetivamente observados. Failed pode produzir candidato a achado, preservando confiança e severidade. Inconclusive registra lacunas e pré-condições não satisfeitas. Informational registra informação sem aprovação de segurança.</p></div><div class=\"prose\"><p>SIM-001 é fixture determinística do pipeline, não teste do alvo. Manifestos válidos locais ainda são aprovados automaticamente; isso não equivale a admissão empresarial de extensões de terceiros.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Catálogo extraído dos manifestos</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Catálogo extraído dos manifestos\"><table><thead><tr><th scope=\"col\">Plugin</th><th scope=\"col\">Versão</th><th scope=\"col\">Controles</th><th scope=\"col\">Modo / ativação</th><th scope=\"col\">Prazo / memória</th></tr></thead><tbody><tr><td>sentinel.dast.zap-baseline</td><td>1.0.0</td><td>[DAST-01]</td><td>passive / explicit</td><td>240 s / 1536 MiB</td></tr><tr><td>sentinel.fixture.sim-001</td><td>1.0.1</td><td>[SIM-001]</td><td>passive / automática</td><td>15 s / 64 MiB</td></tr><tr><td>sentinel.http.cookie-security</td><td>1.0.0</td><td>[TLS-02]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.http.cors-reflection</td><td>1.0.0</td><td>[WEB-CFG-02]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.http.csp-quality</td><td>1.0.0</td><td>[WEB-CFG-07]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.http.error-disclosure</td><td>1.0.0</td><td>[WEB-CFG-04]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.http.exposed-endpoints</td><td>1.0.0</td><td>[WEB-CFG-05]</td><td>passive / automática</td><td>90 s / 128 MiB</td></tr><tr><td>sentinel.http.host-header-trust</td><td>1.0.0</td><td>[WEB-CFG-06]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.http.security-headers</td><td>1.0.0</td><td>[WEB-CFG-01]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.http.tech-fingerprint-headers</td><td>1.0.0</td><td>[WEB-CFG-09]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.http.transport-security</td><td>1.0.0</td><td>[TLS-01]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.http.waf-fingerprint</td><td>1.0.0</td><td>[NET-WAF-01]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.lab.api-anonymous-access</td><td>1.0.0</td><td>[API-AUTHZ-01]</td><td>active / automática</td><td>18 s / 128 MiB</td></tr><tr><td>sentinel.lab.auth-brute</td><td>1.0.0</td><td>[AUTH-BRUTE-01]</td><td>active / explicit</td><td>30 s / 128 MiB</td></tr><tr><td>sentinel.lab.authenticated-access</td><td>1.1.0</td><td>[LAB-ACCESS-01]</td><td>active / automática</td><td>12 s / 128 MiB</td></tr><tr><td>sentinel.lab.body-robustness</td><td>1.0.1</td><td>[WEB-INJ-03]</td><td>active / automática</td><td>40 s / 128 MiB</td></tr><tr><td>sentinel.lab.bounded-http-load</td><td>1.0.0</td><td>[LAB-PERF-01]</td><td>active / automática</td><td>15 s / 128 MiB</td></tr><tr><td>sentinel.lab.contract-fuzz</td><td>1.0.0</td><td>[FUZZ-05, WEB-INJ-07]</td><td>active / automática</td><td>90 s / 128 MiB</td></tr><tr><td>sentinel.lab.endpoint-discovery</td><td>1.0.0</td><td>[LAB-DISC-01]</td><td>active / automática</td><td>25 s / 128 MiB</td></tr><tr><td>sentinel.lab.function-level-authz</td><td>1.0.1</td><td>[API-AUTHZ-06]</td><td>active / automática</td><td>60 s / 128 MiB</td></tr><tr><td>sentinel.lab.fuzz-surface</td><td>1.0.0</td><td>[FUZZ-01]</td><td>active / automática</td><td>90 s / 128 MiB</td></tr><tr><td>sentinel.lab.injection-probe</td><td>1.0.1</td><td>[WEB-INJ-01, WEB-INJ-02]</td><td>active / automática</td><td>120 s / 128 MiB</td></tr><tr><td>sentinel.lab.input-probes</td><td>1.0.0</td><td>[LAB-AUTH-01, LAB-INP-01]</td><td>active / automática</td><td>18 s / 128 MiB</td></tr><tr><td>sentinel.lab.jwt-forgery</td><td>1.0.0</td><td>[AUTH-JWT-01]</td><td>active / automática</td><td>30 s / 128 MiB</td></tr><tr><td>sentinel.lab.jwt-lifecycle</td><td>1.0.0</td><td>[AUTH-JWT-02]</td><td>active / automática</td><td>20 s / 128 MiB</td></tr><tr><td>sentinel.lab.mass-assignment</td><td>1.0.0</td><td>[API-AUTHZ-04]</td><td>active / automática</td><td>60 s / 128 MiB</td></tr><tr><td>sentinel.lab.object-level-authz</td><td>1.0.1</td><td>[API-AUTHZ-02]</td><td>active / automática</td><td>60 s / 128 MiB</td></tr><tr><td>sentinel.lab.session-logout</td><td>1.0.0</td><td>[AUTH-SES-01-LOGOUT]</td><td>active / explicit</td><td>90 s / 128 MiB</td></tr><tr><td>sentinel.lab.session-refresh</td><td>1.0.0</td><td>[AUTH-SES-01-REFRESH, AUTH-SES-02-FAMILY]</td><td>active / explicit</td><td>120 s / 128 MiB</td></tr><tr><td>sentinel.net.asn-info</td><td>1.0.0</td><td>[NET-ASN-01]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.net.dns-info</td><td>1.0.0</td><td>[NET-DNS-01]</td><td>passive / automática</td><td>10 s / 128 MiB</td></tr><tr><td>sentinel.net.port-scan</td><td>1.0.0</td><td>[NET-PORTS-01]</td><td>active / automática</td><td>15 s / 128 MiB</td></tr><tr><td>sentinel.source.api-auth-declared</td><td>1.0.0</td><td>[API-AUTHZ-08]</td><td>passive / automática</td><td>90 s / 512 MiB</td></tr><tr><td>sentinel.source.dependencies</td><td>1.0.0</td><td>[SUP-01]</td><td>passive / automática</td><td>150 s / 512 MiB</td></tr><tr><td>sentinel.source.inventory</td><td>1.0.1</td><td>[SRC-INV-01]</td><td>passive / automática</td><td>30 s / 256 MiB</td></tr><tr><td>sentinel.source.lockfile-integrity</td><td>1.0.0</td><td>[SUP-02]</td><td>passive / automática</td><td>20 s / 128 MiB</td></tr><tr><td>sentinel.source.model-integrity</td><td>1.0.0</td><td>[SUP-03]</td><td>passive / automática</td><td>60 s / 256 MiB</td></tr><tr><td>sentinel.source.openapi</td><td>1.0.0</td><td>[SRC-API-01]</td><td>passive / automática</td><td>90 s / 512 MiB</td></tr><tr><td>sentinel.source.sbom-diff</td><td>1.0.1</td><td>[SUP-06]</td><td>passive / automática</td><td>15 s / 128 MiB</td></tr><tr><td>sentinel.source.secrets</td><td>1.0.0</td><td>[SUP-04]</td><td>passive / automática</td><td>90 s / 512 MiB</td></tr><tr><td>sentinel.source.unused-dependencies</td><td>1.0.0</td><td>[SUP-05]</td><td>passive / automática</td><td>30 s / 256 MiB</td></tr></tbody></table></div></section>"
  },
  {
    "id": "sandbox",
    "title": "Sandbox e gateway",
    "group": "Motor de auditoria",
    "lead": "O host governa a rede e os segredos; o plugin recebe somente o contrato necessário.",
    "sources": [
      "Sentinel/Execution/PluginRuntime.cs",
      "Sentinel/Execution/IsolatedPluginRunner.cs",
      "Sentinel/Execution/ScopedHttpGateway.cs",
      "Sentinel.Contracts/PluginExecutionContract.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Isolamento aplicado",
        "paragraphs": [
          "O modo padrão é container: rede none, usuário sem privilégios, raiz somente leitura, tmpfs e limites de memória, CPU e PIDs. A alocação é calculada por manifesto aprovado e limitada pelos tetos do runtime; não presuma que todos os plugins usam o mesmo orçamento.",
          "O filho recebe uma allowlist de ambiente. Não recebe senhas de PostgreSQL/RabbitMQ, keyring, socket Docker ou diretórios arbitrários. Para análise de fonte, somente o snapshot autorizado é materializado e montado como leitura."
        ]
      },
      {
        "title": "Rede mediada por permissão",
        "paragraphs": [
          "O plugin conversa com o host pelo protocolo. Cada requisição precisa de escopo, posse e orçamento válidos. O gateway verifica DNS/TLS e restringe capacidades. Redirecionamentos automáticos e herança de proxies não devem ampliar o alvo autorizado.",
          "O resultado completo validado encerra o protocolo. Novas requisições após esse resultado não são despachadas; a limpeza da sandbox ainda faz parte da devolução. Timeout, saída excessiva e cancelamento são limites operacionais distintos."
        ]
      },
      {
        "title": "Limites de confiança",
        "paragraphs": [
          "Containers compartilham o kernel da VM Docker e o host confia no daemon local. O código contém modo de processo para desenvolvimento; isso não é equivalente ao isolamento de container e não suporta análise de fontes. Não apresente esse modo como fallback seguro de produção."
        ]
      },
      {
        "title": "O que conferir em uma falha",
        "paragraphs": [],
        "table": [
          [
            "Sinal",
            "Verificação"
          ],
          [
            "daemon-unavailable",
            "Disponibilidade do daemon e diagnóstico da sandbox"
          ],
          [
            "Imagem inválida",
            "Digest configurado e build da imagem"
          ],
          [
            "Prazo excedido",
            "Timeout do manifesto, prazo do escopo e progresso do plugin"
          ],
          [
            "Lease perdido",
            "Estado persistido, banco e heartbeat"
          ],
          [
            "Protocolo rejeitado",
            "Schema, tamanho, término e compatibilidade da saída"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Isolamento aplicado</h2></div></div><div class=\"prose\"><p>O modo padrão é container: rede none, usuário sem privilégios, raiz somente leitura, tmpfs e limites de memória, CPU e PIDs. A alocação é calculada por manifesto aprovado e limitada pelos tetos do runtime; não presuma que todos os plugins usam o mesmo orçamento.</p></div><div class=\"prose\"><p>O filho recebe uma allowlist de ambiente. Não recebe senhas de PostgreSQL/RabbitMQ, keyring, socket Docker ou diretórios arbitrários. Para análise de fonte, somente o snapshot autorizado é materializado e montado como leitura.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Rede mediada por permissão</h2></div></div><div class=\"prose\"><p>O plugin conversa com o host pelo protocolo. Cada requisição precisa de escopo, posse e orçamento válidos. O gateway verifica DNS/TLS e restringe capacidades. Redirecionamentos automáticos e herança de proxies não devem ampliar o alvo autorizado.</p></div><div class=\"prose\"><p>O resultado completo validado encerra o protocolo. Novas requisições após esse resultado não são despachadas; a limpeza da sandbox ainda faz parte da devolução. Timeout, saída excessiva e cancelamento são limites operacionais distintos.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>Limites de confiança</h2></div></div><div class=\"prose\"><p>Containers compartilham o kernel da VM Docker e o host confia no daemon local. O código contém modo de processo para desenvolvimento; isso não é equivalente ao isolamento de container e não suporta análise de fontes. Não apresente esse modo como fallback seguro de produção.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Motor de auditoria</p><h2>O que conferir em uma falha</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"O que conferir em uma falha\"><table><thead><tr><th scope=\"col\">Sinal</th><th scope=\"col\">Verificação</th></tr></thead><tbody><tr><td>daemon-unavailable</td><td>Disponibilidade do daemon e diagnóstico da sandbox</td></tr><tr><td>Imagem inválida</td><td>Digest configurado e build da imagem</td></tr><tr><td>Prazo excedido</td><td>Timeout do manifesto, prazo do escopo e progresso do plugin</td></tr><tr><td>Lease perdido</td><td>Estado persistido, banco e heartbeat</td></tr><tr><td>Protocolo rejeitado</td><td>Schema, tamanho, término e compatibilidade da saída</td></tr></tbody></table></div></section>"
  },
  {
    "id": "autenticacao-alvo",
    "title": "Acessos e sessões do alvo",
    "group": "Investigações",
    "lead": "Perfis privados, login governado e comparações de identidade no laboratório.",
    "sources": [
      "Sentinel/Execution/TargetCredentialVault.cs",
      "Sentinel/Execution/TargetJsonLogin.cs",
      "Sentinel/Execution/ScopedHttpGateway.Logout.cs",
      "Sentinel/Execution/ScopedHttpGateway.Refresh.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Bearer e login JSON",
        "paragraphs": [
          "Perfis pertencem ao projeto e ao escopo. Bearer guarda token cifrado; JsonLogin guarda o contrato e os dados privados necessários ao login. Consultas retornam metadados, nunca segredos. O host mantém tokens obtidos por login e exporta somente observações permitidas.",
          "Rotação muda a versão e revogação invalida usos posteriores. O prazo fica limitado ao escopo; Bearer usa teto de 24 horas, enquanto JsonLogin tem política configurável MaximumJsonLoginLifetimeHours, padrão de 24 horas. Configuração privada do laboratório pode alterar esse teto."
        ]
      },
      {
        "title": "Comparar acesso permitido e negado",
        "paragraphs": [
          "O cenário verifica recusa anônima e acesso autenticado. Para negação esperada, precisa de referência permitida recente da mesma identidade/versão. 401 não prova autorização correta; 403/404 precisam do contexto previsto pelo contrato.",
          "Uma segunda identidade pode ser Bearer ou JsonLogin no backend, do mesmo projeto/escopo e diferente da primária. Tokens, estados de login e diagnósticos ficam separados. Na revisão analisada, o seletor secundário da interface ainda se restringe a Bearer."
        ]
      },
      {
        "title": "Logout e refresh são contratos explícitos",
        "paragraphs": [
          "Logout verifica o recurso, confirma identidade, solicita encerramento e reapresenta o token antigo; uma sessão independente serve como controle. Resposta 2xx do logout não prova que a revogação foi efetivada.",
          "Refresh suporta JSON ou formulário e cliente público/client_secret_post. O teste verifica rotação utilizável antes de sondar reutilização; política por família precisa ser ativada separadamente. Sem contrato, identidade inequívoca ou controle independente, o resultado permanece inconclusivo."
        ]
      },
      {
        "title": "Limites de sessão",
        "paragraphs": [],
        "table": [
          [
            "Capacidade",
            "Limite"
          ],
          [
            "Login",
            "Não é suporte universal a MFA, cookies ou qualquer fluxo de autenticação"
          ],
          [
            "Logout",
            "Não comprova revogação em todos os dispositivos ou propagação assíncrona"
          ],
          [
            "Refresh",
            "Não cobre client_secret_basic, DPoP, mTLS e todos os modelos de sessão"
          ],
          [
            "Limpeza",
            "Sem logout aplicável, sessões sintéticas podem permanecer até expiração"
          ],
          [
            "Carga autenticada",
            "Exige acesso permitido e seleção explícita, dentro do orçamento global"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Bearer e login JSON</h2></div></div><div class=\"prose\"><p>Perfis pertencem ao projeto e ao escopo. Bearer guarda token cifrado; JsonLogin guarda o contrato e os dados privados necessários ao login. Consultas retornam metadados, nunca segredos. O host mantém tokens obtidos por login e exporta somente observações permitidas.</p></div><div class=\"prose\"><p>Rotação muda a versão e revogação invalida usos posteriores. O prazo fica limitado ao escopo; Bearer usa teto de 24 horas, enquanto JsonLogin tem política configurável MaximumJsonLoginLifetimeHours, padrão de 24 horas. Configuração privada do laboratório pode alterar esse teto.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Comparar acesso permitido e negado</h2></div></div><div class=\"prose\"><p>O cenário verifica recusa anônima e acesso autenticado. Para negação esperada, precisa de referência permitida recente da mesma identidade/versão. 401 não prova autorização correta; 403/404 precisam do contexto previsto pelo contrato.</p></div><div class=\"prose\"><p>Uma segunda identidade pode ser Bearer ou JsonLogin no backend, do mesmo projeto/escopo e diferente da primária. Tokens, estados de login e diagnósticos ficam separados. Na revisão analisada, o seletor secundário da interface ainda se restringe a Bearer.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Logout e refresh são contratos explícitos</h2></div></div><div class=\"prose\"><p>Logout verifica o recurso, confirma identidade, solicita encerramento e reapresenta o token antigo; uma sessão independente serve como controle. Resposta 2xx do logout não prova que a revogação foi efetivada.</p></div><div class=\"prose\"><p>Refresh suporta JSON ou formulário e cliente público/client_secret_post. O teste verifica rotação utilizável antes de sondar reutilização; política por família precisa ser ativada separadamente. Sem contrato, identidade inequívoca ou controle independente, o resultado permanece inconclusivo.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Limites de sessão</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Limites de sessão\"><table><thead><tr><th scope=\"col\">Capacidade</th><th scope=\"col\">Limite</th></tr></thead><tbody><tr><td>Login</td><td>Não é suporte universal a MFA, cookies ou qualquer fluxo de autenticação</td></tr><tr><td>Logout</td><td>Não comprova revogação em todos os dispositivos ou propagação assíncrona</td></tr><tr><td>Refresh</td><td>Não cobre client_secret_basic, DPoP, mTLS e todos os modelos de sessão</td></tr><tr><td>Limpeza</td><td>Sem logout aplicável, sessões sintéticas podem permanecer até expiração</td></tr><tr><td>Carga autenticada</td><td>Exige acesso permitido e seleção explícita, dentro do orçamento global</td></tr></tbody></table></div></section>"
  },
  {
    "id": "fontes",
    "title": "Snapshots e segredos",
    "group": "Investigações",
    "lead": "Análise offline de um recorte autorizado, sem executar o projeto enviado.",
    "sources": [
      "Sentinel.Contracts/SourceArchivePolicy.cs",
      "Sentinel/Source/SourceSnapshotStore.cs",
      "Sentinel/Controllers/SourceSnapshotsController.cs",
      "Sentinel.PluginHost/Checks/SourceSecretsCheck.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Contrato de entrada",
        "paragraphs": [
          "O upload recebe ZIP binário application/zip, sourceKey estável e revision. O snapshot fica cifrado por uma hora. Cada execução revalida hash, validade e autorização exata; o outbox contém referências e metadados, não os bytes do arquivo.",
          "O parser recusa links, arquivos especiais, caminhos perigosos, colisões e diretórios privados proibidos. Não há clone remoto, leitura arbitrária do servidor, build, restore ou execução de scripts do snapshot."
        ]
      },
      {
        "title": "Limites do arquivo",
        "paragraphs": [],
        "table": [
          [
            "Limite",
            "Valor"
          ],
          [
            "ZIP compactado",
            "20 MiB"
          ],
          [
            "Conteúdo expandido",
            "100 MiB"
          ],
          [
            "Arquivo individual",
            "2 MiB"
          ],
          [
            "Arquivos",
            "5.000"
          ],
          [
            "Uploads simultâneos",
            "2 por processo"
          ],
          [
            "Snapshots retidos",
            "10 por projeto; 100 na instalação"
          ]
        ]
      },
      {
        "title": "Candidatos a segredo",
        "paragraphs": [
          "Gitleaks executa offline com configuração da plataforma. Dispensas do próprio repositório não eliminam achados. O resultado agrupa arquivo/regra e linhas; valores, trechos e relatório bruto são descartados.",
          "Candidatos têm confiança Hypothesis e não são testados contra provedores. Ausência de candidatos é Informational, não comprovação de inexistência de segredos. O recorte não cobre todo histórico Git, binários ou arquivos compactados aninhados."
        ]
      },
      {
        "title": "Retenção e revogação",
        "paragraphs": [
          "Snapshots continuam em volume privado, mesmo quando evidências usam S3. Workers compartilham volume lógico, StorageId e keyring. Revogação solicita cancelamento; expiração bloqueia novos plugins e o expurgo remove conteúdo em lotes.",
          "Preserve os metadados e a revisão do recorte para interpretar o relatório. Uma análise de ZIP parcial não equivale à cobertura de todo o repositório."
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Contrato de entrada</h2></div></div><div class=\"prose\"><p>O upload recebe ZIP binário application/zip, sourceKey estável e revision. O snapshot fica cifrado por uma hora. Cada execução revalida hash, validade e autorização exata; o outbox contém referências e metadados, não os bytes do arquivo.</p></div><div class=\"prose\"><p>O parser recusa links, arquivos especiais, caminhos perigosos, colisões e diretórios privados proibidos. Não há clone remoto, leitura arbitrária do servidor, build, restore ou execução de scripts do snapshot.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Limites do arquivo</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Limites do arquivo\"><table><thead><tr><th scope=\"col\">Limite</th><th scope=\"col\">Valor</th></tr></thead><tbody><tr><td>ZIP compactado</td><td>20 MiB</td></tr><tr><td>Conteúdo expandido</td><td>100 MiB</td></tr><tr><td>Arquivo individual</td><td>2 MiB</td></tr><tr><td>Arquivos</td><td>5.000</td></tr><tr><td>Uploads simultâneos</td><td>2 por processo</td></tr><tr><td>Snapshots retidos</td><td>10 por projeto; 100 na instalação</td></tr></tbody></table></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Candidatos a segredo</h2></div></div><div class=\"prose\"><p>Gitleaks executa offline com configuração da plataforma. Dispensas do próprio repositório não eliminam achados. O resultado agrupa arquivo/regra e linhas; valores, trechos e relatório bruto são descartados.</p></div><div class=\"prose\"><p>Candidatos têm confiança Hypothesis e não são testados contra provedores. Ausência de candidatos é Informational, não comprovação de inexistência de segredos. O recorte não cobre todo histórico Git, binários ou arquivos compactados aninhados.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Retenção e revogação</h2></div></div><div class=\"prose\"><p>Snapshots continuam em volume privado, mesmo quando evidências usam S3. Workers compartilham volume lógico, StorageId e keyring. Revogação solicita cancelamento; expiração bloqueia novos plugins e o expurgo remove conteúdo em lotes.</p></div><div class=\"prose\"><p>Preserve os metadados e a revisão do recorte para interpretar o relatório. Uma análise de ZIP parcial não equivale à cobertura de todo o repositório.</p></div></section>"
  },
  {
    "id": "dependencias",
    "title": "Dependências e inventário",
    "group": "Investigações",
    "lead": "Declare o recorte, verifique a base offline e interprete diferenças sem inventar cobertura.",
    "sources": [
      "Sentinel.PluginHost/Checks/SourceDependenciesCheck.cs",
      "Sentinel.PluginHost/Checks/SourceInventoryCheck.cs",
      "Sentinel.PluginHost/Checks/SbomDiffCheck.cs",
      "infra/plugins/trivy.lock.json"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Vulnerabilidades offline",
        "paragraphs": [
          "Trivy 0.76.0 usa base fixada no build por digest e verificada por SHA-256. As auditorias não atualizam dependências nem executam configurações do alvo. Uma base vencida impede avaliação de CVEs e produz Inconclusive.",
          "Na revisão de 27/10/2026, o README registra atualização da base e limite de sete dias. Esse dado descreve aquela revisão; não assegura prontidão em uma execução futura. A saúde HTTP da API não valida a idade da base."
        ]
      },
      {
        "title": "Inventário de declarações",
        "paragraphs": [
          "O inventário lê package.json e csproj sem resolver MSBuild, pacotes transitivos ou executar restore. O exportador tem orçamento e sinaliza incompletude. Ele não deve ser apresentado como SBOM completo de qualquer ecossistema.",
          "A comparação SUP-06 seleciona revisão anterior concluída da mesma fonte, projeto e origem. Verifica integridade, completude e vínculo ao snapshot. Inventário inválido, ambíguo ou truncado não vira lista vazia nem prova remoção de dependências."
        ]
      },
      {
        "title": "Controles complementares",
        "paragraphs": [
          "Lockfile, dependências possivelmente não utilizadas e integridade de artefatos têm plugins específicos. A existência de um controle não garante cobertura semântica profunda nem exploração confirmada. Leia a evidência e as limitações de cada produtor."
        ]
      },
      {
        "title": "Dependências diretas da implementação",
        "paragraphs": [],
        "table": [
          [
            "Projeto",
            "Pacote",
            "Versão declarada"
          ],
          [
            "Sentinel",
            "AWSSDK.S3",
            "4.0.104.5"
          ],
          [
            "Sentinel",
            "JsonSchema.Net",
            "7.2.3"
          ],
          [
            "Sentinel",
            "Microsoft.AspNetCore.Authentication.JwtBearer",
            "8.0.11"
          ],
          [
            "Sentinel",
            "Microsoft.EntityFrameworkCore.Design",
            "8.0.11"
          ],
          [
            "Sentinel",
            "Npgsql.EntityFrameworkCore.PostgreSQL",
            "8.0.11"
          ],
          [
            "Sentinel",
            "RabbitMQ.Client",
            "6.8.1"
          ],
          [
            "Sentinel",
            "Swashbuckle.AspNetCore",
            "6.6.2"
          ],
          [
            "Sentinel",
            "YamlDotNet",
            "16.2.1"
          ],
          [
            "Sentinel.PluginHost",
            "YamlDotNet",
            "16.2.1"
          ],
          [
            "Sentinel.Web / dependencies",
            "@angular/cdk",
            "22.2.3"
          ],
          [
            "Sentinel.Web / dependencies",
            "@angular/common",
            "22.2.3"
          ],
          [
            "Sentinel.Web / dependencies",
            "@angular/compiler",
            "22.2.3"
          ],
          [
            "Sentinel.Web / dependencies",
            "@angular/core",
            "22.2.3"
          ],
          [
            "Sentinel.Web / dependencies",
            "@angular/forms",
            "22.2.3"
          ],
          [
            "Sentinel.Web / dependencies",
            "@angular/material",
            "22.2.3"
          ],
          [
            "Sentinel.Web / dependencies",
            "@angular/platform-browser",
            "22.2.3"
          ],
          [
            "Sentinel.Web / dependencies",
            "@angular/router",
            "22.2.3"
          ],
          [
            "Sentinel.Web / dependencies",
            "@spartan-ng/brain",
            "1.8.0"
          ],
          [
            "Sentinel.Web / dependencies",
            "clsx",
            "2.1.1"
          ],
          [
            "Sentinel.Web / dependencies",
            "luxon",
            "3.7.2"
          ],
          [
            "Sentinel.Web / dependencies",
            "oidc-client-ts",
            "3.5.0"
          ],
          [
            "Sentinel.Web / dependencies",
            "rxjs",
            "7.8.2"
          ],
          [
            "Sentinel.Web / dependencies",
            "tslib",
            "2.8.1"
          ],
          [
            "Sentinel.Web / dependencies",
            "tw-animate-css",
            "1.3.8"
          ],
          [
            "Sentinel.Web / devDependencies",
            "@angular/build",
            "22.2.3"
          ],
          [
            "Sentinel.Web / devDependencies",
            "@angular/cli",
            "22.2.3"
          ],
          [
            "Sentinel.Web / devDependencies",
            "@angular/compiler-cli",
            "22.2.3"
          ],
          [
            "Sentinel.Web / devDependencies",
            "@tailwindcss/postcss",
            "4.3.3"
          ],
          [
            "Sentinel.Web / devDependencies",
            "axe-core",
            "4.14.0"
          ],
          [
            "Sentinel.Web / devDependencies",
            "jsdom",
            "30.1.3"
          ],
          [
            "Sentinel.Web / devDependencies",
            "postcss",
            "8.5.31"
          ],
          [
            "Sentinel.Web / devDependencies",
            "prettier",
            "3.9.10"
          ],
          [
            "Sentinel.Web / devDependencies",
            "tailwindcss",
            "4.3.3"
          ],
          [
            "Sentinel.Web / devDependencies",
            "typescript",
            "6.0.3"
          ],
          [
            "Sentinel.Web / devDependencies",
            "vitest",
            "5.0.5"
          ]
        ],
        "note": "Inventário extraído de csproj e package.json do Sentinel. Versão declarada não é auditoria de vulnerabilidades e não inclui todas as dependências transitivas."
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Vulnerabilidades offline</h2></div></div><div class=\"prose\"><p>Trivy 0.76.0 usa base fixada no build por digest e verificada por SHA-256. As auditorias não atualizam dependências nem executam configurações do alvo. Uma base vencida impede avaliação de CVEs e produz Inconclusive.</p></div><div class=\"prose\"><p>Na revisão de 27/10/2026, o README registra atualização da base e limite de sete dias. Esse dado descreve aquela revisão; não assegura prontidão em uma execução futura. A saúde HTTP da API não valida a idade da base.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Inventário de declarações</h2></div></div><div class=\"prose\"><p>O inventário lê package.json e csproj sem resolver MSBuild, pacotes transitivos ou executar restore. O exportador tem orçamento e sinaliza incompletude. Ele não deve ser apresentado como SBOM completo de qualquer ecossistema.</p></div><div class=\"prose\"><p>A comparação SUP-06 seleciona revisão anterior concluída da mesma fonte, projeto e origem. Verifica integridade, completude e vínculo ao snapshot. Inventário inválido, ambíguo ou truncado não vira lista vazia nem prova remoção de dependências.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Controles complementares</h2></div></div><div class=\"prose\"><p>Lockfile, dependências possivelmente não utilizadas e integridade de artefatos têm plugins específicos. A existência de um controle não garante cobertura semântica profunda nem exploração confirmada. Leia a evidência e as limitações de cada produtor.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Dependências diretas da implementação</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Dependências diretas da implementação\"><table><thead><tr><th scope=\"col\">Projeto</th><th scope=\"col\">Pacote</th><th scope=\"col\">Versão declarada</th></tr></thead><tbody><tr><td>Sentinel</td><td>AWSSDK.S3</td><td>4.0.104.5</td></tr><tr><td>Sentinel</td><td>JsonSchema.Net</td><td>7.2.3</td></tr><tr><td>Sentinel</td><td>Microsoft.AspNetCore.Authentication.JwtBearer</td><td>8.0.11</td></tr><tr><td>Sentinel</td><td>Microsoft.EntityFrameworkCore.Design</td><td>8.0.11</td></tr><tr><td>Sentinel</td><td>Npgsql.EntityFrameworkCore.PostgreSQL</td><td>8.0.11</td></tr><tr><td>Sentinel</td><td>RabbitMQ.Client</td><td>6.8.1</td></tr><tr><td>Sentinel</td><td>Swashbuckle.AspNetCore</td><td>6.6.2</td></tr><tr><td>Sentinel</td><td>YamlDotNet</td><td>16.2.1</td></tr><tr><td>Sentinel.PluginHost</td><td>YamlDotNet</td><td>16.2.1</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@angular/cdk</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@angular/common</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@angular/compiler</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@angular/core</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@angular/forms</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@angular/material</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@angular/platform-browser</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@angular/router</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / dependencies</td><td>@spartan-ng/brain</td><td>1.8.0</td></tr><tr><td>Sentinel.Web / dependencies</td><td>clsx</td><td>2.1.1</td></tr><tr><td>Sentinel.Web / dependencies</td><td>luxon</td><td>3.7.2</td></tr><tr><td>Sentinel.Web / dependencies</td><td>oidc-client-ts</td><td>3.5.0</td></tr><tr><td>Sentinel.Web / dependencies</td><td>rxjs</td><td>7.8.2</td></tr><tr><td>Sentinel.Web / dependencies</td><td>tslib</td><td>2.8.1</td></tr><tr><td>Sentinel.Web / dependencies</td><td>tw-animate-css</td><td>1.3.8</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>@angular/build</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>@angular/cli</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>@angular/compiler-cli</td><td>22.2.3</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>@tailwindcss/postcss</td><td>4.3.3</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>axe-core</td><td>4.14.0</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>jsdom</td><td>30.1.3</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>postcss</td><td>8.5.31</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>prettier</td><td>3.9.10</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>tailwindcss</td><td>4.3.3</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>typescript</td><td>6.0.3</td></tr><tr><td>Sentinel.Web / devDependencies</td><td>vitest</td><td>5.0.5</td></tr></tbody></table></div><div class=\"callout\"><span>Inventário extraído de csproj e package.json do Sentinel. Versão declarada não é auditoria de vulnerabilidades e não inclui todas as dependências transitivas.</span></div></section>"
  },
  {
    "id": "superficie-api",
    "title": "Superfície e sondagens HTTP",
    "group": "Investigações",
    "lead": "Contratos OpenAPI orientam o recorte; respostas reais ainda precisam de interpretação.",
    "sources": [
      "Sentinel.PluginHost/Checks/SourceOpenApiCheck.cs",
      "Sentinel/Execution/OpenApiInventoryReader.cs",
      "Sentinel.PluginHost/Checks/InjectionProbeCheck.cs",
      "Sentinel.PluginHost/Checks/BodyRobustnessCheck.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Contrato declarado e superfície observada",
        "paragraphs": [
          "A análise de fonte pode produzir inventário OpenAPI. O host seleciona somente artefatos íntegros, completos e da mesma origem/projeto; registra InventorySelected ou InventoryUnavailable. O contrato histórico não prova que a implantação atual corresponde a ele.",
          "A prévia concatena base e caminho e distingue templates sem valores, métodos sem adaptador e rotas fora do escopo. Vínculo histórico por URL GET e resultado comparável não representa cobertura completa por endpoint, papel, parâmetros ou revisão."
        ]
      },
      {
        "title": "Injeção: candidato não é exploração comprovada",
        "paragraphs": [
          "As sondagens GET usam valores sintéticos de referência derivados de tipos, formatos e enums. Cada mutação preserva os outros parâmetros; referências incompletas ou incompatíveis impedem a avaliação.",
          "Erro SQL específico repetível e correlação booleana são candidatos inferidos. Reflexão HTML não comprova execução de XSS; reflexão JSON não é classificada como XSS. Ausência de sinal, truncamento e orçamento esgotado não aprovam segurança."
        ]
      },
      {
        "title": "Corpos, cabeçalhos e protocolos",
        "paragraphs": [
          "O controle de robustez exige avaliação das sete sondagens declaradas para aprovar seu recorte. Respostas incompatíveis, truncamento e interrupções deixam lacunas explícitas. 429 e Retry-After encerram sondagens posteriores.",
          "CSP combina políticas obrigatórias sem persistir nonces brutos; CORS avalia a origem enviada sem afirmar vazamento universal. Uma observação de cabeçalho não substitui teste em navegador nem prova de impacto."
        ]
      },
      {
        "title": "Leitura correta de cobertura",
        "paragraphs": [],
        "items": [
          [
            "Tentada",
            "Uma etapa foi tentada; o gateway ainda pode recusar o envio."
          ],
          [
            "Avaliada",
            "A observação satisfez os requisitos de interpretação do controle."
          ],
          [
            "Não avaliada",
            "Faltou resposta completa, referência válida ou outra pré-condição."
          ],
          [
            "Não tentada",
            "Prazo, orçamento ou interrupção impediu chegar à etapa."
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Contrato declarado e superfície observada</h2></div></div><div class=\"prose\"><p>A análise de fonte pode produzir inventário OpenAPI. O host seleciona somente artefatos íntegros, completos e da mesma origem/projeto; registra InventorySelected ou InventoryUnavailable. O contrato histórico não prova que a implantação atual corresponde a ele.</p></div><div class=\"prose\"><p>A prévia concatena base e caminho e distingue templates sem valores, métodos sem adaptador e rotas fora do escopo. Vínculo histórico por URL GET e resultado comparável não representa cobertura completa por endpoint, papel, parâmetros ou revisão.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Injeção: candidato não é exploração comprovada</h2></div></div><div class=\"prose\"><p>As sondagens GET usam valores sintéticos de referência derivados de tipos, formatos e enums. Cada mutação preserva os outros parâmetros; referências incompletas ou incompatíveis impedem a avaliação.</p></div><div class=\"prose\"><p>Erro SQL específico repetível e correlação booleana são candidatos inferidos. Reflexão HTML não comprova execução de XSS; reflexão JSON não é classificada como XSS. Ausência de sinal, truncamento e orçamento esgotado não aprovam segurança.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Corpos, cabeçalhos e protocolos</h2></div></div><div class=\"prose\"><p>O controle de robustez exige avaliação das sete sondagens declaradas para aprovar seu recorte. Respostas incompatíveis, truncamento e interrupções deixam lacunas explícitas. 429 e Retry-After encerram sondagens posteriores.</p></div><div class=\"prose\"><p>CSP combina políticas obrigatórias sem persistir nonces brutos; CORS avalia a origem enviada sem afirmar vazamento universal. Uma observação de cabeçalho não substitui teste em navegador nem prova de impacto.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Investigações</p><h2>Leitura correta de cobertura</h2></div></div><div class=\"card-grid\"><article class=\"card\"><h3>Tentada</h3><p>Uma etapa foi tentada; o gateway ainda pode recusar o envio.</p></article><article class=\"card\"><h3>Avaliada</h3><p>A observação satisfez os requisitos de interpretação do controle.</p></article><article class=\"card\"><h3>Não avaliada</h3><p>Faltou resposta completa, referência válida ou outra pré-condição.</p></article><article class=\"card\"><h3>Não tentada</h3><p>Prazo, orçamento ou interrupção impediu chegar à etapa.</p></article></div></section>"
  },
  {
    "id": "evidencias",
    "title": "Evidências e relatórios",
    "group": "Resultados",
    "lead": "Integridade, proveniência e retenção acompanham os bytes que sustentam a análise.",
    "sources": [
      "Sentinel/Evidence/EvidenceArtifactStore.cs",
      "Sentinel/Evidence/EvidenceSanitizer.cs",
      "Sentinel/Evidence/S3EvidenceStorage.cs",
      "Sentinel/Controllers/EvidenceController.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Do resultado ao artefato",
        "paragraphs": [
          "O documento JSON é redigido e cifrado antes de persistir. PostgreSQL mantém referência, hash, produtor, horário e retenção. O SHA-256 corresponde aos bytes exportados; API e navegador verificam a integridade antes de apresentar o conteúdo.",
          "Consulta exige organização autorizada, proveniência correta e retenção válida. Resumos legados sem conteúdo verificável são identificados como tal. Um hash não é assinatura digital nem prova de correção da conclusão."
        ]
      },
      {
        "title": "Filesystem e S3/MinIO",
        "paragraphs": [
          "O provider local mantém arquivos privados cifrados. Provider S3 grava em bucket privado versionado, usa PUT condicional e persiste a versão exata do objeto. Sem versionamento a gravação é recusada. O browser consulta pela API, sem receber credenciais do bucket.",
          "Object Lock pode usar GOVERNANCE ou COMPLIANCE até o prazo da evidência. O expurgo só marca a remoção após confirmação. Conteúdo local anterior não é migrado automaticamente; preserve seu volume, identidade e keyring."
        ]
      },
      {
        "title": "Privacidade e retenção",
        "paragraphs": [
          "A política aceita de um a trinta dias para novas evidências; mudar a política não reescreve a retenção histórica. Conteúdo vencido é expurgado em lotes, mantendo metadados e hash. Falhas de storage e retenção remota preservam pendências.",
          "basic-v1 redige padrões de credenciais com orçamento por artefato. Não garante anonimização de todo dado pessoal. Compartilhar relatórios exige revisão do conteúdo e do contexto, mesmo quando o hash confere."
        ]
      },
      {
        "title": "Checklist de interpretação",
        "paragraphs": [],
        "table": [
          [
            "Pergunta",
            "Onde conferir"
          ],
          [
            "Quem produziu?",
            "Plugin, versão e proveniência"
          ],
          [
            "O que foi enviado?",
            "Perfil, escopo, modalidade e recorte descrito"
          ],
          [
            "O conteúdo está íntegro?",
            "Verificação do hash na API e no navegador"
          ],
          [
            "Ainda pode ser consultado?",
            "Retenção, provider, versão e StorageId"
          ],
          [
            "O que conclui?",
            "Controle, confiança, severidade e limitações — não apenas o hash"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Do resultado ao artefato</h2></div></div><div class=\"prose\"><p>O documento JSON é redigido e cifrado antes de persistir. PostgreSQL mantém referência, hash, produtor, horário e retenção. O SHA-256 corresponde aos bytes exportados; API e navegador verificam a integridade antes de apresentar o conteúdo.</p></div><div class=\"prose\"><p>Consulta exige organização autorizada, proveniência correta e retenção válida. Resumos legados sem conteúdo verificável são identificados como tal. Um hash não é assinatura digital nem prova de correção da conclusão.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Filesystem e S3/MinIO</h2></div></div><div class=\"prose\"><p>O provider local mantém arquivos privados cifrados. Provider S3 grava em bucket privado versionado, usa PUT condicional e persiste a versão exata do objeto. Sem versionamento a gravação é recusada. O browser consulta pela API, sem receber credenciais do bucket.</p></div><div class=\"prose\"><p>Object Lock pode usar GOVERNANCE ou COMPLIANCE até o prazo da evidência. O expurgo só marca a remoção após confirmação. Conteúdo local anterior não é migrado automaticamente; preserve seu volume, identidade e keyring.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Privacidade e retenção</h2></div></div><div class=\"prose\"><p>A política aceita de um a trinta dias para novas evidências; mudar a política não reescreve a retenção histórica. Conteúdo vencido é expurgado em lotes, mantendo metadados e hash. Falhas de storage e retenção remota preservam pendências.</p></div><div class=\"prose\"><p>basic-v1 redige padrões de credenciais com orçamento por artefato. Não garante anonimização de todo dado pessoal. Compartilhar relatórios exige revisão do conteúdo e do contexto, mesmo quando o hash confere.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Checklist de interpretação</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Checklist de interpretação\"><table><thead><tr><th scope=\"col\">Pergunta</th><th scope=\"col\">Onde conferir</th></tr></thead><tbody><tr><td>Quem produziu?</td><td>Plugin, versão e proveniência</td></tr><tr><td>O que foi enviado?</td><td>Perfil, escopo, modalidade e recorte descrito</td></tr><tr><td>O conteúdo está íntegro?</td><td>Verificação do hash na API e no navegador</td></tr><tr><td>Ainda pode ser consultado?</td><td>Retenção, provider, versão e StorageId</td></tr><tr><td>O que conclui?</td><td>Controle, confiança, severidade e limitações — não apenas o hash</td></tr></tbody></table></div></section>"
  },
  {
    "id": "achados",
    "title": "Achados e triagem",
    "group": "Resultados",
    "lead": "Consolide ocorrências sem perder a diferença entre decisão humana e nova evidência.",
    "sources": [
      "Sentinel/Findings/FindingProjector.cs",
      "Sentinel/Findings/FindingModel.cs",
      "Sentinel/Controllers/FindingsController.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Da ocorrência ao achado",
        "paragraphs": [
          "Controles Failed alimentam a consolidação; todas as avaliações relevantes ficam como ocorrências. O fingerprint considera projeto, localização, controle/plugin e contexto de execução. Origem conhecida participa da separação.",
          "A projeção é assíncrona, com ledger e lock transacional para idempotência. Horário de checkpoint ordena observações; entrada histórica fora de ordem não deve duplicar achados. A interface informa trabalhos ainda pendentes de projeção."
        ]
      },
      {
        "title": "Triagem com revisão otimista",
        "paragraphs": [
          "Decisões exigem permissão findings.triage, revisão esperada, ator e motivo. Prioridade de tratamento é independente de severidade/confiança do controle. Conflito de revisão exige reler o estado antes de salvar.",
          "AcceptedRisk exige administrador, responsável e validade futura limitada. FalsePositive e aceite vigente preservam a decisão manual. Expiração do aceite retorna o achado para triagem com evento."
        ]
      },
      {
        "title": "Resolver exige comparação válida",
        "paragraphs": [
          "Resolved requer auditoria concluída com Passed comparável após a última falha. Versão diferente, erro, inconclusão ou interrupção não fecham automaticamente o achado. Nova falha comparável pode reabrir.",
          "A consolidação não prova exploração e não cria remediação automática. Correlação semântica de aliases, URLs equivalentes e revisões de código precisa de evolução específica."
        ]
      },
      {
        "title": "Sequência de trabalho",
        "paragraphs": [],
        "items": [
          [
            "Conferir",
            "Abra ocorrência, evidência, escopo e versão do produtor."
          ],
          [
            "Classificar",
            "Registre motivo, prioridade e decisão dentro das permissões."
          ],
          [
            "Corrigir",
            "Faça a alteração no software avaliado com rastreabilidade própria."
          ],
          [
            "Reavaliar",
            "Execute recorte comparável e confira a projeção posterior."
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Da ocorrência ao achado</h2></div></div><div class=\"prose\"><p>Controles Failed alimentam a consolidação; todas as avaliações relevantes ficam como ocorrências. O fingerprint considera projeto, localização, controle/plugin e contexto de execução. Origem conhecida participa da separação.</p></div><div class=\"prose\"><p>A projeção é assíncrona, com ledger e lock transacional para idempotência. Horário de checkpoint ordena observações; entrada histórica fora de ordem não deve duplicar achados. A interface informa trabalhos ainda pendentes de projeção.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Triagem com revisão otimista</h2></div></div><div class=\"prose\"><p>Decisões exigem permissão findings.triage, revisão esperada, ator e motivo. Prioridade de tratamento é independente de severidade/confiança do controle. Conflito de revisão exige reler o estado antes de salvar.</p></div><div class=\"prose\"><p>AcceptedRisk exige administrador, responsável e validade futura limitada. FalsePositive e aceite vigente preservam a decisão manual. Expiração do aceite retorna o achado para triagem com evento.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Resolver exige comparação válida</h2></div></div><div class=\"prose\"><p>Resolved requer auditoria concluída com Passed comparável após a última falha. Versão diferente, erro, inconclusão ou interrupção não fecham automaticamente o achado. Nova falha comparável pode reabrir.</p></div><div class=\"prose\"><p>A consolidação não prova exploração e não cria remediação automática. Correlação semântica de aliases, URLs equivalentes e revisões de código precisa de evolução específica.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Sequência de trabalho</h2></div></div><div class=\"card-grid\"><article class=\"card\"><h3>Conferir</h3><p>Abra ocorrência, evidência, escopo e versão do produtor.</p></article><article class=\"card\"><h3>Classificar</h3><p>Registre motivo, prioridade e decisão dentro das permissões.</p></article><article class=\"card\"><h3>Corrigir</h3><p>Faça a alteração no software avaliado com rastreabilidade própria.</p></article><article class=\"card\"><h3>Reavaliar</h3><p>Execute recorte comparável e confira a projeção posterior.</p></article></div></section>"
  },
  {
    "id": "score-performance",
    "title": "Score e Performance Lab",
    "group": "Resultados",
    "lead": "Números só fazem sentido quando o denominador e o limite da medição estão visíveis.",
    "sources": [
      "Sentinel/Persistence/PostgresSentinelStore.cs",
      "Sentinel/Core/Domain.cs",
      "Sentinel.PluginHost/Checks/BoundedHttpLoadCheck.cs",
      "Sentinel.Web/src/app/pages/performance.ts"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Security Score",
        "paragraphs": [
          "O algoritmo P0-2.0 considera controles Passed/Failed de auditorias Completed com origem SoftwareUnderTest. Exclui corpus, desconhecidos e controles demonstrativos. O retorno informa versão, fórmula, componentes, confiança, contagens e limitações.",
          "Cobertura observada é uma proporção do conjunto de auditorias elegíveis, não cobertura de todos os endpoints ou controles possíveis. Comparar notas de versões diferentes do algoritmo exige contexto. Ausência de dados elegíveis não deve virar aprovação."
        ]
      },
      {
        "title": "Carga limitada de laboratório",
        "paragraphs": [
          "O controle de carga usa até quarenta GETs, concorrência dois e orçamento global do alvo. Para em sinais como 429, 5xx, transporte falho, latência excessiva, redirect ou prazo. A medição é do recorte executado, não um benchmark geral da aplicação.",
          "Percentis p50/p95/p99 usam nearest-rank. Taxa observada depende da janela e das requisições realizadas. Cabeçalhos e cenário autenticado têm contratos diferentes; não misture seus números como se medissem a mesma operação."
        ]
      },
      {
        "title": "Evite conclusões fora da amostra",
        "paragraphs": [
          "Uma auditoria Completed pode conter Inconclusive. Um score alto não exclui vulnerabilidades não cobertas. Uma taxa baixa pode refletir orçamento deliberado do Sentinel, e não capacidade máxima do servidor."
        ]
      },
      {
        "title": "Perguntas antes de comparar",
        "paragraphs": [],
        "table": [
          [
            "Dimensão",
            "Verifique"
          ],
          [
            "População",
            "Mesma origem, projeto e critérios de elegibilidade"
          ],
          [
            "Método",
            "Mesma versão do algoritmo/plugin e tipo de medição"
          ],
          [
            "Carga",
            "Mesma URL, autenticação, orçamento e condições do ambiente"
          ],
          [
            "Completude",
            "Interrupções, recusas, truncamento e quantidade avaliada"
          ],
          [
            "Tempo",
            "Janela observada e ordem efetiva dos checkpoints"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Security Score</h2></div></div><div class=\"prose\"><p>O algoritmo P0-2.0 considera controles Passed/Failed de auditorias Completed com origem SoftwareUnderTest. Exclui corpus, desconhecidos e controles demonstrativos. O retorno informa versão, fórmula, componentes, confiança, contagens e limitações.</p></div><div class=\"prose\"><p>Cobertura observada é uma proporção do conjunto de auditorias elegíveis, não cobertura de todos os endpoints ou controles possíveis. Comparar notas de versões diferentes do algoritmo exige contexto. Ausência de dados elegíveis não deve virar aprovação.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Carga limitada de laboratório</h2></div></div><div class=\"prose\"><p>O controle de carga usa até quarenta GETs, concorrência dois e orçamento global do alvo. Para em sinais como 429, 5xx, transporte falho, latência excessiva, redirect ou prazo. A medição é do recorte executado, não um benchmark geral da aplicação.</p></div><div class=\"prose\"><p>Percentis p50/p95/p99 usam nearest-rank. Taxa observada depende da janela e das requisições realizadas. Cabeçalhos e cenário autenticado têm contratos diferentes; não misture seus números como se medissem a mesma operação.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Evite conclusões fora da amostra</h2></div></div><div class=\"prose\"><p>Uma auditoria Completed pode conter Inconclusive. Um score alto não exclui vulnerabilidades não cobertas. Uma taxa baixa pode refletir orçamento deliberado do Sentinel, e não capacidade máxima do servidor.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Resultados</p><h2>Perguntas antes de comparar</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Perguntas antes de comparar\"><table><thead><tr><th scope=\"col\">Dimensão</th><th scope=\"col\">Verifique</th></tr></thead><tbody><tr><td>População</td><td>Mesma origem, projeto e critérios de elegibilidade</td></tr><tr><td>Método</td><td>Mesma versão do algoritmo/plugin e tipo de medição</td></tr><tr><td>Carga</td><td>Mesma URL, autenticação, orçamento e condições do ambiente</td></tr><tr><td>Completude</td><td>Interrupções, recusas, truncamento e quantidade avaliada</td></tr><tr><td>Tempo</td><td>Janela observada e ordem efetiva dos checkpoints</td></tr></tbody></table></div></section>"
  },
  {
    "id": "api",
    "title": "Referência da API",
    "group": "Desenvolvimento",
    "lead": "Rotas extraídas dos controllers, com os contratos de contexto e autorização preservados.",
    "sources": [
      "Sentinel/Controllers/ProjectsController.cs",
      "Sentinel/Controllers/AuditsController.cs",
      "Sentinel/Controllers/TargetCredentialsController.cs",
      "Sentinel/Controllers/SourceSnapshotsController.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Convenções e autenticação",
        "paragraphs": [
          "As rotas usam /api/v1. ASP.NET serializa enums como strings. Parâmetros :guid no catálogo representam restrições de rota, não texto que o cliente deva enviar. Use o Swagger do ambiente Development para conferir schemas e exemplos completos.",
          "Saúde e configuração OIDC são públicas. Demais recursos são sujeitos a autenticação, organização e políticas por operação. Ausência de um atributo no método não significa que o recurso é público: a configuração global também participa."
        ]
      },
      {
        "title": "Paginação e concorrência",
        "paragraphs": [
          "Projetos oferecem busca por nome/descrição, propósito e ordenação. Históricos usam limit/offset; eventos de execução usam cursor beforeId. Use o total e o cursor retornados em vez de presumir que a primeira página é o conjunto completo.",
          "run-profile usa expectedVersion. Triagem usa revisão otimista. Ao receber conflito, recarregue o registro e reconcilie a alteração. Após falha de conexão em um POST, consulte o histórico antes de repetir."
        ]
      },
      {
        "title": "Contratos essenciais",
        "paragraphs": [],
        "code": "// Corpo ilustrativo de um pedido de auditoria HTTP\n{\n  \"targetUrl\": \"http://localhost:8080/api/status\",\n  \"action\": \"simulated\",\n  \"confirmActive\": false,\n  \"dataOrigin\": \"SoftwareUnderTest\"\n}",
        "note": "O projeto e o escopo devem existir e autorizar esse alvo. O exemplo contém somente endereço de loopback; não inclui autenticação nem dispara requisições."
      },
      {
        "title": "Catálogo de rotas",
        "paragraphs": [],
        "table": [
          [
            "Método",
            "Rota",
            "Controller"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/api-surface/preview",
            "ApiSurfaceController"
          ],
          [
            "GET",
            "/api/v1/audits/{auditId:guid}/execution",
            "AuditsController"
          ],
          [
            "GET",
            "/api/v1/audits/{auditId:guid}/execution/events",
            "AuditsController"
          ],
          [
            "POST",
            "/api/v1/audits/{auditId:guid}/cancel",
            "AuditsController"
          ],
          [
            "PUT",
            "/api/v1/audits/{auditId:guid}/target-budget",
            "AuditsController"
          ],
          [
            "GET",
            "/api/v1/audits/{auditId:guid}",
            "AuditsController"
          ],
          [
            "GET",
            "/api/v1/audits/{auditId:guid}/report",
            "AuditsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/data-origins/events",
            "DataOriginsController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/data-origins/classify",
            "DataOriginsController"
          ],
          [
            "GET",
            "/api/v1/audits/{auditId:guid}/evidence/{evidenceId}/artifact",
            "EvidenceController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/evidence-policy",
            "EvidencePolicyController"
          ],
          [
            "PUT",
            "/api/v1/projects/{projectId:guid}/evidence-policy",
            "EvidencePolicyController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/findings",
            "FindingsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/findings/{id:guid}",
            "FindingsController"
          ],
          [
            "PUT",
            "/api/v1/projects/{projectId:guid}/findings/{id:guid}/triage",
            "FindingsController"
          ],
          [
            "GET",
            "/api/v1/identity/configuration",
            "IdentityController"
          ],
          [
            "GET",
            "/api/v1/identity",
            "IdentityController"
          ],
          [
            "GET",
            "/api/v1/identity/organizations",
            "IdentityController"
          ],
          [
            "POST",
            "/api/v1/identity/organizations",
            "IdentityController"
          ],
          [
            "GET",
            "/api/v1/operations",
            "OperationsController"
          ],
          [
            "GET",
            "/api/v1/plugins",
            "PluginsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/run-profile",
            "ProjectRunProfilesController"
          ],
          [
            "PUT",
            "/api/v1/projects/{projectId:guid}/run-profile",
            "ProjectRunProfilesController"
          ],
          [
            "GET",
            "/api/v1/projects",
            "ProjectsController"
          ],
          [
            "GET",
            "/api/v1/projects/search",
            "ProjectsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}",
            "ProjectsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/scopes",
            "ProjectsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/audits",
            "ProjectsController"
          ],
          [
            "POST",
            "/api/v1/projects",
            "ProjectsController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/scopes",
            "ProjectsController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/audits",
            "ProjectsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/security-score",
            "ProjectsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/scopes/{scopeId:guid}/events",
            "ScopeLifecycleController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/scopes/{scopeId:guid}/revoke",
            "ScopeLifecycleController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/source-snapshots",
            "SourceSnapshotsController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/source-snapshots",
            "SourceSnapshotsController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/source-snapshots/{id:guid}/audits",
            "SourceSnapshotsController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/source-snapshots/{id:guid}/revoke",
            "SourceSnapshotsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/target-credentials",
            "TargetCredentialsController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/target-credentials",
            "TargetCredentialsController"
          ],
          [
            "PUT",
            "/api/v1/projects/{projectId:guid}/target-credentials/{id:guid}",
            "TargetCredentialsController"
          ],
          [
            "POST",
            "/api/v1/projects/{projectId:guid}/target-credentials/{id:guid}/revoke",
            "TargetCredentialsController"
          ],
          [
            "GET",
            "/api/v1/projects/{projectId:guid}/target-credentials/{id:guid}/events",
            "TargetCredentialsController"
          ],
          [
            "GET",
            "/api/v1/health",
            "Program.cs"
          ]
        ],
        "note": "Extração estática dos atributos de rota, acrescida da saúde mapeada em Program.cs. O catálogo não substitui schemas, políticas e validações do método."
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Convenções e autenticação</h2></div></div><div class=\"prose\"><p>As rotas usam /api/v1. ASP.NET serializa enums como strings. Parâmetros :guid no catálogo representam restrições de rota, não texto que o cliente deva enviar. Use o Swagger do ambiente Development para conferir schemas e exemplos completos.</p></div><div class=\"prose\"><p>Saúde e configuração OIDC são públicas. Demais recursos são sujeitos a autenticação, organização e políticas por operação. Ausência de um atributo no método não significa que o recurso é público: a configuração global também participa.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Paginação e concorrência</h2></div></div><div class=\"prose\"><p>Projetos oferecem busca por nome/descrição, propósito e ordenação. Históricos usam limit/offset; eventos de execução usam cursor beforeId. Use o total e o cursor retornados em vez de presumir que a primeira página é o conjunto completo.</p></div><div class=\"prose\"><p>run-profile usa expectedVersion. Triagem usa revisão otimista. Ao receber conflito, recarregue o registro e reconcilie a alteração. Após falha de conexão em um POST, consulte o histórico antes de repetir.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Contratos essenciais</h2></div></div><pre class=\"codebox\"><code>// Corpo ilustrativo de um pedido de auditoria HTTP\n{\n  &quot;targetUrl&quot;: &quot;http://localhost:8080/api/status&quot;,\n  &quot;action&quot;: &quot;simulated&quot;,\n  &quot;confirmActive&quot;: false,\n  &quot;dataOrigin&quot;: &quot;SoftwareUnderTest&quot;\n}</code></pre><div class=\"callout\"><span>O projeto e o escopo devem existir e autorizar esse alvo. O exemplo contém somente endereço de loopback; não inclui autenticação nem dispara requisições.</span></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Catálogo de rotas</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Catálogo de rotas\"><table><thead><tr><th scope=\"col\">Método</th><th scope=\"col\">Rota</th><th scope=\"col\">Controller</th></tr></thead><tbody><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/api-surface/preview</td><td>ApiSurfaceController</td></tr><tr><td>GET</td><td>/api/v1/audits/{auditId:guid}/execution</td><td>AuditsController</td></tr><tr><td>GET</td><td>/api/v1/audits/{auditId:guid}/execution/events</td><td>AuditsController</td></tr><tr><td>POST</td><td>/api/v1/audits/{auditId:guid}/cancel</td><td>AuditsController</td></tr><tr><td>PUT</td><td>/api/v1/audits/{auditId:guid}/target-budget</td><td>AuditsController</td></tr><tr><td>GET</td><td>/api/v1/audits/{auditId:guid}</td><td>AuditsController</td></tr><tr><td>GET</td><td>/api/v1/audits/{auditId:guid}/report</td><td>AuditsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/data-origins/events</td><td>DataOriginsController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/data-origins/classify</td><td>DataOriginsController</td></tr><tr><td>GET</td><td>/api/v1/audits/{auditId:guid}/evidence/{evidenceId}/artifact</td><td>EvidenceController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/evidence-policy</td><td>EvidencePolicyController</td></tr><tr><td>PUT</td><td>/api/v1/projects/{projectId:guid}/evidence-policy</td><td>EvidencePolicyController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/findings</td><td>FindingsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/findings/{id:guid}</td><td>FindingsController</td></tr><tr><td>PUT</td><td>/api/v1/projects/{projectId:guid}/findings/{id:guid}/triage</td><td>FindingsController</td></tr><tr><td>GET</td><td>/api/v1/identity/configuration</td><td>IdentityController</td></tr><tr><td>GET</td><td>/api/v1/identity</td><td>IdentityController</td></tr><tr><td>GET</td><td>/api/v1/identity/organizations</td><td>IdentityController</td></tr><tr><td>POST</td><td>/api/v1/identity/organizations</td><td>IdentityController</td></tr><tr><td>GET</td><td>/api/v1/operations</td><td>OperationsController</td></tr><tr><td>GET</td><td>/api/v1/plugins</td><td>PluginsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/run-profile</td><td>ProjectRunProfilesController</td></tr><tr><td>PUT</td><td>/api/v1/projects/{projectId:guid}/run-profile</td><td>ProjectRunProfilesController</td></tr><tr><td>GET</td><td>/api/v1/projects</td><td>ProjectsController</td></tr><tr><td>GET</td><td>/api/v1/projects/search</td><td>ProjectsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}</td><td>ProjectsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/scopes</td><td>ProjectsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/audits</td><td>ProjectsController</td></tr><tr><td>POST</td><td>/api/v1/projects</td><td>ProjectsController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/scopes</td><td>ProjectsController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/audits</td><td>ProjectsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/security-score</td><td>ProjectsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/scopes/{scopeId:guid}/events</td><td>ScopeLifecycleController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/scopes/{scopeId:guid}/revoke</td><td>ScopeLifecycleController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/source-snapshots</td><td>SourceSnapshotsController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/source-snapshots</td><td>SourceSnapshotsController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/source-snapshots/{id:guid}/audits</td><td>SourceSnapshotsController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/source-snapshots/{id:guid}/revoke</td><td>SourceSnapshotsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/target-credentials</td><td>TargetCredentialsController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/target-credentials</td><td>TargetCredentialsController</td></tr><tr><td>PUT</td><td>/api/v1/projects/{projectId:guid}/target-credentials/{id:guid}</td><td>TargetCredentialsController</td></tr><tr><td>POST</td><td>/api/v1/projects/{projectId:guid}/target-credentials/{id:guid}/revoke</td><td>TargetCredentialsController</td></tr><tr><td>GET</td><td>/api/v1/projects/{projectId:guid}/target-credentials/{id:guid}/events</td><td>TargetCredentialsController</td></tr><tr><td>GET</td><td>/api/v1/health</td><td>Program.cs</td></tr></tbody></table></div><div class=\"callout\"><span>Extração estática dos atributos de rota, acrescida da saúde mapeada em Program.cs. O catálogo não substitui schemas, políticas e validações do método.</span></div></section>"
  },
  {
    "id": "frontend",
    "title": "Frontend e workspace",
    "group": "Desenvolvimento",
    "lead": "Um contexto de projeto consistente entre preparação, execução e investigação.",
    "sources": [
      "Sentinel.Web/src/app/app.routes.ts",
      "Sentinel.Web/DESIGN-SYSTEM.md",
      "Sentinel.Web/src/app/pages/run.ts",
      "Sentinel.Web/src/app/core/workspace.service.ts"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Área central do projeto",
        "paragraphs": [
          "Projetos pesquisa o conjunto autorizado, preserva seleção e abre o workspace com alvos/escopos, acessos, fontes, plano e resultados. O cabeçalho indica o projeto; a seleção ocorre em Projetos ou Rodar testes.",
          "O plano salva URLs e referências com versão otimista. O browser envia modalidades disponíveis em sequência, cada uma como auditoria independente. Parar os próximos envios não cancela auditorias já aceitas."
        ]
      },
      {
        "title": "Estado real e contexto",
        "paragraphs": [
          "Telas consultam APIs de histórico, controles, evidências, score e infraestrutura. Troca de identidade limpa dados e cancela consultas pendentes. Filtros e origem precisam acompanhar o contexto para evitar comparar corpus com software avaliado.",
          "A página Rodar testes oferece Todos os testes e Testes separados. O modo geral considera modalidades disponíveis sem alterar as preferências salvas. O acompanhamento mostra as últimas oito execuções; sua contagem de atividade se refere ao recorte exibido."
        ]
      },
      {
        "title": "Carregamento por rota",
        "paragraphs": [
          "As páginas usam loadComponent. Rotas legadas continuam disponíveis ao lado da área por projeto. O fallback navega para overview. Uma rota conhecida no frontend não dispensa validação e autorização no servidor."
        ]
      },
      {
        "title": "Rotas do workspace",
        "paragraphs": [],
        "table": [
          [
            "Rota",
            "Uso"
          ],
          [
            "projects / projects/:id",
            "Lista e área do projeto"
          ],
          [
            "run",
            "Preparação, confirmação e acompanhamento"
          ],
          [
            "audits / audits/:id",
            "Histórico e detalhe da execução"
          ],
          [
            "findings / evidence / score",
            "Investigação e síntese"
          ],
          [
            "source-analysis / dependencies / api-surface",
            "Recortes de fonte e contratos"
          ],
          [
            "operations / plugins / coverage / identity",
            "Infraestrutura, capacidades e acesso"
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Área central do projeto</h2></div></div><div class=\"prose\"><p>Projetos pesquisa o conjunto autorizado, preserva seleção e abre o workspace com alvos/escopos, acessos, fontes, plano e resultados. O cabeçalho indica o projeto; a seleção ocorre em Projetos ou Rodar testes.</p></div><div class=\"prose\"><p>O plano salva URLs e referências com versão otimista. O browser envia modalidades disponíveis em sequência, cada uma como auditoria independente. Parar os próximos envios não cancela auditorias já aceitas.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Estado real e contexto</h2></div></div><div class=\"prose\"><p>Telas consultam APIs de histórico, controles, evidências, score e infraestrutura. Troca de identidade limpa dados e cancela consultas pendentes. Filtros e origem precisam acompanhar o contexto para evitar comparar corpus com software avaliado.</p></div><div class=\"prose\"><p>A página Rodar testes oferece Todos os testes e Testes separados. O modo geral considera modalidades disponíveis sem alterar as preferências salvas. O acompanhamento mostra as últimas oito execuções; sua contagem de atividade se refere ao recorte exibido.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Carregamento por rota</h2></div></div><div class=\"prose\"><p>As páginas usam loadComponent. Rotas legadas continuam disponíveis ao lado da área por projeto. O fallback navega para overview. Uma rota conhecida no frontend não dispensa validação e autorização no servidor.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Rotas do workspace</h2></div></div><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Rotas do workspace\"><table><thead><tr><th scope=\"col\">Rota</th><th scope=\"col\">Uso</th></tr></thead><tbody><tr><td>projects / projects/:id</td><td>Lista e área do projeto</td></tr><tr><td>run</td><td>Preparação, confirmação e acompanhamento</td></tr><tr><td>audits / audits/:id</td><td>Histórico e detalhe da execução</td></tr><tr><td>findings / evidence / score</td><td>Investigação e síntese</td></tr><tr><td>source-analysis / dependencies / api-surface</td><td>Recortes de fonte e contratos</td></tr><tr><td>operations / plugins / coverage / identity</td><td>Infraestrutura, capacidades e acesso</td></tr></tbody></table></div></section>"
  },
  {
    "id": "design-acessibilidade",
    "title": "Design e acessibilidade",
    "group": "Desenvolvimento",
    "lead": "Hierarquia clara, estados legíveis e navegação previsível em telas grandes e pequenas.",
    "sources": [
      "Sentinel.Web/DESIGN-SYSTEM.md",
      "Sentinel.Web/src/styles.css",
      "Sentinel.Web/scripts/check-contrast.mjs",
      "Sentinel.Web/src/app/app.routes.ts"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "Linguagem visual do produto",
        "paragraphs": [
          "A revisão Harpia adota marca vetorial local, grafite/azul, branco frio e temas claro/escuro. Tokens semânticos compartilham superfícies, texto, risco, foco e espaçamento entre páginas. Risco combina cor com texto.",
          "Menu recolhível, breadcrumbs, indicador de projeto e drawer móvel dão orientação. O drawer do produto confina foco, fecha com Escape e devolve foco ao acionador. Tabelas têm rolagem interna e formulários se reorganizam em telas estreitas."
        ]
      },
      {
        "title": "Padrão desta documentação",
        "paragraphs": [
          "O site mantém o padrão editorial e visual das referências: Inter local, navegação numerada, agrupamentos, páginas temáticas, tabelas, cartões, tema persistente e fontes do código. A apresentação própria do Sentinel destaca o fluxo da auditoria e suas fronteiras.",
          "Busca funciona sem rede e ignora acentos. Ctrl/Cmd+K abre a busca; Alt+setas percorre temas. Links diretos por fragmento permitem compartilhar uma seção temática. Exemplos interativos são didáticos e não representam telemetria real."
        ]
      },
      {
        "title": "Verificação de acessibilidade",
        "paragraphs": [
          "O código do produto inclui Axe e script de contraste. O design system registra vinte pares de texto avaliados a 4,5:1, sem declarar certificação. Navegação por teclado, zoom, foco, leitores de tela e fluxos completos exigem revisão além de testes automáticos.",
          "A documentação respeita prefers-reduced-motion, usa títulos em hierarquia, link de salto e indicação textual dos estados. O controle de tema é persistido somente no navegador."
        ]
      },
      {
        "title": "Critérios de revisão",
        "paragraphs": [],
        "items": [
          [
            "Orientação",
            "Página ativa, grupo, título e sequência de leitura permanecem visíveis."
          ],
          [
            "Interação",
            "Teclado, Escape, foco e retorno seguem caminhos previsíveis."
          ],
          [
            "Leitura",
            "Contraste, tamanho e largura das linhas preservam legibilidade nos dois temas."
          ],
          [
            "Responsividade",
            "Conteúdo continua disponível no celular sem esconder informações essenciais."
          ]
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Linguagem visual do produto</h2></div></div><div class=\"prose\"><p>A revisão Harpia adota marca vetorial local, grafite/azul, branco frio e temas claro/escuro. Tokens semânticos compartilham superfícies, texto, risco, foco e espaçamento entre páginas. Risco combina cor com texto.</p></div><div class=\"prose\"><p>Menu recolhível, breadcrumbs, indicador de projeto e drawer móvel dão orientação. O drawer do produto confina foco, fecha com Escape e devolve foco ao acionador. Tabelas têm rolagem interna e formulários se reorganizam em telas estreitas.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Padrão desta documentação</h2></div></div><div class=\"prose\"><p>O site mantém o padrão editorial e visual das referências: Inter local, navegação numerada, agrupamentos, páginas temáticas, tabelas, cartões, tema persistente e fontes do código. A apresentação própria do Sentinel destaca o fluxo da auditoria e suas fronteiras.</p></div><div class=\"prose\"><p>Busca funciona sem rede e ignora acentos. Ctrl/Cmd+K abre a busca; Alt+setas percorre temas. Links diretos por fragmento permitem compartilhar uma seção temática. Exemplos interativos são didáticos e não representam telemetria real.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Verificação de acessibilidade</h2></div></div><div class=\"prose\"><p>O código do produto inclui Axe e script de contraste. O design system registra vinte pares de texto avaliados a 4,5:1, sem declarar certificação. Navegação por teclado, zoom, foco, leitores de tela e fluxos completos exigem revisão além de testes automáticos.</p></div><div class=\"prose\"><p>A documentação respeita prefers-reduced-motion, usa títulos em hierarquia, link de salto e indicação textual dos estados. O controle de tema é persistido somente no navegador.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Desenvolvimento</p><h2>Critérios de revisão</h2></div></div><div class=\"card-grid\"><article class=\"card\"><h3>Orientação</h3><p>Página ativa, grupo, título e sequência de leitura permanecem visíveis.</p></article><article class=\"card\"><h3>Interação</h3><p>Teclado, Escape, foco e retorno seguem caminhos previsíveis.</p></article><article class=\"card\"><h3>Leitura</h3><p>Contraste, tamanho e largura das linhas preservam legibilidade nos dois temas.</p></article><article class=\"card\"><h3>Responsividade</h3><p>Conteúdo continua disponível no celular sem esconder informações essenciais.</p></article></div></section>"
  },
  {
    "id": "persistencia",
    "title": "Persistência e recuperação",
    "group": "Operação e qualidade",
    "lead": "Banco, blobs e chaves formam um conjunto de recuperação; nenhum deles basta sozinho.",
    "sources": [
      "Sentinel/Persistence/SentinelDbContext.cs",
      "Sentinel/Persistence/PostgresSentinelStore.cs",
      "Sentinel/Program.cs",
      "Sentinel/Evidence/EvidenceArtifactStore.cs"
    ],
    "revision": "5bb78a6adf7255d63ee2fa938d942257299ca757",
    "sections": [
      {
        "title": "PostgreSQL como fonte de verdade",
        "paragraphs": [
          "Projetos, autorizações, auditorias, resultados, outbox, posse e metadados vivem no banco. As migrações são aplicadas no startup. Alterações recentes adicionam tabelas, índices e atributos preservando histórico, mas uma implantação deve avaliar compatibilidade de todas as instâncias.",
          "O plano de execução usa JSONB e versão otimista. Operações de coordenação e projeção usam transações e locks. JSONB não elimina os vínculos de projeto/organização nem as validações do serviço."
        ]
      },
      {
        "title": "Conteúdo cifrado e identidade de armazenamento",
        "paragraphs": [
          "Credenciais, evidências e snapshots dependem de Data Protection. No Windows, a proteção usa DPAPI; fora do laboratório Windows, o host exige certificado configurado. Workers devem compartilhar keyring e proteção compatíveis.",
          "StorageId identifica o volume lógico. Um worker em volume diferente não deve apagar conteúdo alheio nem presumir que consegue materializá-lo. Para S3, preserve bucket, versões, StorageId e keyring; mudar o provider não move os artefatos históricos."
        ]
      },
      {
        "title": "Roteiro de recuperação proposto",
        "paragraphs": [
          "Planeje cópias coordenadas do PostgreSQL, conteúdo privado ainda retido e keyring protegido, com acesso restrito. Em ambiente isolado, restaure as partes, valide organização e metadados, leia uma evidência de teste pelo endpoint autenticado e confira seu hash.",
          "Esse roteiro é orientação operacional desta documentação, não declaração de backup automatizado ou teste de restauração executado. Preserve janelas de retenção e não reintroduza segredos expirados sem política definida."
        ]
      }
    ],
    "body": "<section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Operação e qualidade</p><h2>PostgreSQL como fonte de verdade</h2></div></div><div class=\"prose\"><p>Projetos, autorizações, auditorias, resultados, outbox, posse e metadados vivem no banco. As migrações são aplicadas no startup. Alterações recentes adicionam tabelas, índices e atributos preservando histórico, mas uma implantação deve avaliar compatibilidade de todas as instâncias.</p></div><div class=\"prose\"><p>O plano de execução usa JSONB e versão otimista. Operações de coordenação e projeção usam transações e locks. JSONB não elimina os vínculos de projeto/organização nem as validações do serviço.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Operação e qualidade</p><h2>Conteúdo cifrado e identidade de armazenamento</h2></div></div><div class=\"prose\"><p>Credenciais, evidências e snapshots dependem de Data Protection. No Windows, a proteção usa DPAPI; fora do laboratório Windows, o host exige certificado configurado. Workers devem compartilhar keyring e proteção compatíveis.</p></div><div class=\"prose\"><p>StorageId identifica o volume lógico. Um worker em volume diferente não deve apagar conteúdo alheio nem presumir que consegue materializá-lo. Para S3, preserve bucket, versões, StorageId e keyring; mudar o provider não move os artefatos históricos.</p></div></section><section class=\"section\"><div class=\"section-head\"><div><p class=\"eyebrow\">Operação e qualidade</p><h2>Roteiro de recuperação proposto</h2></div></div><div class=\"prose\"><p>Planeje cópias coordenadas do PostgreSQL, conteúdo privado ainda retido e keyring protegido, com acesso restrito. Em ambiente isolado, restaure as partes, valide organização e metadados, leia uma evidência de teste pelo endpoint autenticado e confira seu hash.</p></div><div class=\"prose\"><p>Esse roteiro é orientação operacional desta documentação, não declaração de backup automatizado ou teste de restauração executado. Preserve janelas de retenção e não reintroduza segredos expirados sem política definida.</p></div></section>"
  }
];
