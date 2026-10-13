/* Graount sample directory.
   Add actual providers and affiliate URLs issued by programs that have approved you.
   Keep url as an empty string until the approved URL is available. Never invent links. */
const graountServices = [
 {name:"Writing & Proofreading Tools",category:"writing",icon:"W",description:"Tools for drafting, grammar checks, editing and improving written content.",url:""},
 {name:"Graphic Design Platforms",category:"design",icon:"D",description:"Create logos, brand assets, social graphics, presentations and templates.",url:""},
 {name:"Video Editing Software",category:"video",icon:"V",description:"Edit videos, make short clips, add captions and prepare creator content.",url:""},
 {name:"Website Builders",category:"web",icon:"B",description:"Build responsive websites, portfolios and landing pages.",url:""},
 {name:"Web Hosting & Domains",category:"web",icon:"H",description:"Explore hosting and domain services for publishing online projects.",url:""},
 {name:"AI Assistants",category:"ai",icon:"AI",description:"AI tools for brainstorming, research and everyday productivity.",url:""},
 {name:"Email Marketing Platforms",category:"marketing",icon:"M",description:"Create newsletters and manage subscriber communication.",url:""},
 {name:"SEO & Marketing Tools",category:"marketing",icon:"S",description:"Support search visibility, campaign planning and marketing analytics.",url:""},
 {name:"Stock Photos & Templates",category:"design",icon:"P",description:"Find licensed visual assets and creative templates.",url:""},
 {name:"Social Video Tools",category:"video",icon:"▶",description:"Prepare vertical clips and streamline social video workflows.",url:""},
 {name:"Project Management Apps",category:"other",icon:"✓",description:"Organize tasks, deadlines, notes and team projects.",url:""},
 {name:"Freelance Service Platforms",category:"other",icon:"F",description:"Discover marketplaces for independent creative and technical services.",url:""}
];
const categoryNames = {writing:"Writing & content",design:"Graphic design",video:"Video editing",web:"Website development",ai:"AI tools",marketing:"Marketing & business",other:"Other services"};
document.addEventListener('DOMContentLoaded', () => {
 const grid = document.getElementById('tool-grid');
 if (!grid) return;
 const search = document.getElementById('tool-search');
 const filters = document.getElementById('filters');
 const count = document.getElementById('result-count');
 const empty = document.getElementById('empty-state');
 let active = 'all';
 function render() {
   const q = (search.value || '').trim().toLowerCase();
   const items = graountServices.filter(item => (active === 'all' || item.category === active) && (item.name + ' ' + item.description + ' ' + categoryNames[item.category]).toLowerCase().includes(q));
   grid.innerHTML = items.map(item => `<article class="tool-card"><div class="tool-card-top"><span class="tool-logo">${item.icon}</span><span class="category-tag">${categoryNames[item.category]}</span></div><h3>${item.name}</h3><p>${item.description}</p>${item.url ? `<a class="btn primary" href="${item.url}" target="_blank" rel="sponsored nofollow noopener">Visit service ↗</a>` : `<span class="btn disabled">Affiliate link not configured</span>`}</article>`).join('');
   count.textContent = `${items.length} ${items.length === 1 ? 'listing' : 'listings'}`;
   empty.hidden = items.length !== 0;
 }
 if (search) search.addEventListener('input', render);
 const form = document.getElementById('search-form');
 if (form) form.addEventListener('submit', e => { e.preventDefault(); render(); });
 if (filters) filters.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
   active = button.dataset.filter;
   filters.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === button));
   render();
 }));
 const params = new URLSearchParams(location.search);
 if (params.get('q') && search) search.value = params.get('q');
 const hash = location.hash.slice(1);
 if (['writing','design','video','web','ai','marketing','other'].includes(hash)) {
   active = hash;
   const chosen = filters.querySelector(`[data-filter="${hash}"]`);
   if (chosen) { filters.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === chosen)); }
 }
 render();
});