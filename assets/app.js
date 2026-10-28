(() => {
  'use strict';
  const docs = window.SENTINEL_DOCS || [];
  const $ = s => document.querySelector(s);
  const nav = $('#nav'), content = $('#content'), search = $('#search');
  const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const matches = q => docs.filter(p => norm(p.title + ' ' + p.lead + ' ' + p.body).includes(norm(q.trim())));
  let current = docs[0]?.id;
  function closeMenu(returnFocus = false) {
    document.body.classList.remove('nav-open');
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
    if (returnFocus) $('#menu-toggle').focus();
  }
  function navigation(q = '') {
    const visible = matches(q);
    nav.innerHTML = [...new Set(docs.map(p => p.group))].map(g => {
      const pages = visible.filter(p => p.group === g);
      return pages.length ? `<div class="nav-group">${esc(g)}</div>${pages.map(p => `<a class="nav-link${p.id === current ? ' active' : ''}" href="#${p.id}" ${p.id === current ? 'aria-current="page"' : ''}><span class="nav-number">${String(docs.indexOf(p) + 1).padStart(2,'0')}</span><span>${esc(p.title)}</span></a>`).join('')}` : '';
    }).join('');
  }
  function render(id, focus = false) {
    const p = docs.find(p => p.id === id) || docs[0];
    if (!p) return;
    current = p.id;
    search.value = '';
    const n = docs.indexOf(p);
    const links = (p.sources || []).map(s => `<a href="https://github.com/DaviDinoVargas/Sentinel/blob/${p.revision}/${s}" target="_blank" rel="noreferrer"><code>${esc(s)}</code><span>↗</span></a>`).join('');
    const hero = n === 0 ? `<div class="hero-stats"><div class="stat"><strong>${docs.length}</strong><span>PÁGINAS TEMÁTICAS</span></div><div class="stat"><strong>4</strong><span>PERFIS DE EXECUÇÃO</span></div><div class="stat"><strong>28/10</strong><span>REVISÃO · 2026</span></div><div class="stat"><strong>∞</strong><span>LEITURA LOCAL</span></div></div>` : '';
    content.innerHTML = `<div class="page-intro"><p class="eyebrow">${String(n+1).padStart(2,'0')} — ${esc(p.group)}</p><h1 class="page-title">${esc(p.title)}</h1><p class="page-lead">${esc(p.lead)}</p></div>${hero}${p.body}<section class="source-panel"><div><p class="eyebrow">LEITURA DIRETA</p><h2>Fontes no código</h2><p>Revisão ${p.revision.slice(0,12)} · 28/10/2026. Arquivos relativos ao repositório Sentinel.</p></div><div class="source-links">${links}</div></section><nav class="page-pagination" aria-label="Sequência de leitura">${n ? `<a class="button secondary" href="#${docs[n-1].id}">← ${esc(docs[n-1].title)}</a>` : '<span></span>'}${n < docs.length-1 ? `<a class="button" href="#${docs[n+1].id}">${esc(docs[n+1].title)} →</a>` : '<a class="button" href="#visao-geral">Voltar ao início ↑</a>'}</nav>`;
    window.SentinelExperience?.mount(p, content);
    document.title = p.title + ' · Sentinel';
    $('#crumb-current').textContent = p.title;
    navigation(); closeMenu();
    if (location.hash !== '#' + p.id) history.replaceState(null,'','#' + p.id);
    window.scrollTo(0,0);
    $('#reading-progress').style.width = '0%';
    if (focus) content.focus({preventScroll:true});
  }
  search.addEventListener('input', () => {
    const q = search.value.trim(); navigation(q);
    if (!q) { render(current); search.focus(); return; }
    const found = matches(q);
    content.innerHTML = `<div class="page-intro"><p class="eyebrow">PESQUISA</p><h1 class="page-title">Resultados da busca</h1><p class="page-lead" role="status">${found.length} temas para “${esc(q)}”.</p></div><div class="card-grid">${found.map(p => `<a class="card search-result" href="#${p.id}"><h2>${esc(p.title)}</h2><p>${esc(p.lead)}</p></a>`).join('')}</div>${found.length ? '' : '<p>Nenhum resultado. Tente escopo, evidência, plugin ou instalação.</p>'}`;
    $('#crumb-current').textContent = 'Busca';
  });
  search.addEventListener('keydown', e => { if(e.key === 'Enter') {const first=matches(search.value)[0]; if(first) {location.hash=first.id; render(first.id,true);}} if(e.key==='Escape') render(current,true); });
  document.addEventListener('click', e => {const a=e.target.closest('a[href^="#"]'); if(a && a.hash !== '#main') { e.preventDefault(); const id=a.hash.slice(1); if(location.hash !== a.hash) history.pushState(null,'',a.hash); render(id,true); }});
  $('#theme-toggle').addEventListener('click', () => {const light=document.body.classList.toggle('light'); $('#theme-label').textContent=light?'Claro':'Escuro'; try{localStorage.setItem('sentinel-docs-theme',light?'light':'dark');}catch{}});
  $('#menu-toggle').addEventListener('click', e => {const open=document.body.classList.toggle('nav-open'); e.currentTarget.setAttribute('aria-expanded',String(open)); if(open) search.focus();});
  $('#scrim').addEventListener('click', () => closeMenu(true));
  document.addEventListener('keydown', e => {
    if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='k') {e.preventDefault(); if(matchMedia('(max-width:760px)').matches){document.body.classList.add('nav-open');$('#menu-toggle').setAttribute('aria-expanded','true');} search.focus();}
    if(e.key==='Escape' && document.body.classList.contains('nav-open')) closeMenu(true);
    if(e.key==='Tab' && document.body.classList.contains('nav-open')) {const all=[...$('#sidebar').querySelectorAll('a,button,input')];const first=all[0], last=all.at(-1); if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
    if(e.altKey && ['ArrowLeft','ArrowRight'].includes(e.key)) {const next=docs[docs.findIndex(p=>p.id===current)+(e.key==='ArrowRight'?1:-1)];if(next){e.preventDefault();location.hash=next.id;}}
  });
  window.addEventListener('hashchange', () => render(location.hash.slice(1),true));
  window.addEventListener('popstate', () => render(location.hash.slice(1),true));
  window.addEventListener('scroll', () => {const max=document.documentElement.scrollHeight-innerHeight;$('#reading-progress').style.width=(max>0?scrollY/max*100:0)+'%';},{passive:true});
  try{if(localStorage.getItem('sentinel-docs-theme')==='light'){document.body.classList.add('light');$('#theme-label').textContent='Claro';}}catch{}
  render(location.hash.slice(1));
})();
