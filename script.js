// Animación de portada: la barra aparece al terminar la foto, como en la referencia.
(()=>{
const clamp=(value,min=0,max=1)=>Math.min(max,Math.max(min,value));
const section=document.querySelector(".scrolly-hero");
const header=document.getElementById("site-header");
if(!section||!header)return;
let frame=0;
let headerVisible=false;
const bienvenida=document.querySelector('.welcome-after-photo');
const logoBienvenida=bienvenida.querySelector('img');
const logoBanner=header.querySelector('.brand__logo img');
const update=()=>{
  frame=0;
  const rect=section.getBoundingClientRect();
  const distance=Math.max(1,section.offsetHeight-window.innerHeight);
  const progress=clamp(-rect.top/distance);
  const intro=clamp(1-progress/.27);

  const photo=clamp((.98-progress)/.12);
  const welcomeRect=bienvenida.getBoundingClientRect();
  // El logo se desvanece donde está; nunca se desplaza por encima del texto.
  const fade=clamp((logoBienvenida.getBoundingClientRect().top-65)/100);
  logoBienvenida.style.opacity=String(fade);
  logoBienvenida.style.transform='scale('+(.96+.04*fade)+')';
  headerVisible=welcomeRect.bottom<=110;
  header.classList.toggle("is-visible",headerVisible);
  section.style.setProperty("--intro-opacity",String(intro));
  section.style.setProperty("--intro-y",progress*-20+"px");
  section.style.setProperty("--wave-one-y",108-progress*142+"%");
  section.style.setProperty("--wave-two-y",132-progress*168+"%");
  section.style.setProperty("--wave-three-y",154-progress*176+"%");
  section.style.setProperty("--photo-opacity",String(photo));
};
const requestUpdate=()=>{if(!frame)frame=requestAnimationFrame(update)};
update();
addEventListener("scroll",requestUpdate,{passive:true});
addEventListener("resize",requestUpdate);
})();