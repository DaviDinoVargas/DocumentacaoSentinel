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
  }
];
