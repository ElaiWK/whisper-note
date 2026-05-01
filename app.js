if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));

const baseDays = [
  { id:'d1', n:1, color:'blue', date:'01/maio, sexta', summary:'Lisboa → Zurich · centro histórico', transport:[['✈️','06:00 Lisboa — 09:50 Zurich'],['🚡','18 min'],['🏨','Delta City Hotel']], places:[
    p('hotel','🏨','Delta City Hotel','Delta City Hotel Zurich','Base da viagem em Zurique. O ponto principal é largar malas e recuperar dignidade.','Hotel é santuário: carrega telemóveis, compra tempo e evita discussões com mochilas.','Até Altstadt: cerca de 15 a 20 min, dependendo do transporte.'),
    p('altstadt','⌖','Altstadt (Old Town)','Altstadt Zurich','Centro antigo de Zurique, com ruas medievais, casas gremiais e história junto ao rio Limmat.','Tudo parece bonito e caro, que é basicamente a Suíça a dizer bom dia.','Até Lindenhof: aprox. 350 m, 5 min a pé.'),
    p('lindenhof','⌖','Lindenhof','Lindenhof Zurich','Colina histórica usada desde tempos romanos e depois como ponto estratégico medieval.','Miradouro perfeito para fingir serenidade enquanto as pernas negoceiam rendição.','Até Pfalzgasse: aprox. 450 m, 6 min a pé.'),
    p('pfalzgasse','⌖','Pfalzgasse','Pfalzgasse Zurich','Rua pequena no núcleo antigo da margem esquerda de Zurique.','Boa para fotografias discretas, o que raramente acontece com turistas, esses flamingos com telemóvel.','Até Augustinergasse: aprox. 300 m, 4 min a pé.'),
    p('augustinergasse','⌖','Augustinergasse','Augustinergasse Zurich','Rua pitoresca conhecida pelas fachadas antigas e janelas salientes coloridas.','Parece desenhada para fazer turistas perdoarem preços suíços.','Até St. Peters Church: aprox. 170 m, 2 min a pé.'),
    p('stpeter','⌖','St. Peters Church','St Peter Church Zurich','Igreja histórica conhecida por ter um dos maiores mostradores de relógio de torre da Europa.','Útil para saber exactamente há quanto tempo estão com fome.','Até Fraumunster: aprox. 350 m, 5 min a pé.'),
    p('fraumunster','⌖','Fraumunster','Fraumunster Zurich','Antiga abadia feminina medieval, hoje famosa também pelos vitrais de Marc Chagall.','Antiga e moderna sem parecer loja de candeeiros pretensiosa. Milagre raro.','Até Grossmunster: aprox. 350 m, 5 min a pé.'),
    p('grossmunster','⌖','Grossmunster','Grossmunster Zurich','Igreja icónica de torres gémeas, ligada à Reforma Protestante suíça.','As torres são quase o logótipo de Zurique. Marketing medieval com pedra.','Até Town Hall: aprox. 220 m, 3 min a pé.'),
    p('townhall','⌖','Town Hall','Zurich Town Hall','Câmara Municipal histórica junto ao rio, símbolo da vida política da cidade.','Burocracia com vista para o rio. Continua burocracia, mas posa melhor.','Até Aldi: aprox. 750 m, 10 min a pé.'),
    p('aldi','🛒','Aldi','Aldi Sihlstrasse 3 8001 Zürich','Paragem prática para snacks, água e sobrevivência financeira.','O verdadeiro património europeu é encontrar supermercado barato perto do centro.','Fim do roteiro de Zurique.')
  ]},
  { id:'d2', n:2, color:'red', date:'02/maio, sábado', summary:'Zurich → Sargans → Vaduz', transport:[['🚂','Zurich HB — Sargans, Bahnhof'],['🚍','Sargans, Bahnhof — Vaduz']], places:[
    p('vaduz','!','Vaduz Castle','Vaduz Castle','Castelo medieval acima de Vaduz e residência oficial da família principesca.','Normalmente não se visita por dentro, porque até príncipes gostam de fechaduras.','Até Cathedral of St. Florin: aprox. 1,5 km, 20 min a pé.'),
    p('florin','!','Cathedral of St. Florin','Cathedral of St Florin Vaduz','Catedral neogótica do século XIX, principal igreja católica de Vaduz.','Pequena, elegante e arrumada, como se até Deus tivesse agenda suíça.','Até Stausee Steg: cerca de 14 km. Melhor transporte.'),
    p('steg','!','Stausee Steg','Stausee Steg Liechtenstein','Lago de montanha na zona de Steg, com paisagem alpina e ambiente calmo.','Bom para lembrar que cidades são caixas de ansiedade empilhadas.','Até Gutenberg Castle: aprox. 15 km. Melhor transporte.'),
    p('gutenberg','!','Gutenberg Castle','Gutenberg Castle Liechtenstein','Castelo medieval em Balzers, um dos marcos históricos do Liechtenstein.','Parece conto antigo sem dragões. Cortes no orçamento, certamente.','Fim do roteiro de Liechtenstein.')
  ]},
  { id:'d3', n:3, color:'blue', date:'03/maio, domingo', summary:'Zurich → Geneva → Faro', transport:[['🚂','08:04 Zurich HB — 10:55 Geneva'],['🎒','Luggage storage — Radical Storage'],['✈️','20:30 Geneva — 22:05 Faro']], places:[
    p('cornavin','🚂','Geneva Cornavin Station','Geneva Cornavin Station','Principal estação ferroviária de Genebra e entrada natural na cidade.','Aqui começa o sprint elegante entre cultura, bagagem e horários.','Até Basilica Nossa Senhora: aprox. 120 m, 2 min a pé.'),
    p('notredame','⌖','Basilica Nossa Senhora de Genebra','Basilica Notre Dame Geneva','Basílica católica neogótica do século XIX, perto da estação.','Bonita, próxima e sem exigir decisões logísticas profundas.','Até Promenade de la Treille: aprox. 900 m, 12 min a pé.'),
    p('treille','⌖','Promenade de la Treille','Promenade de la Treille Geneva','Passeio histórico junto à cidade velha, famoso pelo banco de madeira comprido.','Banco gigante: perfeito para acomodar arrependimentos de quem subiu a pé.','Até Catedral de São Pedro: aprox. 300 m, 4 min a pé.'),
    p('stpierre','⌖','Catedral de São Pedro de Genebra','St Pierre Cathedral Geneva','Catedral ligada à Reforma Protestante e a João Calvino.','Séculos de gente a discutir o sentido da existência, como WhatsApp sem emojis.','Até Molard Tower: aprox. 450 m, 6 min a pé.'),
    p('molard','⌖','Geneva Molard Tower','Molard Tower Geneva','Torre histórica na Place du Molard, antiga zona comercial e portuária.','Genebra em miniatura: história, comércio e ar de relógio caro.','Até Jet d’Eau: aprox. 1,1 km, 15 min a pé.'),
    p('jetdeau','⌖','Jet d’Eau','Jet d Eau Geneva','Fonte monumental no Lago Léman e símbolo mais conhecido de Genebra.','Começou como solução técnica e virou postal. O acidente fez melhor marketing.','Até Broken Chair: aprox. 2,7 km. Melhor transporte se o tempo apertar.'),
    p('brokenchair','⌖','Broken Chair','Broken Chair Geneva','Escultura em frente à ONU, símbolo contra minas terrestres e bombas de fragmentação.','Uma cadeira partida a dizer mais sobre humanidade do que muitos discursos inteiros.','Até Palácio das Nações: aprox. 450 m, 6 min a pé.'),
    p('nations','⌖','Palácio das Nações','Palace of Nations Geneva','Sede europeia das Nações Unidas, no antigo edifício da Sociedade das Nações.','Lugar onde o mundo tenta resolver problemas. Às vezes até com café.','Até Radical Storage: confirmar no mapa.'),
    p('radical','🎒','Radical Storage','Radical Storage Geneva','Ponto de recolha da bagagem antes do voo. Evita musculação urbana involuntária.','Guardar malas é uma das grandes invenções da civilização.','Até Geneva Airport: 7 a 8 km. Ir de transporte.'),
    p('airport','✈️','Geneva Airport','Geneva Airport','Aeroporto de saída para Faro. Fim oficial da aventura suíça.','Última missão: passar segurança sem parecer culpado por ter chocolates na mala.','Fim. 20:30 Geneva — 22:05 Faro.')
  ]}
];

function p(id, icon, name, query, info, curiosity, next){return {id,icon,name,query,info,curiosity,next,custom:false}}
const kVisited='zgVisitedV2', kCustom='zgCustomV1', kOrder='zgOrderV1', kEdits='zgEditsV1', kHidden='zgHiddenV1';
let visited=JSON.parse(localStorage.getItem(kVisited)||'{}');
let custom=JSON.parse(localStorage.getItem(kCustom)||'{}');
let orders=JSON.parse(localStorage.getItem(kOrder)||'{}');
let edits=JSON.parse(localStorage.getItem(kEdits)||'{}');
let hidden=JSON.parse(localStorage.getItem(kHidden)||'{}');
let activeDay='d1';
let editingId=null;

function applyEdit(place){return {...place,...(edits[place.id]||{})}}
function dayPlaces(day){let arr=[...day.places,...(custom[day.id]||[])].filter(x=>!hidden[x.id]).map(applyEdit);let order=orders[day.id];if(order){arr.sort((a,b)=>(order.indexOf(a.id)<0?999:order.indexOf(a.id))-(order.indexOf(b.id)<0?999:order.indexOf(b.id)))}return arr}
function findPlace(id){for(const day of baseDays){const found=[...day.places,...(custom[day.id]||[])].find(x=>x.id===id);if(found)return {day,place:applyEdit(found),original:found}}return null}
function map(q){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q)}
function save(){localStorage.setItem(kVisited,JSON.stringify(visited));localStorage.setItem(kCustom,JSON.stringify(custom));localStorage.setItem(kOrder,JSON.stringify(orders));localStorage.setItem(kEdits,JSON.stringify(edits));localStorage.setItem(kHidden,JSON.stringify(hidden))}
function esc(s){return String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}

function render(){
 const root=document.getElementById('cards');
 root.innerHTML=baseDays.map(day=>{
  const places=dayPlaces(day).map(place=>{
   const editOpen=editingId===place.id;
   return `<li class="place ${visited[place.id]?'checked':''}" draggable="true" data-place="${place.id}" data-dayid="${day.id}"><div class="place-line"><button class="checkbtn" data-check="${place.id}" type="button">${visited[place.id]?'✓':''}</button><button class="place-toggle" data-toggle="${place.id}" type="button"><span class="pin">${place.icon}</span><span>${esc(place.name)}</span></button><a class="mapbtn" href="${map(place.query||place.name)}" target="_blank" rel="noreferrer">Mapa</a></div><div class="place-actions"><button data-edit="${place.id}" type="button">Editar</button><button data-delete="${place.id}" type="button">Apagar</button></div><div class="place-info"><p><b>História:</b> ${esc(place.info||'Paragem adicionada por vocês. O passado ainda não entregou relatório.')}</p><p><b>Curiosidade:</b> ${esc(place.curiosity||'Paragem personalizada, logo oficialmente mais importante do que metade dos monumentos.')}</p><p class="distance"><b>Distância:</b> ${esc(place.custom?'Ordem manual. Abre no Maps para recalcular sem inventar ciência.':place.next)}</p></div>${editOpen?editForm(place):''}</li>`
  }).join('');
  const transport=day.transport.map(t=>`<div class="row"><i>${t[0]}</i><span>${t[1]}</span></div>`).join('');
  return `<article class="card ${day.id===activeDay?'open':''}" id="${day.id}"><button class="head" data-day="${day.id}" type="button"><span class="num ${day.color}">${day.n}</span><span class="title"><b>${day.date}</b><small>${day.summary}</small></span><span class="chev">⌄</span></button><div class="body"><div class="block">${transport}</div><form class="add-stop" data-add="${day.id}"><select name="icon"><option>⌖</option><option>❤️</option><option>☕</option><option>🍽️</option><option>🛒</option><option>📸</option><option>🏨</option><option>🚂</option><option>✈️</option></select><input name="name" placeholder="Adicionar paragem"><button type="submit">Adicionar</button></form><ul class="places">${places}</ul><div class="ribbon">♡ Dia ${day.n}</div></div></article>`;
 }).join('');
 updateProgress(); bind();
}

function editForm(place){return `<form class="edit-stop" data-saveedit="${place.id}"><label>Ícone<select name="icon"><option ${place.icon==='⌖'?'selected':''}>⌖</option><option ${place.icon==='❤️'?'selected':''}>❤️</option><option ${place.icon==='☕'?'selected':''}>☕</option><option ${place.icon==='🍽️'?'selected':''}>🍽️</option><option ${place.icon==='🛒'?'selected':''}>🛒</option><option ${place.icon==='📸'?'selected':''}>📸</option><option ${place.icon==='🏨'?'selected':''}>🏨</option><option ${place.icon==='🚂'?'selected':''}>🚂</option><option ${place.icon==='✈️'?'selected':''}>✈️</option></select></label><label>Título<input name="name" value="${esc(place.name)}"></label><label>Pesquisa Maps<input name="query" value="${esc(place.query||place.name)}"></label><label>História<textarea name="info">${esc(place.info||'')}</textarea></label><label>Curiosidade<textarea name="curiosity">${esc(place.curiosity||'')}</textarea></label><label>Distância<textarea name="next">${esc(place.next||'')}</textarea></label><div><button type="submit">Guardar</button><button type="button" data-cancel="${place.id}">Cancelar</button></div></form>`}
function updateProgress(){const total=baseDays.reduce((s,d)=>s+dayPlaces(d).length,0);const done=Object.keys(visited).filter(k=>visited[k]&&!hidden[k]).length;document.getElementById('progressText').textContent=`${done} / ${total} locais visitados`}
function bind(){
 document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{activeDay=b.dataset.day;render()});
 document.querySelectorAll('.nav button').forEach(b=>{b.classList.toggle('on',b.dataset.t===activeDay);b.onclick=()=>{activeDay=b.dataset.t;render();setTimeout(()=>document.getElementById(activeDay).scrollIntoView({behavior:'smooth'}),50)}});
 document.querySelectorAll('[data-toggle]').forEach(b=>b.onclick=()=>b.closest('.place').classList.toggle('info-open'));
 document.querySelectorAll('[data-check]').forEach(b=>b.onclick=e=>{e.stopPropagation();visited[b.dataset.check]=!visited[b.dataset.check];save();render()});
 document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{editingId=editingId===b.dataset.edit?null:b.dataset.edit;render()});
 document.querySelectorAll('[data-cancel]').forEach(b=>b.onclick=()=>{editingId=null;render()});
 document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{const id=b.dataset.delete;const found=findPlace(id);if(!found)return;if(!confirm('Apagar esta localização?'))return;if(found.original.custom){custom[found.day.id]=(custom[found.day.id]||[]).filter(x=>x.id!==id)}else{hidden[id]=true}delete visited[id];delete edits[id];orders[found.day.id]=(orders[found.day.id]||[]).filter(x=>x!==id);save();render()});
 document.querySelectorAll('.edit-stop').forEach(f=>f.onsubmit=e=>{e.preventDefault();const id=f.dataset.saveedit;edits[id]={icon:f.icon.value,name:f.name.value.trim()||'Sem título',query:f.query.value.trim()||f.name.value.trim(),info:f.info.value.trim(),curiosity:f.curiosity.value.trim(),next:f.next.value.trim()};editingId=null;save();render()});
 document.querySelectorAll('.add-stop').forEach(f=>f.onsubmit=e=>{e.preventDefault();const day=f.dataset.add;const name=f.name.value.trim();if(!name)return;const icon=f.icon.value;const id='custom-'+Date.now();custom[day]=custom[day]||[];custom[day].push({id,icon,name,query:name,custom:true,info:'Paragem adicionada por vocês durante a viagem.',curiosity:'Isto agora é vosso. O turismo oficial que vá pentear macacos.',next:'Ordem manual. Usa o Maps para recalcular.'});orders[day]=dayPlaces(baseDays.find(d=>d.id===day)).map(x=>x.id).concat(id);save();render()});
 let dragged=null;document.querySelectorAll('.place').forEach(item=>{item.ondragstart=()=>{dragged=item};item.ondragover=e=>e.preventDefault();item.ondrop=e=>{e.preventDefault();if(!dragged||dragged===item)return;const day=item.dataset.dayid;const list=[...item.parentElement.querySelectorAll('.place')];const ids=list.map(x=>x.dataset.place);const from=ids.indexOf(dragged.dataset.place),to=ids.indexOf(item.dataset.place);ids.splice(to,0,ids.splice(from,1)[0]);orders[day]=ids;save();render()}})
}

document.getElementById('resetChecks').onclick=()=>{visited={};save();render()};
render();
