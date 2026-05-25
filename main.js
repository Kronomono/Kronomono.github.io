// ===== CURSOR =====
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{ mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'; });
(function animRing(){ rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing); })();
document.querySelectorAll('a,button,.skill-card,.proj-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ cur.style.width='26px';cur.style.height='26px'; });
  el.addEventListener('mouseleave',()=>{ cur.style.width='14px';cur.style.height='14px'; });
});

// ===== SCROLL REVEAL =====
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.12});
document.querySelectorAll('.reveal,.exp-item').forEach(el=>obs.observe(el));


// Attach to all nav links (no-op kept for future use)
