(() => {
  const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const stages = [
    ['Autorizar','escopos','01','Escopo vigente','Alvo, janela, métodos e perfil delimitam o que pode ser enviado. Exclusões prevalecem sobre permissões sobrepostas.'],
    ['Persistir','mensageria','02','Pedido durável','Auditoria e outbox nascem na mesma transação PostgreSQL. A fila transporta a notificação do trabalho.'],
    ['Coordenar','execucao','03','Posse e orçamento','Lease, fencing e orçamento global governam o acesso entre workers. Cada requisição precisa de permissão.'],
    ['Investigar','sandbox','04','Plugin isolado','O container fica sem rede direta. O gateway do host reavalia a autorização e preserva os segredos.'],
    ['Verificar','evidencias','05','Evidência íntegra','O artefato é redigido e cifrado. Proveniência, retenção e hash são conferidos na leitura.'],
    ['Decidir','achados','06','Triagem com contexto','Ocorrências comparáveis sustentam o achado. Decisões humanas e histórico permanecem rastreáveis.']
  ];
  const simulation = [
    ['Queued','Pedido persistido','O pedido e sua outbox foram gravados. O worker ainda precisa adquirir a posse.'],
    ['WaitingForBudget','Aguardar sem duplicar','O orçamento é global por host/porta. A espera não significa falha nem conclusão.'],
    ['Running','Posse válida','O worker revalida escopo e prepara o plugin. O gateway governa cada acesso.'],
    ['Running','Checkpoint persistido','O resultado de um plugin foi salvo. Outros plugins ainda podem estar em execução.'],
    ['Completed','Execução concluída','A auditoria terminou. Os controles podem conter falhas ou inconclusões; examine o relatório.']
  ];
  function home(root) {
    const hero = document.createElement('section'); hero.className='sentinel-hero';
    hero.innerHTML=`<div class="hero-copy"><div class="hero-kicker"><span class="live-dot"></span> SENTINEL / IDENTIDADE HARPIA</div><h1>Da permissão<br>à <em>evidência.</em></h1><p>Abra o sistema por dentro.<br>Entenda as decisões, explore os contratos<br class="desktop-break"> e acompanhe cada fronteira de uma auditoria.</p><div class="hero-actions"><a class="button" href="#primeiros-passos">Começar a explorar <span>↗</span></a><a class="hero-text-link" href="#arquitetura">Ver arquitetura →</a></div><div class="hero-footnote"><span>01 — 27</span> UM SISTEMA. TODAS AS PERSPECTIVAS.</div></div><div class="sentinel-core" aria-label="Diagrama conceitual: autorização, execução e evidência"><div class="core-grid"></div><div class="core-ring ring-one"></div><div class="core-ring ring-two"></div><div class="core-axis axis-x"></div><div class="core-axis axis-y"></div><div class="core-shield"><img src="assets/brand/harpia-sentinel.svg" alt="Harpia brasileira, símbolo do Sentinel" width="220" height="220"><span>HARPIA BRASILEIRA</span></div><div class="orbit-label label-a"><i></i>ESCOPO AUTORIZADO<small>ENTRADA / POLÍTICA</small></div><div class="orbit-label label-b"><i></i>EXECUÇÃO GOVERNADA<small>LEASE / GATEWAY</small></div><div class="orbit-label label-c"><i></i>EVIDÊNCIA VERIFICÁVEL<small>HASH / PROVENIÊNCIA</small></div><span class="core-caption">IDENTIDADE HARPIA · PRECISÃO EM CADA FRONTEIRA</span></div>`;
    root.querySelector('.page-intro').replaceWith(hero);
    const stats=root.querySelector('.hero-stats');
    const pages=window.SENTINEL_DOCS;
    const pluginCount=pages.find(p=>p.id==='plugins').sections.at(-1).table.length-1;
    const routeCount=pages.find(p=>p.id==='api').sections.at(-1).table.length-1;
    stats.innerHTML=`<div class="stat"><strong>${pages.length}</strong><span>TEMAS PARA EXPLORAR</span></div><div class="stat"><strong>${pluginCount}</strong><span>MANIFESTOS CATALOGADOS</span></div><div class="stat"><strong>${routeCount}</strong><span>ROTAS DOCUMENTADAS</span></div><div class="stat"><strong>4</strong><span>PERFIS DE EXECUÇÃO</span></div>`;
    const flow=document.createElement('section'); flow.className='journey section';
    flow.innerHTML=`<div class="section-head"><div><p class="eyebrow">MAPA INTERATIVO</p><h2>Uma auditoria. Seis fronteiras.</h2><p>Selecione uma etapa para entender sua responsabilidade.</p></div><span class="map-tag">EXPLORE O FLUXO ↓</span></div><div class="journey-steps" role="group" aria-label="Etapas conceituais da auditoria">${stages.map((s,i)=>`<button class="journey-node ${i===0?'selected':''}" data-stage="${i}" aria-pressed="${i===0}"><span>${s[2]}</span><strong>${s[0]}</strong><i aria-hidden="true">${['◇','▤','⌁','◎','✓','↗'][i]}</i></button>`).join('')}</div><div class="journey-detail" aria-live="polite"></div>`;
    stats.after(flow);
    const show=i=>{const s=stages[i];flow.querySelector('.journey-detail').innerHTML=`<span class="detail-number">${s[2]}</span><div><p class="eyebrow">${s[0]}</p><h3>${s[3]}</h3><p>${s[4]}</p></div><a class="button secondary" href="#${s[1]}">Abrir tema ↗</a>`;flow.querySelectorAll('[data-stage]').forEach(b=>{const active=+b.dataset.stage===i;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});};
    flow.addEventListener('click',e=>{const b=e.target.closest('[data-stage]');if(b)show(+b.dataset.stage);});show(0);
  }
  function execution(root) {
    const box=document.createElement('section');box.className='execution-demo section';
    box.innerHTML=`<div class="section-head"><div><p class="eyebrow">LABORATÓRIO DE LEITURA</p><h2>Explore os estados da execução.</h2><p>Simulação didática local. Nenhuma auditoria é criada.</p></div><span class="map-tag">INTERATIVO</span></div><div class="sim-track">${simulation.map((s,i)=>`<span data-sim-step="${i}"><i></i>${i+1}</span>`).join('')}</div><div class="sim-display" aria-live="polite"></div><div class="sim-actions"><button class="button" data-sim="next">Avançar etapa →</button><button class="button secondary" data-sim="cancel">Solicitar cancelamento</button><button class="text-button" data-sim="reset">Reiniciar</button></div>`;
    root.querySelector('.page-intro').after(box);
    let step=0,cancel=0;
    const show=()=>{const item=cancel===1?['Cancelling','Novas permissões bloqueadas','Requisições já admitidas podem concluir. O monitor ainda precisa encerrar a execução.']:cancel===2?['Cancelled','Cancelamento concluído','Os checkpoints anteriores permanecem. Cancelar não desfaz efeitos já enviados.']:simulation[step];box.querySelector('.sim-display').innerHTML=`<span class="sim-state ${cancel?'cancelled':''}">${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p>`;box.querySelectorAll('[data-sim-step]').forEach((x,i)=>x.classList.toggle('on',i<=step));box.querySelector('[data-sim="next"]').disabled=cancel===2||(!cancel&&step===4);box.querySelector('[data-sim="cancel"]').disabled=cancel>0||step===4;box.querySelector('[data-sim="next"]').textContent=cancel===1?'Confirmar encerramento →':'Avançar etapa →';};
    box.addEventListener('click',e=>{const action=e.target.closest('[data-sim]')?.dataset.sim;if(action==='reset'){step=0;cancel=0;}if(action==='cancel')cancel=1;if(action==='next'){if(cancel===1)cancel=2;else step=Math.min(step+1,4);}show();});show();
  }
  window.SentinelExperience={mount(page,root){
    if(page.id==='visao-geral')home(root);
    if(page.id==='execucao')execution(root);
    root.querySelectorAll('.table-wrap').forEach((wrap,index)=>{
      const rows=[...wrap.querySelectorAll('tbody tr')];if(rows.length<12)return;
      const bar=document.createElement('div');bar.className='table-filter';bar.innerHTML=`<label for="filter-${index}">Filtrar catálogo<input id="filter-${index}" type="search" placeholder="Digite um nome, rota ou controle…"></label><span role="status">${rows.length} registros</span>`;wrap.before(bar);
      bar.querySelector('input').addEventListener('input',e=>{const q=e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();let count=0;rows.forEach(r=>{r.hidden=!r.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(q);if(!r.hidden)count++;});bar.querySelector('[role="status"]').textContent=`${count} de ${rows.length} registros`;});
    });
    if(page.id!=='visao-geral'){
      const intro=root.querySelector('.page-intro');
      const words=root.textContent.trim().split(/\s+/).length;
      const meta=document.createElement('div');meta.className='reading-meta';meta.textContent=`${Math.max(1,Math.ceil(words/200))} min de leitura · Revisão de 28 out. 2026 · Fontes verificáveis`;intro.append(meta);
      const sections=[...root.querySelectorAll('.section')];const toc=document.createElement('nav');toc.className='page-toc';toc.setAttribute('aria-label','Nesta página');toc.innerHTML='<span>NESTA PÁGINA</span>'+sections.map((s,i)=>`<button type="button" data-section="${i}">${esc(s.querySelector('h2')?.textContent||'Seção')}</button>`).join('');intro.after(toc);toc.addEventListener('click',e=>{const b=e.target.closest('[data-section]');if(b){const s=sections[+b.dataset.section];s.setAttribute('tabindex','-1');s.focus({preventScroll:true});s.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});}});
    }
  }};
})();
