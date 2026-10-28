import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
const root = path.resolve(import.meta.dirname, '..');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const files = fs.readdirSync(path.join(root, 'docs')).filter(f => f.endsWith('.json')).sort();
const pages = files.map(file => {
  const p = JSON.parse(fs.readFileSync(path.join(root, 'docs', file), 'utf8'));
  p.body = p.sections.map(s => `<section class="section"><div class="section-head"><div><p class="eyebrow">${esc(s.label || p.group)}</p><h2>${esc(s.title)}</h2></div></div>${(s.paragraphs || []).map(t => `<div class="prose"><p>${esc(t)}</p></div>`).join('')}${s.items ? `<div class="card-grid">${s.items.map(i => `<article class="card"><h3>${esc(i[0])}</h3><p>${esc(i[1])}</p></article>`).join('')}</div>` : ''}${s.table ? `<div class="table-wrap" tabindex="0" role="region" aria-label="${esc(s.title)}"><table><thead><tr>${s.table[0].map(c => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${s.table.slice(1).map(row => `<tr>${row.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}${s.code ? `<pre class="codebox"><code>${esc(s.code)}</code></pre>` : ''}${s.note ? `<div class="callout"><span>${esc(s.note)}</span></div>` : ''}</section>`).join('');
  return p;
});
fs.writeFileSync(path.join(root, 'assets/docs.js'), 'window.SENTINEL_DOCS = ' + JSON.stringify(pages, null, 2) + ';\n');
fs.writeFileSync(path.join(root, 'docs/INDICE.md'), '# Documentação Sentinel\n\n' + pages.map(p => `- [${p.title}](../index.html#${p.id}) — ${p.lead}`).join('\n') + '\n');
const indexPath = path.join(root, 'index.html');
const index = fs.readFileSync(indexPath, 'utf8').replace(/((?:src|href)=")((?:assets\/)[^"?]+)(?:\?[^"\s]*)?(")/g, (_, prefix, asset, suffix) => {
  const hash = createHash('sha256').update(fs.readFileSync(path.join(root, asset))).digest('hex').slice(0,12);
  return `${prefix}${asset}?v=${hash}${suffix}`;
});
fs.writeFileSync(indexPath, index);
console.log(`${pages.length} páginas geradas; recursos versionados por conteúdo.`);
