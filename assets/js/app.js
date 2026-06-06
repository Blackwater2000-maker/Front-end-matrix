/* ============ DATA ============ */
const ROLES={
 owner:{code:'OW',tier:'TIER 1 — PLATFORM',name:'Owner Dashboard',accent:'#FFC629',icon:'◈',
   desc:"The big picture. Every rooftop, plan, order and invoice across your whole book &mdash; all in one calm place.",login:'platform-admin',dealer:'All Clients · Platform'},
 agency:{code:'AG',tier:'TIER 2 — AGENCY / GROUP',name:'Agency / Group',accent:'#FFC629',icon:'⬡',
   desc:'Every rooftop in your group, side by side &mdash; shared customer lists, journeys and co-op, without the spreadsheet juggling.',login:'group-manager',dealer:'Velocity Auto Group · 6 rooftops'},
 gm:{code:'GM',tier:'TIER 3 — ROOFTOP',name:'GM Dashboard',accent:'#FFC629',icon:'▣',
   desc:'Your store at a glance &mdash; who is shopping now, what needs a look today, and where the next sales are hiding.',login:'gm@reednissan',dealer:'Reed Nissan — Orlando · Nissan'},
 staff:{code:'ST',tier:'TIER 4 — STAFF',name:'Staff Dashboard',accent:'#FFC629',icon:'◉',
   desc:"A simple plan for your day &mdash; your people, the cars that fit them, and a friendly reminder of who to reach out to.",login:'j.reyes@reednissan',dealer:'Reed Nissan — Orlando · Sales'}
};
const NAV={
 owner:[{t:'overview',l:'Platform Overview',i:'▤'},{t:'clients',l:'Clients',i:'▦'},{t:'billing',l:'Billing & Plans',i:'$'},{t:'orders',l:'Orders',i:'⊞'},{t:'invoices',l:'Invoices',i:'⊟'},{sep:1},{t:'dm',l:'Direct Mail · Platform',i:'✉',red:1},{t:'dataflow',l:'Data Flow',i:'⇄'},{t:'health',l:'Platform Health',i:'❤'},{t:'compliance',l:'Compliance',i:'⚖'},{t:'integrations',l:'Integrations',i:'⊕'}],
 agency:[{t:'overview',l:'Group Overview',i:'▤'},{t:'rooftops',l:'Rooftops',i:'▦'},{t:'profiles',l:'Customer Profiles',i:'◉'},{t:'audiences',l:'Audiences',i:'◎'},{t:'builder',l:'Audience Builder',i:'⊕'},{t:'campaigns',l:'Campaigns',i:'➤'},{t:'journeys',l:'Journeys',i:'⋔'},{sep:1},{t:'dm',l:'Direct Mail Engine',i:'✉',red:1},{t:'coop',l:'OEM Co-op',i:'⊞'},{t:'reporting',l:'Group Reporting',i:'▥'}],
 gm:[{t:'overview',l:'Home',i:'▤'},{t:'shoppers',l:'Live Shoppers',i:'◉'},{t:'attention',l:'Needs Attention',i:'!'},{t:'builder',l:'Audience Builder',i:'⊕'},{t:'svc2sales',l:'Service → Sales',i:'⇪'},{t:'journeys',l:'Journeys',i:'⋔'},{t:'team',l:'Team & Access',i:'＋'},{sep:1},{t:'dm',l:'Direct Mail',i:'✉',red:1},{t:'predictive',l:'Predictive Insights',i:'✦'},{t:'reputation',l:'Reputation',i:'★'},{t:'compliance',l:'Compliance',i:'⚖'}],
 staff:[{t:'overview',l:'My Day',i:'▤'},{t:'myshoppers',l:'My Shoppers',i:'◉'},{t:'match',l:'Inventory Match',i:'⊜'},{t:'tasks',l:'Tasks & Follow-ups',i:'✓'},{sep:1},{t:'dm',l:'Send Direct Mail',i:'✉',red:1}]
};
const CLIENTS=[
 {n:'Reed Nissan — Orlando',oem:'Nissan',plan:'Enterprise + DM',mrr:6100,rev:212400,h:'green',dm:true,since:'Mar 2024',method:'•••• 4242',cycle:'Monthly'},
 {n:'Toyota of Clermont',oem:'Toyota',plan:'Enterprise + DM',mrr:6100,rev:188900,h:'gold',dm:true,since:'Jan 2024',method:'•••• 5113',cycle:'Annual (prepaid)'},
 {n:'Central Florida Ford',oem:'Ford',plan:'Growth + DM',mrr:4200,rev:141200,h:'green',dm:true,since:'Jun 2024',method:'•••• 6224',cycle:'Monthly'},
 {n:'Hialeah Hyundai',oem:'Hyundai',plan:'Growth + DM',mrr:4200,rev:133600,h:'green',dm:true,since:'Aug 2024',method:'•••• 7335',cycle:'Monthly'},
 {n:'David Maus Chevrolet',oem:'Chevrolet',plan:'Enterprise',mrr:4800,rev:156700,h:'green',dm:false,since:'Feb 2024',method:'•••• 8446',cycle:'Annual (prepaid)'},
 {n:'Greenway Kia of Orlando',oem:'Kia',plan:'Growth',mrr:2900,rev:98400,h:'green',dm:false,since:'Oct 2024',method:'•••• 9557',cycle:'Monthly'},
 {n:'AutoNation Honda Sanford',oem:'Honda',plan:'Growth',mrr:2900,rev:104300,h:'green',dm:false,since:'May 2024',method:'•••• 1668',cycle:'Monthly'},
 {n:'Orlando Mazda',oem:'Mazda',plan:'Starter',mrr:1200,rev:31800,h:'red',dm:false,since:'Nov 2024',method:'•••• 2779',cycle:'Monthly'}
];
const PLANS=[
 {n:'Starter',price:1200,seats:'3 seats',clients:1,feat:'CDP Core · 2 channels'},
 {n:'Growth',price:2900,seats:'10 seats',clients:3,feat:'CDP Core · all channels · predictive'},
 {n:'Enterprise',price:4800,seats:'Unlimited',clients:4,feat:'Everything · Agentic CRM · API'},
 {n:'Direct Mail Engine',price:1300,seats:'add-on',clients:4,feat:'Iridesse press · USPS · IMb tracking'}
];
const ORDERS=[
 {id:'ORD-4821',client:'Hialeah Hyundai',item:'Onboarding + data migration',amt:3500,date:'May 28',status:'Processing'},
 {id:'ORD-4818',client:'Reed Nissan — Orlando',item:'DM run · Lease-maturity 1,200 pc',amt:1880,date:'May 27',status:'In Production',dm:1},
 {id:'ORD-4815',client:'Toyota of Clermont',item:'Enterprise → +Direct Mail add-on',amt:1300,date:'May 26',status:'Activated',dm:1},
 {id:'ORD-4810',client:'Central Florida Ford',item:'DM run · Service no-show 640 pc',amt:1020,date:'May 24',status:'In Transit',dm:1},
 {id:'ORD-4804',client:'Greenway Kia of Orlando',item:'Seat expansion +5',amt:450,date:'May 22',status:'Activated'},
 {id:'ORD-4799',client:'David Maus Chevrolet',item:'API access tier',amt:600,date:'May 20',status:'Activated'}
];
const INVOICES=[
 {id:'INV-2026-0518',client:'Orlando Mazda',amt:1200,issued:'May 01',due:'May 15',status:'Overdue'},
 {id:'INV-2026-0531',client:'Toyota of Clermont',amt:6100,issued:'May 01',due:'May 31',status:'Due'},
 {id:'INV-2026-0529',client:'Reed Nissan — Orlando',amt:6100,issued:'May 01',due:'May 31',status:'Paid'},
 {id:'INV-2026-0527',client:'Central Florida Ford',amt:4200,issued:'May 01',due:'May 31',status:'Paid'},
 {id:'INV-2026-0525',client:'Hialeah Hyundai',amt:4200,issued:'May 01',due:'May 31',status:'Paid'},
 {id:'INV-2026-0522',client:'David Maus Chevrolet',amt:4800,issued:'May 01',due:'May 31',status:'Paid'},
 {id:'INV-2026-0520',client:'AutoNation Honda Sanford',amt:2900,issued:'May 01',due:'May 31',status:'Due'}
];
const SHOPPERS=[
 {n:'Maria T.',v:'2024 Pathfinder',stage:'Intent',score:78,ch:'SMS',tm:'11s ago',ltv:'$41,200'},
 {n:'David R.',v:'2024 Rogue',stage:'Research',score:54,ch:'Email',tm:'2m ago',ltv:'$22,800'},
 {n:'Jenna K.',v:'2025 Frontier',stage:'Purchase',score:91,ch:'Phone',tm:'5m ago',ltv:'$48,600'},
 {n:'Carlos M.',v:'2024 Murano',stage:'Intent',score:69,ch:'SMS',tm:'8m ago',ltv:'$37,400'},
 {n:'Aisha B.',v:'2024 Kicks',stage:'Awareness',score:33,ch:'Email',tm:'12m ago',ltv:'$18,900'},
 {n:'Tom W.',v:'2025 Altima',stage:'Intent',score:73,ch:'Direct Mail',tm:'18m ago',ltv:'$29,300'},
 {n:'Priya S.',v:'2024 Pathfinder',stage:'Research',score:58,ch:'SMS',tm:'24m ago',ltv:'$33,100'},
 {n:'Greg L.',v:'2024 Titan',stage:'Purchase',score:88,ch:'Phone',tm:'31m ago',ltv:'$52,800'}
];
const COLORS={navy:'#7A1E30',navyd:'#3C0C18',gold:'#9C6A0E',teal:'#9C6A0E',green:'#7A1E30',red:'#7A1E30'};

/* ============ HELPERS ============ */
const $=s=>document.querySelector(s);
const money=n=>'$'+n.toLocaleString();
const moneyK=n=>n>=1000?'$'+(n/1000).toFixed(n>=100000?0:1)+'K':'$'+n;
const initials=n=>n.split(' ').map(x=>x[0]).join('').slice(0,2);
function sparkline(v,c,w=78,h=26){const mn=Math.min(...v),mx=Math.max(...v),r=(mx-mn)||1;
 const pts=v.map((x,i)=>`${(i/(v.length-1))*w},${h-((x-mn)/r)*(h-4)-2}`).join(' ');
 const l=v.map((x,i)=>[(i/(v.length-1))*w,h-((x-mn)/r)*(h-4)-2]).pop();
 return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" class="spark"><polyline points="${pts}" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/><circle cx="${l[0]}" cy="${l[1]}" r="2" fill="${c}"/></svg>`;}
function gaugeSvg(p,c){const r=44,cir=2*Math.PI*r,off=cir*(1-p/100);
 return `<svg width="104" height="104" viewBox="0 0 104 104" style="transform:rotate(-90deg)"><circle cx="52" cy="52" r="${r}" fill="none" stroke="rgba(0,0,0,.1)" stroke-width="8"/><circle cx="52" cy="52" r="${r}" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round" stroke-dasharray="${cir}" stroke-dashoffset="${off}"/></svg>`;}
function rnd(s){let x=Math.sin(s)*10000;return x-Math.floor(x);}
function gen(s,n,b,a){return Array.from({length:n},(_,i)=>Math.round(b+a*Math.sin(i*.7+s)+a*.6*rnd(s+i)));}
const totalMRR=CLIENTS.reduce((s,c)=>s+c.mrr,0);
const dmClients=CLIENTS.filter(c=>c.dm).length;
const outAR=INVOICES.filter(i=>i.status!=='Paid').reduce((s,i)=>s+i.amt,0);

/* ============ STATE ============ */
let state={role:null,tab:'overview',view:'overview',profileName:null,builder:null};

/* ============ MATRIX ============ */
function renderMatrix(){
 $('#roleGrid').innerHTML=Object.entries(ROLES).map(([k,r])=>`
  <div class="role-card" style="--accent:${r.accent}" data-role="${k}">
   <div class="role-tier">${r.tier}</div>
   <div class="role-icon" style="background:${r.accent}">${r.icon}</div>
   <div class="role-name">${r.name}</div>
   <div class="role-desc">${r.desc}</div>
   <div class="role-login"><span>login: ${r.login}</span><span class="arrow">enter →</span></div>
  </div>`).join('');
 document.querySelectorAll('.role-card').forEach(c=>c.onclick=()=>enter(c.dataset.role));
}
function enter(role){
 state.role=role;state.tab='overview';state.view='overview';state.builder=null;
 $('#welcome').classList.add('hidden');$('#matrix').classList.add('hidden');$('#app').classList.add('on');
 const r=ROLES[role];
 $('#rsAvatar').textContent=r.code;$('#rsAvatar').style.background=r.accent;$('#roleSelect').value=role;
 const dp=r.dealer.split(' · ');
 $('#dealerSel').innerHTML= role==='owner'
   ? `<span class="dot green"></span><span>${r.dealer}</span>`
   : `<span>${dp[0]}</span>${dp[1]?`<span class="oem">${dp[1]}</span>`:''}${dp[2]?`<span class="oem">${dp[2]}</span>`:''}`;
 closeDrawer();renderNav();renderMain();
}

/* ============ NAV ============ */
function renderNav(){
 const r=ROLES[state.role];
 $('#nav').innerHTML=`<div class="nav-tier">${r.tier} · <b>${r.login}</b></div>`+
  NAV[state.role].map(it=>it.sep?'<div class="nav-sep"></div>':
   `<div class="nav-item ${state.tab===it.t?'active':''}" data-tab="${it.t}"><span class="ico">${it.i}</span><span>${it.l}</span>${it.red?'<span class="reddot"></span>':''}</div>`).join('')+
  `<div class="nav-foot">Auto CDP · ${r.name}<br><span class="gr">● Direct Mail Engine online</span></div>`;
 document.querySelectorAll('.nav-item[data-tab]').forEach(n=>n.onclick=()=>{state.tab=n.dataset.tab;state.view=n.dataset.tab;closeDrawer();renderNav();renderMain();});
}

/* ============ ROUTER ============ */
function renderMain(){
 let html;
 if(state.view==='profile') html=profileView(state.profileName);
 else{const fn=VIEWS[state.role][state.view]||VIEWS[state.role].overview;html=fn();}
 $('#main').innerHTML=`<div class="fadein">${html}</div>`;$('#main').scrollTop=0;
 if(state.role==='gm'&&state.view==='overview')setTimeout(manageStream,40);
 if(state.view==='builder')wireBuilder();
}
function goView(v){state.tab=v;state.view=v;closeDrawer();renderNav();renderMain();}
window.openProfile=function(name){state.view='profile';state.profileName=name;renderMain();};
window.backFromProfile=function(){state.view=state.tab;renderMain();};

/* ============ PARTIALS ============ */
function head(t,s,btn){return `<div class="page-head"><div><div class="page-title">${t}</div><div class="page-sub">${s}</div></div>${btn||''}</div>`;}
function kpi(l,v,sub,sp,acc){return `<div class="kpi ${acc?'accent-l':''}" ${acc?`style="--accent:${acc}"`:''}><div class="label">${l}</div><div class="val mono-num">${v}</div><div class="sub">${sub||''}</div>${sp||''}</div>`;}
const chColor=ch=>ch==='Direct Mail'?COLORS.red:ch==='Phone'?COLORS.green:ch==='SMS'?COLORS.navy:ch==='Email'?COLORS.teal:COLORS.gold;

/* ============ VIEWS ============ */
const VIEWS={
owner:{
 overview(){return head('Welcome back','Here\'s how your whole book is doing today &mdash; 8 rooftops, all running smoothly.',`<button class="btn">＋ Add Client</button>`)+
  `<div class="kpi-strip" style="grid-template-columns:repeat(6,1fr)">
   ${kpi('Total MRR',money(totalMRR),`<span class="delta up">▲ 11.4%</span><span class="mut">MoM</span>`,sparkline(gen(1,12,28,4),COLORS.navy),'var(--navy)')}
   ${kpi('ARR run-rate',moneyK(totalMRR*12),`<span class="delta up">▲ 11.4%</span>`,sparkline(gen(2,12,330,40),COLORS.teal))}
   ${kpi('Active Rooftops','8',`<span class="delta up">▲ 2</span><span class="mut">QTD</span>`,sparkline([4,4,5,5,6,6,7,7,8,8],COLORS.navy))}
   ${kpi('Net Rev Retention','118%',`<span class="delta up">▲ 6pts</span>`,sparkline(gen(4,12,108,8),COLORS.green))}
   ${kpi('Mail / mo','14,820',`<span class="rd">Direct Mail</span>`,sparkline(gen(5,12,11,3),COLORS.red))}
   ${kpi('Outstanding A/R',money(outAR),`<span class="delta dn">2 invoices</span>`,sparkline(gen(6,12,6,3),COLORS.gold),'var(--gold)')}</div>
  <div class="split64">
   <div class="card"><div class="card-head"><h3>Client Book — Revenue & Health</h3><span class="meta">click a client</span></div>
    <table><thead><tr><th>Client</th><th>OEM</th><th>Plan</th><th>MRR</th><th>Attributed (YTD)</th><th>Health</th></tr></thead><tbody>
    ${CLIENTS.map(c=>`<tr class="clickable" onclick="openClient('${c.n.replace(/'/g,"")}')">
     <td><span class="name">${c.n}</span></td><td><span class="oem-badge">${c.oem}</span></td>
     <td>${c.plan.includes('DM')?c.plan.replace('+ DM','')+'<span class="pill red" style="margin-left:5px">+DM</span>':c.plan}</td>
     <td class="mono-num cy">${money(c.mrr)}</td><td class="mono-num">${money(c.rev)}</td>
     <td><span class="dot ${c.h}"></span> ${c.h==='green'?'Healthy':c.h==='gold'?'Review':'At risk'}</td></tr>`).join('')}
    </tbody></table></div>
   <div class="card"><div class="card-head"><h3>Needs your attention</h3><span class="meta">3 items</span></div>
    ${att('var(--red)','Orlando Mazda — invoice 15 days overdue','INV-2026-0518 · $1,200 · Starter. Auto-dunning sent 3×. Health flipped to at-risk.',['Suspend|red','Send reminder|solid','View account|'])}
    ${att('var(--gold)','Toyota of Clermont — usage at 92% of plan','Profiles unified trending past Enterprise cap. Upsell opportunity.',['Draft upgrade quote|solid','View usage|'])}
    ${att('var(--green)','Hialeah Hyundai onboarding — 80% complete','Data migration processing. DMS + OEM CRM connected. Go-live ~Jun 3.',['Open onboarding|'])}
   </div></div>`;},
 clients(){return head('Clients','8 rooftops · 7 OEM brands · '+money(totalMRR)+'/mo recurring',`<button class="btn">＋ Add Client</button>`)+
  `<div class="tag-row"><div class="tag on">All (8)</div><div class="tag">Healthy (6)</div><div class="tag">Review (1)</div><div class="tag">At risk (1)</div><div class="tag">Direct Mail (${dmClients})</div></div>
  <div class="three">${CLIENTS.map(c=>`<div class="card" style="cursor:pointer" onclick="openClient('${c.n.replace(/'/g,"")}')"><div class="card-body">
   <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
    <div><div class="name" style="font-size:13px;margin-bottom:5px">${c.n}</div><span class="oem-badge">${c.oem}</span> ${c.dm?'<span class="pill red" style="margin-left:4px">DM</span>':''}</div><span class="dot ${c.h}"></span></div>
   <div class="kv"><span class="k">Plan</span><span class="v">${c.plan}</span></div>
   <div class="kv"><span class="k">MRR</span><span class="v cy">${money(c.mrr)}</span></div>
   <div class="kv"><span class="k">Attributed YTD</span><span class="v">${money(c.rev)}</span></div>
   <div class="bar" style="--accent:${c.h==='red'?'var(--red)':c.h==='gold'?'var(--gold)':'var(--green)'};margin-top:11px"><i style="width:${Math.min(100,c.rev/2500)}%"></i></div>
   <div style="font-size:10px;color:var(--mut);margin-top:9px">Client since ${c.since}</div></div></div>`).join('')}</div>`;},
 billing(){return head('Billing & Plans','4 plan tiers · '+money(totalMRR)+'/mo billed · next run Jun 1',`<button class="btn ghost">Manage plans</button>`)+
  `<div class="two" style="margin-bottom:16px">${kpi('Billed Monthly',money(totalMRR),'<span class="mut">8 active subscriptions</span>',null,'var(--navy)')}${kpi('Direct Mail Add-on Rev',money(dmClients*1300),`<span class="rd">${dmClients} rooftops</span>`,null,'var(--red)')}</div>
  <div class="card" style="margin-bottom:16px"><div class="card-head"><h3>Plan Tiers</h3></div>
   <table><thead><tr><th>Plan</th><th>Price/mo</th><th>Seats</th><th>Includes</th><th>Clients</th><th>MRR</th></tr></thead><tbody>
   ${PLANS.map(p=>`<tr><td><span class="name">${p.n}</span> ${p.n.includes('Direct')?'<span class="pill red">add-on</span>':''}</td><td class="mono-num cy">${money(p.price)}</td><td>${p.seats}</td><td class="mut">${p.feat}</td><td class="mono-num">${p.clients}</td><td class="mono-num">${money(p.price*p.clients)}</td></tr>`).join('')}</tbody></table></div>
  <div class="card"><div class="card-head"><h3>Payment plans on file</h3><span class="meta">auto-charge · Stripe</span></div>
   <table><thead><tr><th>Client</th><th>Plan</th><th>Cycle</th><th>Method</th><th>Next charge</th><th>Status</th></tr></thead><tbody>
   ${CLIENTS.map(c=>`<tr><td><span class="name">${c.n}</span></td><td>${c.plan}</td><td>${c.cycle}</td><td class="mut">${c.method}</td><td>Jun 1, 2026</td><td>${c.h==='red'?'<span class="pill red">Past due</span>':'<span class="pill green">Active</span>'}</td></tr>`).join('')}</tbody></table></div>`;},
 orders(){return head('Orders','Add-ons, onboarding, seat changes & direct-mail print runs',`<button class="btn">＋ New Order</button>`)+
  `<div class="three" style="margin-bottom:16px">${kpi('Open Orders','3','<span class="mut">processing / production</span>')}${kpi('Order Value (30d)','$8,750','<span class="delta up">▲ 22%</span>')}${kpi('Avg Fulfillment','1.8 days','<span class="gr">on SLA</span>')}</div>
  <div class="card"><div class="card-head"><h3>Recent Orders</h3><span class="meta">last 30 days</span></div>
   <table><thead><tr><th>Order</th><th>Client</th><th>Item</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead><tbody>
   ${ORDERS.map(o=>{const sc=o.status==='Activated'?'green':o.status.includes('Production')||o.status.includes('Transit')?'navy':'gold';
    return `<tr><td class="cy">${o.id}</td><td><span class="name">${o.client}</span></td><td class="mut2">${o.item} ${o.dm?'<span class="pill red">DM</span>':''}</td><td class="mono-num">${money(o.amt)}</td><td class="mut">${o.date}</td><td><span class="pill ${sc}">${o.status}</span></td></tr>`;}).join('')}</tbody></table></div>`;},
 invoices(){const paid=INVOICES.filter(i=>i.status==='Paid').reduce((s,i)=>s+i.amt,0);
  return head('Invoices','May 2026 cycle · '+INVOICES.length+' invoices · '+money(outAR)+' outstanding',`<button class="btn ghost">Export all</button>`)+
  `<div class="three" style="margin-bottom:16px">${kpi('Collected (May)',money(paid),'<span class="gr">5 paid</span>',null,'var(--green)')}${kpi('Due',money(INVOICES.filter(i=>i.status==='Due').reduce((s,i)=>s+i.amt,0)),'<span class="mut">2 · due May 31</span>',null,'var(--navy)')}${kpi('Overdue',money(INVOICES.filter(i=>i.status==='Overdue').reduce((s,i)=>s+i.amt,0)),'<span class="rd">1 · 15d late</span>',null,'var(--red)')}</div>
  <div class="card"><div class="card-head"><h3>Invoice Register</h3></div>
   <table><thead><tr><th>Invoice #</th><th>Client</th><th>Amount</th><th>Issued</th><th>Due</th><th>Status</th><th></th></tr></thead><tbody>
   ${INVOICES.map(v=>{const sc=v.status==='Paid'?'green':v.status==='Due'?'navy':'red';
    return `<tr><td class="cy">${v.id}</td><td><span class="name">${v.client}</span></td><td class="mono-num">${money(v.amt)}</td><td class="mut">${v.issued}</td><td class="mut">${v.due}</td><td><span class="pill ${sc}">${v.status}</span></td><td>${v.status==='Overdue'?'<button class="mini-btn red">Remind</button>':'<button class="mini-btn">View PDF</button>'}</td></tr>`;}).join('')}</tbody></table></div>`;},
 dm(){return dmPlatform();},
 dataflow(){return dataFlowView();},
 health(){return healthView();},
 compliance(){return complianceView('Platform — all rooftops');},
 integrations(){return integrationsView();}
},
agency:{
 overview(){const rt=CLIENTS.slice(0,6);const grp=rt.reduce((s,c)=>s+c.rev,0);
  return head('Group Overview','Velocity Auto Group &mdash; 6 rooftops doing their thing. Here\'s everyone at a glance.',`<button class="btn ghost">Group report ↓</button>`)+
  `<div class="kpi-strip" style="grid-template-columns:repeat(5,1fr)">
   ${kpi('Group Attributed',moneyK(grp),'<span class="delta up">▲ 14% MoM</span>',sparkline(gen(3,12,90,12),COLORS.teal),'var(--teal)')}
   ${kpi('Rooftops','6','<span class="gr">5 healthy · 1 review</span>')}
   ${kpi('Shared Audiences','24','<span class="mut">8 active</span>')}
   ${kpi('Mail In-Flight','4,210','<span class="rd">3 rooftops</span>',sparkline(gen(7,12,4,1),COLORS.red),'var(--red)')}
   ${kpi('Co-op Remaining','$48.2K','<span class="go">Q2 budget</span>',null,'var(--gold)')}</div>
  <div class="card"><div class="card-head"><h3>Rooftop Performance — this month</h3><span class="meta">ranked by attributed revenue</span></div>
   <table><thead><tr><th>Rooftop</th><th>OEM</th><th>Attributed</th><th>vs LM</th><th>Campaigns</th><th>Direct Mail</th><th>Health</th></tr></thead><tbody>
   ${rt.slice().sort((a,b)=>b.rev-a.rev).map((c,i)=>`<tr class="clickable" onclick="openClient('${c.n.replace(/'/g,"")}')"><td><span class="name">${c.n}</span></td><td><span class="oem-badge">${c.oem}</span></td><td class="mono-num te">${money(Math.round(c.rev/12))}</td><td><span class="delta ${i%4?'up':'dn'}">${i%4?'▲':'▼'} ${5+i*2}%</span></td><td class="mono-num">${3+i}</td><td>${c.dm?'<span class="pill red">'+(820-i*90)+' pc</span>':'<span class="mut">—</span>'}</td><td><span class="dot ${c.h}"></span></td></tr>`).join('')}</tbody></table></div>`;},
 rooftops(){return head('Rooftops','Velocity Auto Group · 6 managed rooftops')+
  `<div class="three">${CLIENTS.slice(0,6).map(c=>`<div class="card" style="cursor:pointer" onclick="openClient('${c.n.replace(/'/g,"")}')"><div class="card-body">
   <div style="display:flex;justify-content:space-between;margin-bottom:12px"><div><div class="name" style="font-size:13px;margin-bottom:5px">${c.n}</div><span class="oem-badge">${c.oem}</span>${c.dm?' <span class="pill red">DM</span>':''}</div><span class="dot ${c.h}"></span></div>
   <div class="kv"><span class="k">Attributed (mo)</span><span class="v te">${money(Math.round(c.rev/12))}</span></div>
   <div class="kv"><span class="k">Active audiences</span><span class="v">${6+ (c.rev%5)}</span></div>
   <div class="kv"><span class="k">Mail in-flight</span><span class="v">${c.dm?(700+(c.rev%400))+' pc':'—'}</span></div></div></div>`).join('')}</div>`;},
 profiles(){return head('Customer Profiles','Search unified profiles across all 6 rooftops · click to open',`<button class="btn ghost">Import list</button>`)+
  `<div class="card"><div class="card-head"><h3>Recent / High-Value Profiles</h3><span class="meta">${SHOPPERS.length} shown · 248,310 total</span></div>
   <table><thead><tr><th>Customer</th><th>Rooftop</th><th>Lifetime Value</th><th>Stage</th><th>Intent</th><th></th></tr></thead><tbody>
   ${SHOPPERS.map((s,i)=>`<tr class="clickable" onclick="openProfile('${s.n}')"><td><span class="name">${s.n}</span></td><td class="mut2">${['Reed Nissan','Toyota of Clermont','Central Florida Ford'][i%3]}</td><td class="mono-num">${s.ltv}</td><td><span class="pill ${s.stage==='Purchase'?'green':s.stage==='Intent'?'navy':'gray'}">${s.stage}</span></td><td class="mono-num ${s.score>75?'gr':'mut2'}" style="font-weight:700">${s.score}</td><td><button class="mini-btn">Open</button></td></tr>`).join('')}</tbody></table></div>`;},
 audiences(){const a=[['Lease maturity · 45 days','12,840','+8%',['Reed','Toyota','Ford']],['SUV intenders · all rooftops','34,210','+12%',['All 6']],['Service defection risk','5,920','-3%',['Toyota','Hyundai']],['Conquest · competitive trade','8,440','+21%',['Reed','Honda']],['Equity · 2024 buyers','19,330','+5%',['All 6']],['Past DM responders','3,180','+14%',['Reed','Ford','Toyota']]];
  return head('Audiences','Built once at group level · pushed to any rooftop',`<button class="btn" onclick="goView('builder')">＋ Build Audience</button>`)+
  `<div class="tag-row"><div class="tag on">All (24)</div><div class="tag">Shared (24)</div><div class="tag">Active (8)</div><div class="tag">Stale (2)</div></div>
  <div class="three">${a.map((x,i)=>`<div class="card"><div class="card-body">
   <div style="display:flex;justify-content:space-between;margin-bottom:10px"><span class="name" style="font-size:12.5px">${x[0]}</span><span class="delta ${x[2][0]==='+'?'up':'dn'}">${x[2]}</span></div>
   <div style="font-size:24px;font-weight:600;color:var(--navy-deep)" class="mono-num">${x[1]}</div>
   <div class="mut" style="font-size:10px;margin:4px 0 10px">profiles · refreshed ${i+1}h ago</div>
   ${sparkline(gen(i+10,14,20,5),COLORS.teal,210,28).replace('class="spark"','')}
   <div style="margin-top:10px;display:flex;gap:5px;flex-wrap:wrap">${x[3].map(r=>`<span class="pill gray">${r}</span>`).join('')}</div></div></div>`).join('')}</div>`;},
 builder(){return builderView('agency');},
 campaigns(){return campaignsView();},
 journeys(){return journeyView('agency');},
 dm(){return dmEngine('agency');},
 coop(){return coopView();},
 reporting(){return groupReportingView();}
},
gm:{
 overview(){return head('Good morning','1,284 people are shopping with you today &mdash; here\'s where your attention is worth the most.')+
  `<div class="kpi-strip" style="grid-template-columns:repeat(6,1fr)">
   ${kpi('Active Shoppers','1,284','<span class="delta up">▲ 9%</span>',sparkline(gen(11,12,80,15),COLORS.navy),'var(--navy)')}
   ${kpi('VDP Views','8,402','<span class="delta up">▲ 12%</span>',sparkline(gen(12,12,70,18),COLORS.teal))}
   ${kpi('Test Drives','42','<span class="delta up">▲ 6</span>',sparkline(gen(13,12,5,2),COLORS.green))}
   ${kpi('Lease Renewals (30d)','118','<span class="go">due soon</span>',sparkline(gen(14,12,12,3),COLORS.gold),'var(--gold)')}
   ${kpi('DM In-Flight','1,200','<span class="rd">in-home ~Jun 2</span>',sparkline(gen(15,12,1,1),COLORS.red),'var(--red)')}
   ${kpi('Attributed (mo)','$212K','<span class="delta up">▲ 18%</span>',sparkline(gen(16,12,18,4),COLORS.green))}</div>
  <div class="split64">
   <div class="card"><div class="card-head"><h3>Live Event Stream</h3><span class="meta"><span class="dot green"></span> live · pause on hover</span></div><div class="stream" id="gmStream"><div id="gmStreamInner"></div></div></div>
   <div class="card"><div class="card-head"><h3>What needs attention</h3><span class="meta">4 actions</span></div>
    ${att('var(--red)','73 high-intent shoppers idle 48h+','Lease-maturity scores >70, no outreach logged. Route to BDC or trigger a journey.',['Launch journey|solid','Assign reps|'])}
    ${att('var(--gold)','Direct-mail batch ready to approve','1,200 lease-maturity postcards queued for the Iridesse press. 48h SLA · needs GM sign-off.',['Review & approve|solid'])}
    ${att('var(--navy)','14 service customers in strong equity','In service this week with positive equity. Prime upgrade conversations.',['Open list|'])}
    ${att('var(--green)','3 new Google reviews · all 5★','2 reviewers matched to CDP profiles. Draft thank-you responses ready.',['Review|'])}
   </div></div>`;},
 shoppers(){return head('Live Shoppers','In-market profiles ranked by intent · real-time · click to open profile')+
  `<div class="card"><div class="card-head"><h3>Active Shopper Profiles</h3><span class="meta">1,284 active · top 8</span></div>
   <table><thead><tr><th>Shopper</th><th>Watching</th><th>Stage</th><th>Intent</th><th>Channel</th><th>Last Touch</th><th></th></tr></thead><tbody>
   ${SHOPPERS.map(s=>`<tr class="clickable" onclick="openProfile('${s.n}')"><td class="name">${s.n}</td><td>${s.v}</td><td><span class="pill ${s.stage==='Purchase'?'green':s.stage==='Intent'?'navy':'gray'}">${s.stage}</span></td><td class="mono-num ${s.score>75?'gr':s.score>55?'go':'mut2'}" style="font-weight:700">${s.score}</td><td>${s.ch==='Direct Mail'?'<span class="rd">'+s.ch+'</span>':s.ch}</td><td class="mut">${s.tm}</td><td><button class="mini-btn solid">Outreach</button></td></tr>`).join('')}</tbody></table></div>`;},
 attention(){return head('Needs Attention','Prioritized actions for Reed Nissan · today')+
  `<div class="card">
   ${att('var(--red)','73 high-intent shoppers idle 48h+','Lease-maturity >70, no outreach logged.',['Launch journey|solid','Assign reps|'])}
   ${att('var(--gold)','1,200 direct-mail postcards await approval','Lease-maturity batch · 48h SLA to press.',['Review & approve|solid'])}
   ${att('var(--navy)','14 service customers in strong equity','Prime upgrade conversations this week.',['Open list|'])}
   ${att('var(--green)','3 new 5★ reviews to respond to','2 matched to CDP profiles.',['Review|'])}
   ${att('var(--gold)','9 abandoned credit applications','Restart the finance flow via SMS.',['Restart flow|solid','Dismiss|'])}
  </div>`;},
 builder(){return builderView('gm');},
 svc2sales(){return head('Service → Sales Bridge','The uniquely automotive pipeline · turning the service lane into the showroom')+
  `<div class="three" style="margin-bottom:16px">${kpi('In Equity Position','284','<span class="gr">service customers</span>',null,'var(--green)')}${kpi('Equity Offers Made','96','<span class="delta up">▲ 31%</span>')}${kpi('Bridged to Sales','38','<span class="go">$642K pipeline</span>',null,'var(--gold)')}</div>
  <div class="card"><div class="card-head"><h3>Service-to-Sales Funnel</h3><span class="meta">last 30 days</span></div><div class="card-body">
   ${[['Service appointment booked',412,100],['Service visit completed',356,86],['Equity offer presented',284,69],['Sales appointment booked',96,23],['Trade & repurchase',38,9]].map(f=>`<div class="funnel-row"><div class="fr-label">${f[0]}</div><div class="funnel-bar"><i style="width:${f[2]}%">${f[1]}</i></div><div class="fr-conv">${f[2]}%</div></div>`).join('')}</div></div>`;},
 journeys(){return journeyView('gm');},
 dm(){return dmEngine('gm');},
 predictive(){const t=[['<b>327 customers</b> are likely to lease-mature in the next 45 days','91%'],['<b>148 owners</b> show high service-defection risk this quarter','84%'],['<b>512 customers</b> hold positive equity in their current vehicle','88%'],['<b>96 households</b> show strong second-vehicle propensity','76%'],['<b>203 Rogue owners</b> are likely Pathfinder cross-sells','79%'],['<b>64 customers</b> show elevated churn risk — act now','82%']];
  return head('Predictive Insights','Data-driven forecasts for Reed Nissan · powered by the Agentic CRM')+
  `<div class="three">${t.map((x,i)=>`<div class="pred-tile"><div class="pt-pred">${x[0]}</div>${sparkline(gen(i+20,16,18,6),COLORS.teal,230,30).replace('class="spark"','')}<div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px"><span class="pred-conf">${x[1]} confidence</span><button class="mini-btn solid">Build campaign</button></div></div>`).join('')}</div>`;},
 reputation(){return reputationView();},
 compliance(){return complianceView('Reed Nissan — Orlando');},
 team(){return teamView();}
},
staff:{
 overview(){return head('Morning, Jordan','Here\'s a friendly plan for your day &mdash; six things, nothing scary.')+
  `<div class="kpi-strip" style="grid-template-columns:repeat(4,1fr)">${kpi('My Active Shoppers','38','<span class="delta up">▲ 4 new</span>',null,'var(--green)')}${kpi('Tasks Due Today','6','<span class="go">2 overdue</span>',null,'var(--gold)')}${kpi('Appointments','3','<span class="mut">today</span>')}${kpi('My MTD Units','9','<span class="delta up">goal 12</span>')}</div>
  <div class="split64">
   <div class="card"><div class="card-head"><h3>Today's Worklist</h3><span class="meta">prioritized for you</span></div>
    ${att('var(--red)','Call Jenna K. — intent 91','Watching 2025 Frontier · finance pre-approved · prefers phone.',['Call now|solid','Snooze|'])}
    ${att('var(--gold)','Text Maria T. about Pathfinder','Viewed VDP 4× today · prefers SMS · trade-in est $18,400.',['Send SMS|solid','Snooze|'])}
    ${att('var(--navy)','Follow up: Greg L. test drive','Drove Titan Sat · no decision logged · equity offer ready.',['Log + follow|solid'])}
    ${att('var(--green)','Mail piece landed — Tom W.','Lease-maturity postcard in-home today · call to convert.',['Call|solid'])}
   </div>
   <div class="card"><div class="card-head"><h3>My Hot Shoppers</h3><span class="meta">top intent</span></div>
    ${SHOPPERS.filter(s=>s.score>=69).sort((a,b)=>b.score-a.score).map(s=>`<div style="display:flex;align-items:center;gap:11px;padding:11px 16px;border-bottom:1px solid var(--line);cursor:pointer" onclick="openProfile('${s.n}')"><div class="av" style="width:28px;height:28px;border-radius:6px;display:grid;place-items:center;background:rgba(255,198,41,.13);color:var(--green);font-weight:700;font-size:10px">${initials(s.n)}</div><div style="flex:1"><div class="name">${s.n}</div><div class="mut" style="font-size:10px">${s.v} · ${s.ch==='Direct Mail'?'<span class="rd">'+s.ch+'</span>':s.ch}</div></div><div class="gr mono-num" style="font-weight:700;font-size:15px">${s.score}</div></div>`).join('')}
   </div></div>`;},
 myshoppers(){return head('My Shoppers','Your assigned book · 38 active shoppers · click to open')+
  `<div class="card"><div class="card-head"><h3>Assigned to you</h3></div>
   <table><thead><tr><th>Shopper</th><th>Watching</th><th>Stage</th><th>Intent</th><th>Channel</th><th></th></tr></thead><tbody>
   ${SHOPPERS.map(s=>`<tr class="clickable" onclick="openProfile('${s.n}')"><td class="name">${s.n}</td><td>${s.v}</td><td><span class="pill ${s.stage==='Purchase'?'green':s.stage==='Intent'?'navy':'gray'}">${s.stage}</span></td><td class="mono-num ${s.score>75?'gr':'mut2'}" style="font-weight:700">${s.score}</td><td>${s.ch==='Direct Mail'?'<span class="rd">'+s.ch+'</span>':s.ch}</td><td><button class="mini-btn solid">Outreach</button></td></tr>`).join('')}</tbody></table></div>`;},
 match(){return head('Inventory → Shopper Match','In-stock VINs matched to your most likely buyers')+
  `<div class="two">
   <div class="card"><div class="card-head"><h3>On the Lot</h3><span class="meta">select a VIN</span></div>
    ${[['2025 Pathfinder SL','42 days','$41,990',1],['2024 Rogue SV','18 days','$31,450',0],['2025 Frontier PRO-4X','7 days','$44,200',0],['2024 Murano Platinum','61 days','$43,800',0]].map(v=>`<div style="display:flex;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--line);cursor:pointer;${v[3]?'background:rgba(0,0,0,.06)':''}"><div><div class="name">${v[0]}</div><div class="mut" style="font-size:10px">${v[1]} on lot</div></div><div class="cy mono-num">${v[2]}</div></div>`).join('')}</div>
   <div class="card"><div class="card-head"><h3>Best Matches — 2025 Pathfinder SL</h3><span class="meta">ranked by buy likelihood</span></div>
    ${[['Maria T.',94,'Viewed this VDP 4× · SMS'],['Priya S.',81,'Pathfinder research · opens'],['David R.',68,'SUV intender · browsing'],['Aisha B.',61,'Upgrade from Kicks · in equity']].map(m=>`<div style="display:flex;align-items:center;gap:11px;padding:12px 16px;border-bottom:1px solid var(--line)"><div class="te mono-num" style="font-weight:700;font-size:16px;width:34px">${m[1]}</div><div style="flex:1;cursor:pointer" onclick="openProfile('${m[0]}')"><div class="name">${m[0]}</div><div class="mut" style="font-size:10px">${m[2]}</div></div><button class="mini-btn solid">Trigger outreach</button></div>`).join('')}</div></div>`;},
 tasks(){return head('Tasks & Follow-ups','6 open · prioritized')+
  `<div class="card"><div class="card-head"><h3>All Tasks</h3></div>
   <table><thead><tr><th>Task</th><th>Shopper</th><th>Channel</th><th>Due</th><th>Priority</th><th></th></tr></thead><tbody>
   ${[['Call — finance ready','Jenna K.','Phone','Now','red','Urgent'],['Text re: Pathfinder','Maria T.','SMS','Today','gold','High'],['Test-drive follow-up','Greg L.','Phone','Today','gold','High'],['Mail-landed call','Tom W.','Phone','Today','navy','Today'],['Send equity offer','Carlos M.','Email','Tomorrow','gray','Normal'],['Re-engage','Aisha B.','SMS','Jun 2','gray','Normal']].map(t=>`<tr><td class="name">${t[0]}</td><td class="clickable" onclick="openProfile('${t[1]}')" style="cursor:pointer">${t[1]}</td><td>${t[2]}</td><td class="mut">${t[3]}</td><td><span class="pill ${t[4]}">${t[5]}</span></td><td><button class="mini-btn solid">Do</button></td></tr>`).join('')}</tbody></table></div>`;},
 dm(){return head('Send Direct Mail','Trigger a personalized piece — prints & mails automatically, no design tools needed')+
  `<div class="two"><div class="card"><div class="card-head"><h3>Quick Send</h3></div><div class="card-body">
   <div class="mut" style="font-size:11px;margin-bottom:14px">Pick a shopper and template. The piece routes through the Iridesse press and USPS automatically.</div>
   ${[['Tom W.','Lease-maturity postcard'],['Carlos M.','Trade-in offer trifold'],['Aisha B.','Welcome / upgrade self-mailer']].map(s=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--line)"><div><div class="name">${s[0]}</div><div class="mut" style="font-size:10px">${s[1]}</div></div><button class="mini-btn red">Queue piece</button></div>`).join('')}</div></div>
   <div class="card"><div class="card-head"><h3>My Pieces In-Flight</h3><span class="meta"><span class="dot red"></span> 3 tracking</span></div>
    <table><thead><tr><th>Recipient</th><th>Stage</th><th>In-home</th></tr></thead><tbody>
    ${[['Tom W.','In-home today','Today'],['Lisa M.','USPS transit','Jun 2'],['Raul G.','Print queue','Jun 4']].map(p=>`<tr><td class="name">${p[0]}</td><td><span class="pill red">${p[1]}</span></td><td class="mut">${p[2]}</td></tr>`).join('')}</tbody></table></div></div>`;}
}
};

/* ============ COMPONENT BUILDERS ============ */
function att(color,title,sub,ctas){return `<div class="att"><div class="pri" style="background:${color}"></div><div class="at-body"><div class="at-title">${title}</div><div class="at-sub">${sub}</div><div class="at-cta">${ctas.map(c=>{const[l,k]=c.split('|');return `<button class="mini-btn ${k}">${l}</button>`;}).join('')}</div></div></div>`;}

function profileView(name){
 const s=SHOPPERS.find(x=>x.n===name)||{n:name,v:'2024 Pathfinder',stage:'Intent',score:73,ch:'SMS',ltv:'$34,200'};
 const stages=['Awareness','Research','Intent','Purchase','Retention','Advocacy'];
 const ci=stages.indexOf(s.stage);
 const ident=[['✉','Email','maria.t@email.com','Declared · 100%'],['☎','Phone','(407) •••-2841','Declared · 100%'],['🚗','Owned VIN','1N4•••••PC847','DMS · 100%'],['▦','Dealer DMS ID','RN-88241','Deterministic · 99%'],['◎','Google Ads ID','GA-•••-7741','Probabilistic · 86%'],['◷','Web cookie','ck-•••-2290','Deterministic · 94%']];
 const tl=[['SMS',COLORS.navy,'Replied to lease-maturity text','11s ago'],['Direct Mail',COLORS.red,'Postcard in-home — IMb confirmed','Today'],['Web',COLORS.teal,'Viewed 2024 Pathfinder VDP (4×)','Today'],['Email',COLORS.teal,'Opened "Your renewal options"','2d ago'],['Service',COLORS.green,'Completed 30k service','3w ago'],['Phone',COLORS.green,'Inbound call — sales','1mo ago']];
 return `<div class="back-link" onclick="backFromProfile()">← Back</div>`+
  head(s.n,`Unified profile · ${ROLES[state.role].dealer.split(' · ')[0]}`,`<div style="display:flex;gap:8px"><button class="btn ghost">Start journey</button><button class="btn red">Send direct mail</button></div>`)+
  `<div class="card" style="margin-bottom:14px"><div class="card-body" style="display:flex;flex-wrap:wrap;gap:24px;align-items:center">
    <div style="display:flex;align-items:center;gap:14px"><div style="width:54px;height:54px;border-radius:10px;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:700;font-size:18px">${initials(s.n)}</div>
     <div><div style="font-size:10px;color:var(--mut)" class="up">Lifetime value</div><div style="font-size:22px;font-weight:700;color:var(--navy-deep)">${s.ltv}</div></div></div>
    <div style="flex:1;min-width:260px"><div style="font-size:10px;color:var(--mut);margin-bottom:8px" class="up">Funnel stage</div>
     <div class="stepper">${stages.map((st,i)=>`<div class="step ${i<ci?'done':i===ci?'cur':''}"><span class="s-dot"></span>${st}</div>${i<stages.length-1?'<span class="s-line"></span>':''}`).join('')}</div></div>
    <div style="text-align:center"><div style="font-size:10px;color:var(--mut);margin-bottom:6px" class="up">Identity confidence</div><div class="gauge" style="width:84px;height:84px">${gaugeSvg(96,COLORS.navy).replace('width="104" height="104"','width="84" height="84"')}<div class="gval" style="font-size:17px">96<small>MATCH</small></div></div></div>
   </div></div>
  <div class="three">
   <div class="card"><div class="card-head"><h3>Identity — merged sources</h3><span class="meta">6 linked</span></div><div class="card-body">
    ${ident.map(p=>`<div class="prov"><div class="pv-ic">${p[0]}</div><div><div class="name" style="font-size:11.5px">${p[1]}</div><div class="mut" style="font-size:10px">${p[2]}</div></div><div class="pv-meta"><span class="pill ${p[3].includes('Prob')?'gold':'navy'}" style="font-size:9px">${p[3]}</span></div></div>`).join('')}
   </div></div>
   <div class="card"><div class="card-head"><h3>Behavioral timeline</h3><span class="meta">all channels</span></div><div class="card-body">
    ${tl.map((e,i)=>`<div class="tl-evt"><div class="tl-rail"><span class="td" style="background:${e[1]}"></span>${i<tl.length-1?'<span class="tline"></span>':''}</div><div class="tl-body"><b>${e[0]==='Direct Mail'?'<span class="rd">Direct Mail</span>':e[0]}</b> — ${e[2]}<div class="tm">${e[3]}</div></div></div>`).join('')}
   </div></div>
   <div class="card"><div class="card-head"><h3>Predictive panel</h3><span class="meta te">Agentic CRM</span></div><div class="card-body">
    <div style="text-align:center;padding:6px 0 14px"><div style="font-size:34px;font-weight:700;color:var(--teal)">${s.score}%</div><div class="mut" style="font-size:11px">likely to buy within 30 days</div></div>
    <div class="kv"><span class="k">Preferred channel</span><span class="v">${s.ch}</span></div>
    <div class="kv"><span class="k">Est. trade-in value</span><span class="v">$18,400</span></div>
    <div class="kv"><span class="k">Best contact window</span><span class="v">Eves 6–8pm</span></div>
    <div class="kv"><span class="k">Next best action</span><span class="v te">Send SMS offer</span></div>
    <button class="btn red" style="width:100%;justify-content:center;margin-top:14px">✉ Queue direct-mail piece</button>
   </div></div>
  </div>`;
}

function builderView(scope){
 if(!state.builder)state.builder=[{cat:'Web Behavior',txt:'Has visited a VDP for an SUV in the last 14 days'},{cat:'Vehicle Ownership',txt:'Currently leases a vehicle maturing within 90 days'}];
 const base=42000;const size=Math.max(800,Math.round(base*Math.pow(0.34,state.builder.length)));
 const cats=['Demographics','Vehicle Ownership','Service History','Web Behavior','Ad Engagement','Direct Mail Response'];
 return head('Audience Builder','No-code segment builder · reads like a sentence, not SQL',`<button class="btn" id="saveAud">Save audience</button>`)+
 `<div class="bld">
   <div><div class="card-head" style="padding:0 0 10px;border:none"><h3>Attribute Library</h3></div>
    ${cats.map(c=>`<div class="attr" data-cat="${c}">${c}<span class="mut">＋</span></div>`).join('')}
    <div class="mut" style="font-size:10px;margin-top:8px;line-height:1.5">Click an attribute to add a condition block.</div></div>
   <div><div class="card-head" style="padding:0 0 10px;border:none"><h3>Conditions</h3><span class="meta">match ALL</span></div>
    <div id="condList">${state.builder.map((b,i)=>`${i>0?'<div class="andpill"><span>AND</span></div>':''}<div class="cond"><span class="pill navy">${b.cat}</span><span style="color:var(--navy-deep)">${b.txt}</span><span class="cx" onclick="removeCond(${i})">✕</span></div>`).join('')}</div></div>
   <div><div class="card" style="position:sticky;top:0"><div class="card-head"><h3>Audience</h3></div><div class="card-body">
    <div style="font-size:30px;font-weight:700;color:var(--navy-deep)" class="mono-num" id="audSize">${size.toLocaleString()}</div>
    <div class="mut" style="font-size:10px;margin-bottom:14px">reachable profiles</div>
    <div class="dw-sec" style="margin-top:0">Channel reachability</div>
    ${[['Email',88,'teal'],['SMS',64,'navy'],['Addressable Mail',97,'red']].map(r=>`<div style="margin-bottom:9px"><div style="display:flex;justify-content:space-between;font-size:10.5px;margin-bottom:4px"><span class="mut2">${r[0]}</span><span class="mono-num">${r[1]}%</span></div><div class="bar" style="--accent:var(--${r[2]})"><i style="width:${r[1]}%"></i></div></div>`).join('')}
    <button class="btn" style="width:100%;justify-content:center;margin-top:12px" onclick="goView('${scope==='gm'?'journeys':'campaigns'}')">Activate →</button>
   </div></div></div>
  </div>`;
}
function wireBuilder(){
 document.querySelectorAll('.attr').forEach(a=>a.onclick=()=>{
  const cat=a.dataset.cat;const samples={'Demographics':'Household income above $90k','Vehicle Ownership':'Owns a vehicle 4+ years old','Service History':'Has a service visit in the last 6 months','Web Behavior':'Viewed 3+ VDPs this week','Ad Engagement':'Clicked a paid-social ad in 30 days','Direct Mail Response':'Responded to a prior mail piece'};
  state.builder.push({cat,txt:samples[cat]});renderMain();toast(cat+' condition added');});
 const sv=document.getElementById('saveAud');if(sv)sv.onclick=()=>toast('Audience saved & shared');
}
window.removeCond=function(i){state.builder.splice(i,1);renderMain();};

function journeyView(scope){
 return head('Journey Orchestration','Drag nodes onto the canvas · left-to-right flow with live counts',`<button class="btn">＋ New Journey</button>`)+
 `<div class="jpalette">${['Entry trigger','Wait','Branch (if/else)','Send Email','Send SMS','Send Direct Mail','Website Personalization','Serve Ad','Exit'].map(n=>`<div class="jpal">${n==='Send Direct Mail'?'<span class="rd">✉ '+n+'</span>':n}</div>`).join('')}</div>
  <div class="canvas"><div class="jrow">
   ${jn('Entry','Lease maturity ≤90d','1,284','gold')}${jc()}
   ${jn('Wait','3 days','842','')}${jc()}
   ${jn('Branch','Opened email?','—','')}${jc()}
   ${jn('Send SMS','Yes path','512','')}${jc()}
   ${jn('Send Direct Mail','No path','330','dm')}${jc()}
   ${jn('Exit','Converted','148','')}
  </div></div>
  <div class="mut" style="font-size:11px;margin-top:12px">Selected node opens a config drawer in the live product. Counts show profiles currently sitting at each step.</div>`;
}
function jn(t,c,n,cls){return `<div class="jnode ${cls}"><div class="jn-t">${t}</div><div class="jn-c">${c}</div>${n!=='—'?`<div class="jn-c mono-num" style="color:var(--navy);font-weight:600">● ${n}</div>`:''}</div>`;}
function jc(){return '<div class="jconn"></div>';}

function campaignsView(){
 return head('Campaigns','Cross-channel campaigns running across the group')+
 `<div class="card" style="margin-bottom:14px"><div class="card-head"><h3>Spring Lease Pull-Ahead</h3><span><span class="pill green">Active</span> <span class="meta">Apr 15 – Jun 30 · 4 rooftops</span></span></div><div class="card-body">
   <div class="pipe">${[['Email','21,400','38% open','142','teal'],['SMS','12,800','61% read','98','navy'],['Direct Mail','3,200 pc','—','64','red'],['Display','410K imp','1.9% CTR','77','gold'],['Paid Social','280K imp','2.4% CTR','51','teal']].map(c=>`<div class="pipe-stage ${c[4]==='red'?'rd':''}"><div class="ps-name">${c[0]}</div><div class="ps-count mono-num" style="font-size:16px">${c[1]}</div><div class="ps-unit">${c[2]}</div><div style="margin-top:8px;font-size:11px" class="gr">${c[3]} conv</div></div>`).join('')}</div>
   <div class="two" style="margin-top:16px"><div class="kv" style="border:none"><span class="k">Attributed revenue</span><span class="gr mono-num" style="font-size:16px">$284,100</span></div><div class="kv" style="border:none"><span class="k">Incrementality lift vs control</span><span class="te mono-num" style="font-size:16px">+23.4%</span></div></div>
  </div></div>
  <div class="card"><div class="card-head"><h3>All Campaigns</h3></div><table><thead><tr><th>Campaign</th><th>Rooftops</th><th>Channels</th><th>Status</th><th>Attributed</th></tr></thead><tbody>
   ${[['Spring Lease Pull-Ahead',4,5,'Active','$284,100'],['Service Reactivation',6,3,'Active','$96,400'],['Conquest — Honda SUV',2,4,'Active','$61,200'],['Memorial Day Mailer',3,2,'Ended','$148,900'],['2024 Equity Outreach',6,4,'Paused','$0']].map(c=>`<tr><td class="name">${c[0]}</td><td class="mono-num">${c[1]}</td><td class="mono-num">${c[2]}</td><td><span class="pill ${c[3]==='Active'?'green':c[3]==='Paused'?'gold':'gray'}">${c[3]}</span></td><td class="mono-num gr">${c[4]}</td></tr>`).join('')}</tbody></table></div>`;
}
function coopView(){
 return head('OEM Co-op','Co-op budget, eligible spend & reimbursement packages by OEM')+
 `<div class="three" style="margin-bottom:16px">${kpi('Allocated Q2','$120K','<span class="mut">4 OEMs</span>',null,'var(--gold)')}${kpi('Spent','$71.8K','<span class="delta up">60% utilized</span>')}${kpi('Remaining','$48.2K','<span class="go">submit by Jun 30</span>',null,'var(--gold)')}</div>
  <div class="card"><div class="card-head"><h3>By Program</h3></div><table><thead><tr><th>OEM</th><th>Program</th><th>Allocated</th><th>Spent</th><th>Eligible Tactics</th><th>Disclosures</th><th></th></tr></thead><tbody>
   ${[['Nissan','Tier 2 Digital','$42K','$28.4K','Display, Social, DM','Complete','gr'],['Toyota','Regional Co-op','$36K','$22.1K','Email, DM, Search','1 missing','go'],['Ford','FordDirect','$28K','$16.8K','Display, Search','Complete','gr'],['Honda','iN Market','$14K','$4.5K','Social, DM','Complete','gr']].map(r=>`<tr><td><span class="oem-badge">${r[0]}</span></td><td class="name">${r[1]}</td><td class="mono-num">${r[2]}</td><td class="mono-num go">${r[3]}</td><td class="mut">${r[4]}</td><td class="${r[6]}">${r[5]==='Complete'?'✓ Complete':'⚠ '+r[5]}</td><td><button class="mini-btn solid">Export package</button></td></tr>`).join('')}</tbody></table></div>`;
}
function groupReportingView(){
 return head('Group Reporting','Velocity Auto Group · May 2026 executive summary',`<button class="btn ghost">Export PDF ↓</button>`)+
 `<div class="card" style="margin-bottom:14px"><div class="card-body"><div style="font-size:15px;color:var(--navy-deep);font-weight:600;line-height:1.5">Attributed <span class="te">$863K</span> in revenue across 5 channels this month — <span class="gr">up 14% MoM</span> across 6 rooftops.</div></div></div>
  <div class="two"><div class="card"><div class="card-head"><h3>Channel Mix</h3></div><table><tbody>
   ${[['Email','$214K','25%','teal'],['SMS','$176K','20%','navy'],['Direct Mail','$198K','23%','red'],['Display','$142K','16%','gold'],['Paid Social','$133K','16%','teal']].map(c=>`<tr><td><span class="dot ${c[3]}"></span> ${c[0]}</td><td class="mono-num name">${c[1]}</td><td class="mono-num mut">${c[2]}</td></tr>`).join('')}</tbody></table></div>
   <div class="card"><div class="card-head"><h3>Top Rooftops by Attributed Rev</h3></div><table><tbody>
   ${CLIENTS.slice(0,6).slice().sort((a,b)=>b.rev-a.rev).map(c=>`<tr class="clickable" onclick="openClient('${c.n.replace(/'/g,"")}')"><td class="name">${c.n}</td><td><span class="oem-badge">${c.oem}</span></td><td class="mono-num te">${money(Math.round(c.rev/12))}</td></tr>`).join('')}</tbody></table></div></div>`;
}

function dmEngine(scope){
 const stages=[['Design','38','jobs'],['Print Queue','12','jobs'],['Iridesse Press','4','printing'],['Pitney Bowes','820','pieces'],['FP Optimizer','1,140','pieces'],['USPS Induction','2,400','pieces'],['In-Home','—','~Jun 2']];
 return head('Direct Mail Engine','<span class="rd">Auto CDP exclusive</span> · automated print-to-mailbox · 48h SLA',`<button class="btn red">＋ New Mailer</button>`)+
 `<div class="kpi-strip" style="grid-template-columns:repeat(4,1fr)">${kpi('In Production','832','<span class="rd">pieces</span>',null,'var(--red)')}${kpi('In Transit (USPS)','2,400','<span class="mut">IMb tracked</span>',null,'var(--red)')}${kpi('Est. In-Home','Jun 1–3','<span class="mut">range</span>')}${kpi('Attributed (30d)','$88,400','<span class="delta up">▲ 27%</span>',null,'var(--green)')}</div>
  <div class="card" style="margin-bottom:16px"><div class="card-head"><h3>Live Production Pipeline</h3><span class="meta"><span class="dot red"></span> 48h SLA · 31h remaining</span></div><div class="card-body"><div class="pipe">${stages.map((s,i)=>`<div class="pipe-stage ${i<6?'rd':''}">${i<6?'<span class="arrow-r">▶</span>':''}<div class="ps-name">${s[0]}</div><div class="ps-count mono-num">${s[1]}</div><div class="ps-unit">${s[2]}</div></div>`).join('')}</div></div></div>
  <div class="two">
   <div class="card"><div class="card-head"><h3>Iridesse Press Status</h3><span class="meta"><span class="dot green"></span> online</span></div><div class="card-body">
    <div class="kv"><span class="k">Uptime (30d)</span><span class="v gr">99.6%</span></div><div class="kv"><span class="k">Current job</span><span class="v">Lease-maturity · 1,200 pc</span></div>
    <div class="dw-sec">Ink levels</div>${[['Cyan',82,'teal'],['Magenta',64,'red'],['Yellow',71,'gold'],['Black',88,'navy'],['Clear gloss',46,'teal']].map(k=>`<div style="margin-bottom:9px"><div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px"><span class="mut2">${k[0]}</span><span class="mono-num">${k[1]}%</span></div><div class="bar" style="--accent:var(--${k[2]})"><i style="width:${k[1]}%"></i></div></div>`).join('')}</div></div>
   <div class="card"><div class="card-head"><h3>Piece-Level Tracking</h3><span class="meta">IMb scan events</span></div><table><thead><tr><th>Recipient</th><th>Var</th><th>Stage</th><th>In-Home</th><th>Response</th></tr></thead><tbody>
    ${[['Maria T.','A','In-home','Today','<span class="gr">Web visit</span>'],['Tom W.','A','In-home','Today','<span class="gr">Called</span>'],['Lisa M.','B','USPS transit','Jun 2','—'],['Raul G.','A','Print queue','Jun 4','—'],['Dana F.','C','USPS transit','Jun 2','—'],['Omar H.','B','In-home','Yesterday','<span class="go">Pending</span>']].map(p=>`<tr><td class="name">${p[0]}</td><td><span class="pill gray">${p[1]}</span></td><td><span class="pill red">${p[2]}</span></td><td class="mut">${p[3]}</td><td>${p[4]}</td></tr>`).join('')}</tbody></table></div></div>`;
}
function dmPlatform(){
 return head('Direct Mail — Platform','<span class="rd">Auto CDP exclusive</span> · mail volume & revenue across all rooftops')+
 `<div class="kpi-strip" style="grid-template-columns:repeat(4,1fr)">${kpi('Pieces / mo (all)','14,820',`<span class="rd">${dmClients} rooftops</span>`,sparkline(gen(31,12,11,3),COLORS.red),'var(--red)')}${kpi('Press Utilization','78%','<span class="gr">healthy</span>')}${kpi('DM Add-on MRR',money(dmClients*1300),'<span class="delta up">▲ 1 new</span>',null,'var(--red)')}${kpi('Attributed (30d)','$412K','<span class="delta up">▲ 24%</span>',null,'var(--green)')}</div>
  <div class="card"><div class="card-head"><h3>Mail Volume by Client</h3><span class="meta">this month</span></div><table><thead><tr><th>Client</th><th>Plan</th><th>Pieces</th><th>Response</th><th>Attributed</th><th>SLA</th></tr></thead><tbody>
   ${CLIENTS.filter(c=>c.dm).map((c,i)=>`<tr><td class="name">${c.n}</td><td><span class="pill red">+DM</span></td><td class="mono-num">${(4200-i*700).toLocaleString()}</td><td class="mono-num gr">${(8.2-i*0.6).toFixed(1)}%</td><td class="mono-num">${money(148000-i*22000)}</td><td><span class="pill green">On SLA</span></td></tr>`).join('')}
   ${CLIENTS.filter(c=>!c.dm).slice(0,2).map(c=>`<tr style="opacity:.55"><td class="name">${c.n}</td><td><span class="pill gray">no DM</span></td><td colspan="3" class="mut">Direct Mail not active — upsell (+$1,300/mo)</td><td><button class="mini-btn red">Offer DM</button></td></tr>`).join('')}</tbody></table></div>`;
}
function dataFlowView(){
 const C=COLORS;
 const src=['Dealer DMS','OEM CRM','Website pixel','Google Ads','Meta Ads','Service Lane'];
 const dst=[['Email',C.teal],['SMS',C.navy],['Direct Mail',C.red],['Digital Ads',C.gold],['Website',C.teal]];
 const sy=i=>56+i*48, dy=i=>70+i*54;
 let paths='',dots='';
 src.forEach((s,i)=>{const id='ps'+i;paths+=`<path id="${id}" d="M186 ${sy(i)} C 300 ${sy(i)}, 320 200, 410 200" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.4"/>`;dots+=`<circle r="3" fill="${C.navy}"><animateMotion dur="${3+i*0.4}s" repeatCount="indefinite"><mpath href="#${id}"/></animateMotion></circle>`;});
 dst.forEach((d,i)=>{const id='pd'+i;paths+=`<path id="${id}" d="M590 200 C 680 200, 700 ${dy(i)}, 800 ${dy(i)}" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.4"/>`;dots+=`<circle r="3" fill="${d[1]}"><animateMotion dur="${3+i*0.4}s" repeatCount="indefinite"><mpath href="#${id}"/></animateMotion></circle>`;});
 return head('Source → Destination Data Flow','Live ingestion to activation · click a line for schema mapping')+
 `<div class="card"><div class="card-body flow-svg-wrap">
   <svg viewBox="0 0 1000 400" width="100%" style="min-width:760px;font-family:var(--mono)">
    ${paths}${dots}
    ${src.map((s,i)=>`<g><rect x="20" y="${sy(i)-15}" width="166" height="30" rx="5" fill="#fff" stroke="rgba(0,0,0,.18)"/><circle cx="35" cy="${sy(i)}" r="3.5" fill="${C.navy}"/><text x="48" y="${sy(i)+4}" font-size="11" fill="#000000">${s}</text></g>`).join('')}
    <rect x="410" y="150" width="180" height="100" rx="10" fill="#000000"/><text x="500" y="185" text-anchor="middle" font-size="13" font-weight="700" fill="#FFC629">AUTO CDP CORE</text><text x="500" y="206" text-anchor="middle" font-size="10" fill="#C9C9C9">3,418 events/sec</text><text x="500" y="224" text-anchor="middle" font-size="10" fill="#C9C9C9">11,902 profiles unified today</text>
    ${dst.map((d,i)=>`<g><rect x="800" y="${dy(i)-15}" width="170" height="30" rx="5" fill="#fff" stroke="${d[0]==='Direct Mail'?'rgba(0,0,0,.4)':'rgba(0,0,0,.18)'}"/><circle cx="815" cy="${dy(i)}" r="3.5" fill="${d[1]}"/><text x="828" y="${dy(i)+4}" font-size="11" fill="${d[0]==='Direct Mail'?'#000000':'#000000'}" font-weight="${d[0]==='Direct Mail'?'700':'400'}">${d[0]}</text></g>`).join('')}
    <text x="103" y="32" text-anchor="middle" font-size="9" letter-spacing="1" fill="#6E6E6E">SOURCES</text>
    <text x="885" y="46" text-anchor="middle" font-size="9" letter-spacing="1" fill="#6E6E6E">DESTINATIONS</text>
   </svg></div></div>
   <div class="three" style="margin-top:14px">${kpi('Connected Sources','8','<span class="gr">all syncing</span>',null,'var(--navy)')}${kpi('Active Destinations','5','<span class="rd">incl. Direct Mail</span>',null,'var(--red)')}${kpi('Last Sync','&lt; 1 min ago','<span class="gr">real-time</span>',null,'var(--teal)')}</div>`;
}
function healthView(){
 return head('Platform Health','Infrastructure & data quality across all rooftops')+
 `<div class="two" style="margin-bottom:16px">
   <div class="card"><div class="card-head"><h3>Overall Data Health</h3><span class="meta">all clients</span></div><div class="card-body"><div class="gauge-wrap"><div class="gauge">${gaugeSvg(94,COLORS.green)}<div class="gval">94<small>HEALTH</small></div></div><div style="flex:1">${[['Completeness',96,'green'],['Freshness',91,'green'],['Identity Match',89,'gold'],['Validity',97,'green'],['Consistency',93,'green']].map(d=>`<div style="margin-bottom:11px"><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span class="mut2">${d[0]}</span><span class="mono-num">${d[1]}</span></div><div class="bar" style="--accent:var(--${d[2]})"><i style="width:${d[1]}%"></i></div></div>`).join('')}</div></div></div></div>
   <div class="card"><div class="card-head"><h3>Live Throughput</h3><span class="meta">platform-wide</span></div><div class="card-body">${[['Events / sec','3,418','cy'],['Profiles unified today','11,902','cy'],['API uptime (30d)','99.98%','gr'],['Avg query latency','142 ms','gr'],['Active sync connections','64','mut2']].map(r=>`<div class="kv"><span class="k">${r[0]}</span><span class="v ${r[2]} mono-num">${r[1]}</span></div>`).join('')}</div></div></div>
  <div class="card"><div class="card-head"><h3>Rooftop Data Health</h3></div><table><thead><tr><th>Client</th><th>Match Rate</th><th>Freshness</th><th>Open Issues</th><th>Status</th></tr></thead><tbody>
   ${CLIENTS.map((c,i)=>`<tr class="clickable" onclick="openClient('${c.n.replace(/'/g,"")}')"><td class="name">${c.n}</td><td class="mono-num">${88+(i%9)}%</td><td class="mono-num">${i===7?'4.2h':'< 1h'}</td><td>${i===7?'<span class="go">12</span>':i===1?'<span class="go">3</span>':'0'}</td><td><span class="dot ${c.h}"></span></td></tr>`).join('')}</tbody></table></div>`;
}
function integrationsView(){
 const cats=[['DMS / DXP',['CDK Dealership Xperience','Reynolds & Reynolds','Dealertrack','Tekion']],['OEM CRM',['Nissan @retail','Toyota SmartPath','FordDirect','Honda iN']],['Ad Platforms',['Google Ads','Meta Ads','TikTok','The Trade Desk']],['Direct Mail',['Xerox Iridesse Press','Pitney Bowes','FP Mailing Optimizer','USPS IMb']]];
 return head('Integrations','Connectors active across the platform')+
 cats.map(c=>`<div class="card" style="margin-bottom:14px"><div class="card-head"><h3>${c[0]}</h3></div><div class="card-body three">${c[1].map((it,i)=>`<div style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--line);border-radius:5px;padding:9px 11px;font-size:11px"><span><span class="dot ${c[0]==='Direct Mail'?'red':'navy'}" style="margin-right:7px"></span>${it}</span>${i<3?'<span class="pill green">✓</span>':'<button class="mini-btn">Connect</button>'}</div>`).join('')}</div></div>`).join('');
}
function complianceView(scope){
 const cards=[['FTC Advertising Pre-Check','Last scan May 29','Passing','gr','✓'],['TCPA Consent Coverage','94%','of contactable profiles','gr',''],['CAN-SPAM Footer','Compliant','all email templates','gr','✓'],['FTC Safeguards Rule','Ready','annual review Aug','gr','✓'],['ISO 27001','Certified','valid to 2027','gr','✓'],['Data Subject Requests','3 open','SLA 30 days','go','']];
 return head('Compliance & Consent',scope+' · privacy posture & governance')+
 `<div class="card" style="margin-bottom:14px"><div class="card-body" style="display:flex;align-items:center;gap:18px;flex-wrap:wrap"><div class="gauge" style="width:80px;height:80px">${gaugeSvg(92,COLORS.green).replace('width="104" height="104"','width="80" height="80"')}<div class="gval" style="font-size:16px">92<small>SCORE</small></div></div>
   <div><div style="font-size:10px;color:var(--mut)" class="up">Compliance posture</div><div style="font-size:20px;font-weight:700;color:var(--navy-deep)">Strong — 1 item to review</div><div class="mut" style="font-size:11px;margin-top:4px">State privacy coverage active across all operating regions.</div></div>
   <div style="margin-left:auto;display:flex;gap:6px;flex-wrap:wrap">${['CA','VA','CO','CT','UT','TX','FL'].map(s=>`<span class="statebadge">${s} ✓</span>`).join('')}</div></div></div>
  <div class="posture">${cards.map(c=>`<div class="pcard"><div class="pc-top"><div class="pc-name">${c[0]}</div><span class="dot ${c[3]==='go'?'gold':'green'}"></span></div><div class="pc-val">${c[4]?c[4]+' ':''}${c[1]}</div><div class="mut" style="font-size:10.5px">${c[2]}</div><button class="mini-btn" style="margin-top:11px">View audit log</button></div>`).join('')}</div>`;
}
function reputationView(){
 return head('Reputation','Composite review score & communication-failure detection')+
 `<div class="split64">
   <div class="card"><div class="card-head"><h3>Composite Score</h3></div><div class="card-body" style="text-align:center;padding:24px"><div style="font-size:46px;font-weight:700;color:var(--gold)">4.7</div><div class="mut" style="margin:4px 0 16px">★★★★★ · 1,842 reviews</div><div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">${[['Google','4.8'],['DealerRater','4.6'],['Cars.com','4.7'],['Edmunds','4.5'],['Facebook','4.9']].map(p=>`<span class="pill gray">${p[0]} ${p[1]}★</span>`).join('')}</div></div></div>
   <div class="card"><div class="card-head"><h3>Communication-Failure Detector</h3><span class="meta">leading cause of bad reviews</span></div><div class="card-body">
    ${att('var(--red)','7 customers never received a response','Inbound calls/texts with no logged reply in 24h+. Each is a negative-review risk.',[])}
    ${[['Carla D.','Missed callback','2 days'],['Mike T.','Unanswered text','31h'],['Sam P.','Voicemail no reply','2 days']].map(r=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--line);font-size:11.5px"><span class="name">${r[0]}</span><span class="rd">${r[1]}</span><span class="mut">${r[2]}</span><button class="mini-btn red">Resolve</button></div>`).join('')}</div></div>
  </div>`;
}

/* ============ GM TEAM ACCESS ============ */
let TEAM=[
 {n:'Marcus Bell',role:'Sales Manager',active:'Today',perms:{campaigns:true,mail:true,audiences:true,reports:true}},
 {n:'Alicia Gomez',role:'BDC Lead',active:'2h ago',perms:{campaigns:true,mail:true,audiences:true,reports:true}},
 {n:'Jordan Reyes',role:'Sales',active:'Today',perms:{campaigns:false,mail:false,audiences:false,reports:true}},
 {n:'Tyler Brooks',role:'BDC',active:'3h ago',perms:{campaigns:true,mail:false,audiences:true,reports:false}},
 {n:'Priya Nair',role:'Service Advisor',active:'Yesterday',perms:{campaigns:false,mail:false,audiences:false,reports:false}}
];
const PENDING=[{e:'sam.delgado@reednissan.com',role:'Sales',sent:'1 day ago'}];
function teamView(){
 const onpill=(i,p)=>`<span class="perm ${TEAM[i].perms[p]?'on':''}" onclick="togglePerm(${i},'${p}')">${TEAM[i].perms[p]?'✓ Yes':'Grant'}</span>`;
 const canCamp=TEAM.filter(m=>m.perms.campaigns).length;
 return head('Your team &amp; access',"Decide who at Reed Nissan can help run marketing &mdash; grant access in a click, and take it back just as easily.",`<button class="btn" onclick="inviteTeam()">＋ Invite a teammate</button>`)+
  `<div class="three" style="margin-bottom:16px">${kpi('Team members',TEAM.length,'<span class="mut">at this rooftop</span>')}${kpi('Can run campaigns',canCamp,'<span class="gr">you decide who</span>',null,'var(--gold)')}${kpi('Pending invites',PENDING.length,'<span class="mut">waiting to join</span>')}</div>
  <div class="card" style="margin-bottom:16px"><div class="card-head"><h3>Who can do what</h3><span class="meta">tap a chip to grant or remove</span></div>
   <table><thead><tr><th>Teammate</th><th>Role</th><th>Last active</th><th>Campaigns</th><th>Direct Mail</th><th>Audiences</th><th>Reports</th></tr></thead><tbody>
   ${TEAM.map((m,i)=>`<tr><td><span class="name">${m.n}</span></td><td class="mut2">${m.role}</td><td class="mut">${m.active}</td><td>${onpill(i,'campaigns')}</td><td>${onpill(i,'mail')}</td><td>${onpill(i,'audiences')}</td><td>${onpill(i,'reports')}</td></tr>`).join('')}
   </tbody></table></div>
  <div class="two">
   <div class="card"><div class="card-head"><h3>Pending invitations</h3></div>${PENDING.length?PENDING.map(p=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:13px 16px;border-bottom:1px solid var(--line)"><div><div class="name">${p.e}</div><div class="mut" style="font-size:10px">Invited as ${p.role} · ${p.sent}</div></div><button class="mini-btn">Resend</button></div>`).join(''):'<div class="card-body mut">No invites waiting &mdash; your whole team is already in.</div>'}</div>
   <div class="card"><div class="card-head"><h3>A quick note on access</h3></div><div class="card-body mut2" style="font-size:12px;line-height:1.65">You're in control here. Give a teammate <b>Campaigns</b> access and they can build and push marketing on their own. <b>Direct Mail</b> lets them send real mail to customers. Change any of this whenever you like &mdash; nothing's permanent, and you'll always see exactly who has what.</div></div>
  </div>`;
}
window.togglePerm=function(i,p){const L={campaigns:'run marketing campaigns',mail:'send direct mail',audiences:'build audiences',reports:'see reports'};
 TEAM[i].perms[p]=!TEAM[i].perms[p];renderMain();
 toast(`${TEAM[i].n.split(' ')[0]} can ${TEAM[i].perms[p]?'now':'no longer'} ${L[p]}.`);};
window.inviteTeam=function(){toast("Invitation sent — they'll get an email to join your team.");};

/* ============ DRAWER (client detail) ============ */
window.openClient=function(name){
 const c=CLIENTS.find(x=>x.n===name);if(!c)return;
 const inv=INVOICES.filter(i=>i.client===name);const ord=ORDERS.filter(o=>o.client===name);
 $('#drawer').innerHTML=`<div class="dw-head"><div><div style="font-size:9px;color:var(--mut)" class="up">${c.oem} · client since ${c.since}</div><div style="font-size:17px;font-weight:700;color:var(--navy-deep);margin-top:4px">${c.n}</div><div style="margin-top:6px"><span class="dot ${c.h}"></span> ${c.h==='green'?'Healthy':c.h==='gold'?'Needs review':'At risk'} ${c.dm?'<span class="pill red" style="margin-left:6px">Direct Mail</span>':''}</div></div><div class="dw-x" onclick="closeDrawer()">✕</div></div>
  <div class="dw-body">
   <div class="kv"><span class="k">Plan</span><span class="v">${c.plan}</span></div>
   <div class="kv"><span class="k">MRR</span><span class="v cy">${money(c.mrr)}</span></div>
   <div class="kv"><span class="k">Attributed YTD</span><span class="v">${money(c.rev)}</span></div>
   <div class="kv"><span class="k">Billing cycle</span><span class="v">${c.cycle}</span></div>
   <div class="kv"><span class="k">Payment method</span><span class="v">${c.method}</span></div>
   <div class="dw-sec">Invoices</div>
   ${inv.length?inv.map(i=>`<div class="kv"><span class="k">${i.id} · ${i.due}</span><span class="v ${i.status==='Overdue'?'rd':i.status==='Paid'?'gr':''}">${money(i.amt)} · ${i.status}</span></div>`).join(''):'<div class="mut" style="font-size:11px">No invoices this cycle.</div>'}
   <div class="dw-sec">Recent Orders</div>
   ${ord.length?ord.map(o=>`<div class="kv"><span class="k">${o.id} · ${o.date}</span><span class="v">${money(o.amt)} · ${o.status}</span></div>`).join(''):'<div class="mut" style="font-size:11px">No recent orders.</div>'}
   <div style="display:flex;gap:8px;margin-top:18px"><button class="btn ghost" style="flex:1;justify-content:center">Open account</button>${c.h==='red'?'<button class="btn red" style="flex:1;justify-content:center">Send reminder</button>':'<button class="btn" style="flex:1;justify-content:center">View usage</button>'}</div>
  </div>`;
 $('#overlay').classList.add('on');$('#drawer').classList.add('on');
};
function closeDrawer(){$('#overlay').classList.remove('on');$('#drawer').classList.remove('on');}
$('#overlay').onclick=closeDrawer;

/* ============ EVENT STREAM ============ */
const STREAM=[['Maria T.','viewed 2024 Pathfinder',COLORS.navy],['David R.','opened a lease email',COLORS.teal],['Jenna K.','requested a quote',COLORS.gold],['Tom W.','scanned a direct-mail QR',COLORS.red],['Carlos M.','booked a test drive',COLORS.green],['Aisha B.','started a trade-in valuation',COLORS.navy],['Greg L.','replied to an SMS',COLORS.green],['Priya S.','revisited a Pathfinder VDP',COLORS.navy],['Rosa H.','submitted a credit app',COLORS.teal]];
let streamTimer=null;
function tickStream(){const inner=document.getElementById('gmStreamInner');if(!inner)return;const d=STREAM[Math.floor(Math.random()*STREAM.length)];const secs=Math.floor(Math.random()*40)+1;const el=document.createElement('div');el.className='evt fadein';el.innerHTML=`<div class="av" style="color:${d[2]}">${initials(d[0])}</div><div class="txt"><b>${d[0]}</b> ${d[1]}</div><span class="chl" style="background:${d[2]}"></span><span class="tm">${secs}s ago</span>`;inner.prepend(el);while(inner.children.length>9)inner.removeChild(inner.lastChild);}
function manageStream(){clearInterval(streamTimer);const st=document.getElementById('gmStream');if(!st)return;const inner=document.getElementById('gmStreamInner');if(inner)inner.innerHTML='';for(let i=0;i<8;i++)tickStream();let paused=false;st.onmouseenter=()=>paused=true;st.onmouseleave=()=>paused=false;streamTimer=setInterval(()=>{if(!paused)tickStream();},1900);}

/* ============ TOAST ============ */
let toastTimer=null;
function toast(msg){const t=$('#toast');t.innerHTML=`<span class="tk">✓</span> ${msg}`;t.classList.add('on');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('on'),2200);}
window.toast=toast;

/* ============ COMMAND PALETTE ============ */
let palItems=[],palSel=0;
function buildPalItems(){
 const nav=NAV[state.role].filter(x=>!x.sep).map(x=>({g:'Navigation',ic:x.i,l:'Go to '+x.l,sc:'',act:()=>goView(x.t)}));
 const actions=[{g:'Actions',ic:'＋',l:'Create audience',act:()=>goView('builder')},{g:'Actions',ic:'➤',l:'Start a journey',act:()=>{if(VIEWS[state.role].journeys)goView('journeys');else toast('Journeys not in this tier');}},{g:'Actions',ic:'✉',l:'New direct-mail mailer',act:()=>goView('dm')},{g:'Actions',ic:'▥',l:'Pull a report',act:()=>toast('Report queued')}];
 const help=[{g:'Help',ic:'⌘',l:'View keyboard shortcuts',act:()=>toast('↑↓ navigate · ↵ select · esc close')},{g:'Help',ic:'?',l:'Contact support',act:()=>toast('Support: help@autocdp.com')}];
 return [...nav,...actions,...help];
}
function openPalette(){palItems=buildPalItems();palSel=0;$('#palInput').value='';renderPalette('');$('#palette').classList.add('on');setTimeout(()=>$('#palInput').focus(),30);}
function closePalette(){$('#palette').classList.remove('on');}
function renderPalette(q){
 const f=palItems.filter(x=>x.l.toLowerCase().includes(q.toLowerCase()));
 palSel=Math.max(0,Math.min(palSel,f.length-1));
 let html='',lastG='';
 f.forEach((x,i)=>{if(x.g!==lastG){html+=`<div class="pal-group">${x.g}</div>`;lastG=x.g;}html+=`<div class="pal-item ${i===palSel?'sel':''}" data-i="${i}"><span class="pi-ic">${x.ic}</span><span>${x.l}</span></div>`;});
 if(!f.length)html='<div class="pal-group">No matches</div>';
 $('#palList').innerHTML=html;
 $('#palList')._f=f;
 document.querySelectorAll('.pal-item').forEach(el=>el.onclick=()=>{const it=$('#palList')._f[+el.dataset.i];closePalette();it.act();});
}
$('#palInput').addEventListener('input',e=>{palSel=0;renderPalette(e.target.value);});
$('#palInput').addEventListener('keydown',e=>{
 const f=$('#palList')._f||[];
 if(e.key==='ArrowDown'){e.preventDefault();palSel=Math.min(palSel+1,f.length-1);renderPalette($('#palInput').value);}
 else if(e.key==='ArrowUp'){e.preventDefault();palSel=Math.max(palSel-1,0);renderPalette($('#palInput').value);}
 else if(e.key==='Enter'){e.preventDefault();if(f[palSel]){closePalette();f[palSel].act();}}
 else if(e.key==='Escape'){closePalette();}
});
$('#palBtn').onclick=()=>{if(state.role)openPalette();};

/* ============ GLOBAL WIRING ============ */
$('#roleSelect').addEventListener('change',e=>enter(e.target.value));
$('#cmdInput').addEventListener('keydown',e=>{
 if(e.key==='Enter'&&e.target.value.trim()){const q=e.target.value;e.target.value='';
  $('#main').insertAdjacentHTML('afterbegin',`<div class="card fadein" style="margin-bottom:16px;border-color:rgba(255,198,41,.35)"><div class="card-head"><h3 class="te">✦ Asked: ${q.replace(/</g,'')}</h3><button class="mini-btn">Save view</button></div><div class="card-body mut2" style="font-size:12px;line-height:1.6">Parsed into a live query against unified profiles. In production this returns the matching audience or chart inline — wired to the same data powering this ${ROLES[state.role].name}.</div></div>`);
  toast('Query parsed');}
});
window.goView=goView;
// global action feedback for demo buttons
$('#main').addEventListener('click',e=>{
 const b=e.target.closest('.btn,.mini-btn');
 if(!b)return;
 if(b.getAttribute('onclick')||b.id==='saveAud')return; // already handled
 const label=b.textContent.trim();
 if(label&&!b.closest('.attr'))toast(label.replace(/^[＋✉➤↓→]\s*/,'')+' ✓');
});
// keyboard: Cmd/Ctrl+K opens palette, '/' opens when not typing
document.addEventListener('keydown',e=>{
 if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(state.role)openPalette();}
 else if(e.key==='/'&&state.role&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();openPalette();}
 else if(e.key==='Escape'){closeDrawer();}
});

/* ============ WELCOME ============ */
function countUp(el){const t=+el.dataset.target,dec=+el.dataset.dec||0,pre=el.dataset.pre||'',suf=el.dataset.suf||'';let s=null;const dur=1400;
 function step(ts){if(!s)s=ts;let p=Math.min((ts-s)/dur,1);p=1-Math.pow(1-p,3);const v=t*p;
  el.textContent=pre+v.toLocaleString(undefined,{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;if(p<1)requestAnimationFrame(step);}
 requestAnimationFrame(step);}
function runWelcomeAnims(){document.querySelectorAll('#welcome .w-num').forEach(countUp);}
const W_ROT=['owners','agencies','GMs','reps'];let wRotI=0;
function startRotate(){const el=document.getElementById('wRotate');if(!el)return;
 setInterval(()=>{wRotI=(wRotI+1)%W_ROT.length;el.style.opacity='0';el.style.transform='translateY(8px)';
  setTimeout(()=>{el.textContent=W_ROT[wRotI];el.style.opacity='1';el.style.transform='none';},200);},2200);}
window.openLogin=function(){document.getElementById('loginModal').classList.add('on');setTimeout(()=>document.getElementById('wEmail').focus(),40);};
window.closeLogin=function(){document.getElementById('loginModal').classList.remove('on');};
window.loginGo=function(){closeLogin();enter('owner');};
window.loginAs=function(r){closeLogin();enter(r);};
window.showMatrix=function(){document.getElementById('welcome').classList.add('hidden');document.getElementById('matrix').classList.remove('hidden');};
window.backToWelcome=function(){document.getElementById('matrix').classList.add('hidden');document.getElementById('welcome').classList.remove('hidden');};
document.getElementById('signinBtn').onclick=()=>loginGo();
document.getElementById('wEmail').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('wPass').focus();});
document.getElementById('wPass').addEventListener('keydown',e=>{if(e.key==='Enter')loginGo();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLogin();});

/* ============ BOOT ============ */
renderMatrix();
runWelcomeAnims();
startRotate();
