
// Theme toggle (light/dark minimal)
const btn = document.getElementById('themeToggle');
const LIGHT = {
  '--bg':'#f7f8fb','--bg-card':'#fff','--text':'#0f1222','--muted':'#3b4153',
  '--brand':'#005bf5','--accent':'#6b4eff','--border':'#e6e8f0'
};
const DARK = {
  '--bg':'#0b0c10','--bg-card':'#12141a','--text':'#e6eaf2','--muted':'#b7c0d1',
  '--brand':'#6ee7ff','--accent':'#7c5cff','--border':'#242733'
};
let mode = localStorage.getItem('mode') || 'dark';
function apply(theme){ Object.entries(theme).forEach(([k,v])=>document.documentElement.style.setProperty(k,v)); }
apply(mode==='light'?LIGHT:DARK);
btn?.addEventListener('click', ()=>{
  mode = (mode==='light'?'dark':'light');
  apply(mode==='light'?LIGHT:DARK);
  localStorage.setItem('mode', mode);
});
