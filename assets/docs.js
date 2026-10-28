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
  }
];
