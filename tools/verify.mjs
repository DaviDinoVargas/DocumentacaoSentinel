import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
const root = path.resolve(import.meta.dirname, '..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const before = read('assets/docs.js');
execFileSync(process.execPath, [path.join(root,'tools/build.mjs')]);
assert.equal(read('assets/docs.js'),before,'Conteúdo gerado desatualizado: execute npm run build.');
const sandbox={window:{}};vm.runInNewContext(before,sandbox);
const pages=sandbox.window.SENTINEL_DOCS;
assert(pages.length>=27,'Índice temático incompleto.');
const ids=new Set();
for(const p of pages){
  assert(/^[a-z0-9-]+$/.test(p.id));assert(!ids.has(p.id));ids.add(p.id);
  assert(p.title && p.lead && p.group && p.sections.length>=3,p.id);
  assert(/^[a-f0-9]{40}$/.test(p.revision));assert(p.sources.length>=2);
  for(const source of p.sources){assert(!source.includes('..') && !source.includes(':') && !source.startsWith('/'),source);}
  for(const s of p.sections){
    assert(s.title);assert(s.paragraphs.length || s.code || s.table || s.items,s.title);
    if(s.table){assert(s.table.length>1,s.title);assert(s.table.every(r=>r.length===s.table[0].length),s.title);}
  }
  assert(!/<script|\son\w+=/i.test(p.body),'Conteúdo editorial deve ser inerte.');
  assert(!/\b[A-Z]:[\\/]/.test(JSON.stringify(p)),'Caminho privado no conteúdo.');
}
const html=read('index.html');
for(const [,asset] of html.matchAll(/(?:src|href)="(assets\/[^"#]+)"/g)){assert(fs.existsSync(path.join(root,asset)),asset);}
for(const file of ['assets/app.js','assets/experience.js']){
  const js=read(file);execFileSync(process.execPath,['--check',path.join(root,file)]);
  for(const [,id] of js.matchAll(/href="#([a-z0-9-]+)"/g))assert(ids.has(id)||id==='main',id);
}
assert.equal(pages.find(p=>p.id==='plugins').sections.at(-1).table.length-1,41,'Confira catálogo de plugins.');
assert.equal(pages.find(p=>p.id==='api').sections.at(-1).table.length-1,44,'Confira catálogo da API.');
const files=fs.readdirSync(path.join(root,'docs')).filter(f=>f.endsWith('.json'));
assert.equal(files.length,pages.length);
const sourceRoot=process.env.SENTINEL_SOURCE_ROOT;
if(sourceRoot){for(const p of pages)for(const source of p.sources)assert(fs.existsSync(path.join(sourceRoot,source)),source);}
console.log(`Verificação concluída: ${pages.length} páginas, 41 plugins, 44 rotas; geração, estrutura, links e scripts válidos.`);
