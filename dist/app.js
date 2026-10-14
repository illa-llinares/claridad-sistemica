const english={testimonialPrev:"Previous",testimonialNext:"Next",navSections:"Sections",navHome:"Home",navAbout:"About me",navProcess:"The process",navTestimonials:"Testimonials",navSession:"The session",navFaq:"FAQs",navTop:"Back to top",navBook:"Book",emailContact:"Email",contactPrompt:"Have a question?",contactLink:"Message me on WhatsApp",brandHeaderByline:'with <span class="professional-name">Illa Llinares</span>',brandByline:"with Illa Llinares",brandName:"Systemic Clarity",aboutInsight:"You don\u2019t need to bring all the answers or analyse your whole life again. I help you distinguish what needs your attention from what you have learned to carry for others. With structure, sensitivity and without judgement, we make room for you to listen to yourself, loosen your grip on control and feel more at peace with yourself.",step4Title:"Clarity",step4:"You leave with a clear inner picture and an unobstructed direction. No extra tasks or endless processes.",taxNote:"VAT included",paymentNote:"Bizum in Spain or secure card payment for international clients.",faq8Q:"How do I pay for my session?",faq8A:"When you click to book, you\u2019ll open my calendar to choose a time in your local time zone. You\u2019ll receive a confirmation email with a payment link for Bizum if you live in Spain, or for card payment through Stripe, a secure international payment gateway.",faq6Q:"How soon will I see results?",faq6A:"The intervention is immediate. We are not looking for endless analysis, but for shifts in clarity that begin to settle from the first session.",faq7Q:"Is this for my personal life or my professional life?",faq7A:"There is one system. The order you create in your personal or professional life directly affects other areas of your life.",heroPlace:"You just need to take your place.",skip:'Skip to content',headerCta:'Book Your Session',heroEyebrow:"CLARITY TO LET GO · SPACE TO LIVE.",headline:'You’re carrying<br><em>too much.</em>',heroDescription:"When everything depends on you, even pausing feels risky. Here is your space to untangle what you carry, gain perspective and take your place again.",heroCta:"Find your clarity",heroNote:'One session. One focus. A clear next step.',portraitRole:'Systemic Clarity Consultant',diagnosisEyebrow:'RECOGNISE THE PATTERN',diagnosisTitle:"You feel stuck and unable to move forward.",diagnosisIntro:"You’ve already been through many processes. You’ve spent hours analysing why you are the way you are. You know your wounds and your reasons. You have a map of your labyrinth, yet you keep walking in circles. Do you know why? Because you cannot rest while holding up everything and everyone around you.",pain1Title:"Your parents’ wellbeing:",pain1:"You try to protect them through your own sacrifice from what they left unaddressed.",pain2Title:"The stability of those around you:",pain2:"You take a place that isn’t yours to keep everything from falling apart, exhausting your own energy.",pain3Title:"Empty success:",pain3:"You meet other people’s expectations, dimming the light of your own brilliance.",switch1:'Is everything you’re carrying <em>yours to carry?</em>',switch2:'Clarity begins when each thing finds its place.',aboutEyebrow:'THE PERSON ON THE OTHER SIDE',aboutTitle:'A human perspective.<br>A rigorous foundation.',aboutLead:"I know what it feels like to believe that if you stop pushing, the world will stop.",aboutBody:"I am a woman who needed to lose herself in high efficiency to understand that wellbeing is, above all, an inner order. My education in Law and Business Administration is not my past: it is the foundation that allows me to ground the information from your system.",aboutEnd:"My management experience and my training in family constellations come together in one perspective: analytical enough to make sense of what is happening, and intuitive enough to recognise the relationships and pressures that may be influencing you without your awareness. Together, we bring into view what is difficult to see when you are caught up in it, watching over everything and feeling that you can never keep up.",credential1:"Analytical rigour. A systemic perspective. Space for you.",methodEyebrow:'THE METHOD',methodTitle:'Less circling. More perspective.',step1Title:"Identification",step1:"You choose the situation weighing on you most today. One concrete issue, without having to explain your whole life.",step2Title:"Observation",step2:'We look at the system: who holds which role, what expectations weigh on you and which responsibilities you are taking on.',step3Title:"Order",step3:"We reorder your network of relationships. We return the weight to those it belongs to and free up your space so you can take your place again.",testimonialsEyebrow:"TESTIMONIALS",testimonialsTitle:'A space for trust.',sessionsEyebrow:'YOUR SPACE FOR CLARITY',sessionsTitle:'One specific issue.<br>One focused session.',sessionsIntro:"A space to untangle what you need to observe today.",firstTitle:"Systemic Clarity Session",firstDescription:"A session to explore the origin of a pattern you have been repeating for years. We identify what keeps it in place and work with its underlying cause to unblock it, step out of the cycle and make room for a different way of living.",firstDuration:"90 minutes · Individual online session",firstIncludes:"Define the focus. Read the system.<br>Gain clarity.",firstCta:"Book your Session",sessionNote:"Sessions in Spanish, English or Catalan.",faqEyebrow:'BEFORE YOU TAKE THE STEP',faqTitle:"No added <br>uncertainty.",faq1Q:'Do I need to know exactly what is wrong?',faq1A:'No. You can bring a situation, a pending decision or the feeling of carrying too much. Defining the focus is part of the session.',faq2Q:'Is this therapy?',faq2A:"This is a consulting space to observe and untangle the dynamics shaping your situation. We work with relationships, roles and responsibilities to gain clarity. It is not clinical treatment and does not replace psychological or medical care.",faq3Q:'Do I have to commit to several sessions?',faq3A:"There is no commitment to continue: you decide what you want to work on and when. You can book one session for a specific issue, several sessions for different topics or, if you wish, explore the same issue more deeply over several sessions. The choice is always yours, at your own pace.",faq4Q:'Do I need experience with systemic work?',faq4A:"You don’t need to know any technique. We start from your reality and use clear language to explore roles, relationships and responsibilities. I’ll be with you throughout the session and guide you through every step.",faq5Q:'Which languages are available?',faq5A:"Spanish, English or Catalan. Choose the language in which you can best express your situation.",closingTitle:"Zero Friction.",closingDescription:"Your time is your most valuable resource. If it’s time to hand back what isn’t yours, let’s talk.",closingCta:"Schedule my Clarity Session",footerNote:'Clarity to let go. Space to live.'};
const nodes=[...document.querySelectorAll('[data-t]')];const spanish=Object.fromEntries(nodes.map(n=>[n.dataset.t,n.innerHTML]));let language='es';
// Set these to the owner's verified booking links when provided.
const bookingLinks={first:'https://calendar.app.google/Pvto4jU3sd32JiCr5'};
function setLanguage(lang){language=lang;document.documentElement.lang=lang;document.title=(lang==='en'?'Systemic Clarity':'Claridad Sistémica')+' — Illa Llinares';document.querySelector('header .brand').setAttribute('aria-label',(lang==='en'?'Systemic Clarity with Illa Llinares':'Claridad Sistémica con Illa Llinares'));nodes.forEach(n=>n.innerHTML=(lang==='en'?english:spanish)[n.dataset.t]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelector('.portrait img').alt=lang==='en'?'Portrait of Illa Llinares':'Retrato de Illa Llinares';document.querySelector('.booking-notice').hidden=true;document.querySelector('meta[name="description"]').content=lang==='en'?'Systemic clarity for women who lead. A focused session to untangle responsibilities and regain perspective. Illa Llinares.':'Claridad sistémica para mujeres que lideran. Una sesión enfocada para ordenar responsabilidades y recuperar el foco. Illa Llinares.';try{localStorage.setItem('systemic-clarity-language',lang)}catch{}}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
document.querySelectorAll('.booking').forEach(b=>b.addEventListener('click',()=>{const url=bookingLinks[b.dataset.session];if(url){window.location.assign(url);return}const notice=document.querySelector('.booking-notice');notice.textContent=language==='en'?'The booking calendar is not connected yet. No booking or payment has been made.':'La agenda de reservas todavía no está conectada. No se ha realizado ninguna reserva ni ningún pago.';notice.hidden=false;notice.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});}));
try{if(localStorage.getItem('systemic-clarity-language')==='en')setLanguage('en')}catch{}
document.querySelector('#year').textContent=new Date().getFullYear();

const emailDialog=document.querySelector('#email-dialog');
const emailAddress=document.querySelector('#email-address');
const emailStatus=document.querySelector('#email-status');
document.querySelectorAll('[data-email-contact]').forEach(link=>link.addEventListener('click',event=>{
 if(typeof emailDialog.showModal!=='function')return;
 event.preventDefault();
 const en=language==='en';
 document.querySelector('#email-title').textContent=en?'Get in touch':'Escríbeme';
 document.querySelector('#email-help').textContent=en?'Copy my address or open your email app.':'Puedes copiar mi dirección o abrir tu aplicación de correo.';
 document.querySelector('#email-copy').textContent=en?'Copy address':'Copiar dirección';
 document.querySelector('#email-open').textContent=en?'Open email app':'Abrir correo';
 emailStatus.textContent='';emailDialog.showModal();
}));
document.querySelector('#email-copy').addEventListener('click',async()=>{
 try{await navigator.clipboard.writeText(emailAddress.value);emailStatus.textContent=language==='en'?'Address copied.':'Dirección copiada.';}
 catch{emailAddress.focus();emailAddress.select();emailStatus.textContent=language==='en'?'Select and copy this address.':'Selecciona y copia esta dirección.';}
});

const sectionMenu=document.querySelector('#section-menu');
document.querySelectorAll('.mobile-navigation a').forEach(link=>link.addEventListener('click',()=>sectionMenu.open=false));
document.addEventListener('keydown',event=>{if(event.key==='Escape')sectionMenu.open=false;});
document.addEventListener('click',event=>{if(!event.target.closest('.mobile-navigation'))sectionMenu.open=false;});

const testimonialTrack=document.querySelector('#testimonial-track');
const testimonialSlides=[...testimonialTrack.querySelectorAll('.testimonial')];
const testimonialPages=[...document.querySelectorAll('[data-slide]')];
const testimonialPrevious=document.querySelector('#testimonial-prev');
const testimonialNext=document.querySelector('#testimonial-next');
let testimonialIndex=0;
function updateTestimonialCarousel(){
 const start=testimonialSlides[0].offsetLeft;
 testimonialIndex=testimonialSlides.reduce((best,slide,i)=>Math.abs(slide.offsetLeft-start-testimonialTrack.scrollLeft)<Math.abs(testimonialSlides[best].offsetLeft-start-testimonialTrack.scrollLeft)?i:best,0);
 testimonialPrevious.disabled=false;
 testimonialNext.disabled=false;
 testimonialPages.forEach((button,i)=>{button.setAttribute('aria-current',String(i===testimonialIndex));button.setAttribute('aria-label',(language==='en'?'Show testimonial ':'Ver testimonio ')+(i+1));});
 document.querySelector('.testimonial-carousel').setAttribute('aria-roledescription',language==='en'?'carousel':'carrusel');
 document.querySelector('#testimonial-status').textContent=(language==='en'?'Testimonial ':'Testimonio ')+(testimonialIndex+1)+(language==='en'?' of ':' de ')+testimonialSlides.length;
}
function goToTestimonial(index){
 const next=Math.max(0,Math.min(testimonialSlides.length-1,index));
 testimonialTrack.scrollTo({left:testimonialSlides[next].offsetLeft-testimonialSlides[0].offsetLeft,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
testimonialPrevious.addEventListener('click',()=>goToTestimonial((testimonialIndex-1+testimonialSlides.length)%testimonialSlides.length));
testimonialNext.addEventListener('click',()=>goToTestimonial((testimonialIndex+1)%testimonialSlides.length));
testimonialPages.forEach((button,i)=>button.addEventListener('click',()=>goToTestimonial(i)));
testimonialTrack.addEventListener('keydown',event=>{if(event.target!==testimonialTrack)return;const destinations={ArrowLeft:testimonialIndex-1,ArrowRight:testimonialIndex+1,Home:0,End:testimonialSlides.length-1};if(event.key in destinations){event.preventDefault();goToTestimonial(destinations[event.key]);}});
let testimonialScrollTimer;
testimonialTrack.addEventListener('scroll',()=>{clearTimeout(testimonialScrollTimer);testimonialScrollTimer=setTimeout(updateTestimonialCarousel,150);},{passive:true});
window.addEventListener('resize',updateTestimonialCarousel);
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',updateTestimonialCarousel));
document.querySelector('.carousel-controls').hidden=false;
updateTestimonialCarousel();

const testimonialRegion=document.querySelector('.testimonial-carousel');
const testimonialMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let testimonialVisible=false;
let testimonialHovered=false;
let testimonialInteracting=false;
let testimonialAutoTimer;
let testimonialInteractionTimer;
function scheduleTestimonialAdvance(){
 clearTimeout(testimonialAutoTimer);
 const running=!testimonialMotion.matches&&!testimonialHovered&&!testimonialInteracting&&testimonialVisible&&!document.hidden&&!testimonialRegion.contains(document.activeElement);
 document.querySelector('#testimonial-status').setAttribute('aria-live',running?'off':'polite');
 testimonialRegion.classList.remove('is-playing');
 void testimonialRegion.offsetWidth;
 if(running){
  testimonialRegion.classList.add('is-playing');
  testimonialAutoTimer=setTimeout(()=>{updateTestimonialCarousel();goToTestimonial((testimonialIndex+1)%testimonialSlides.length);scheduleTestimonialAdvance();},9000);
 }
}
function holdTestimonialAdvance(){
 testimonialInteracting=true;clearTimeout(testimonialInteractionTimer);scheduleTestimonialAdvance();
 testimonialInteractionTimer=setTimeout(()=>{testimonialInteracting=false;scheduleTestimonialAdvance();},12000);
}
testimonialRegion.addEventListener('mouseenter',()=>{testimonialHovered=true;scheduleTestimonialAdvance();});
testimonialRegion.addEventListener('mouseleave',()=>{testimonialHovered=false;scheduleTestimonialAdvance();});
testimonialRegion.addEventListener('focusin',scheduleTestimonialAdvance);
testimonialRegion.addEventListener('focusout',()=>setTimeout(scheduleTestimonialAdvance,0));
testimonialTrack.addEventListener('pointerdown',holdTestimonialAdvance,{passive:true});
[testimonialPrevious,testimonialNext,...testimonialPages].forEach(button=>button.addEventListener('click',holdTestimonialAdvance));
document.addEventListener('visibilitychange',scheduleTestimonialAdvance);
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',scheduleTestimonialAdvance));
testimonialMotion.addEventListener('change',scheduleTestimonialAdvance);
if('IntersectionObserver' in window){new IntersectionObserver(entries=>{testimonialVisible=entries[0].isIntersecting;scheduleTestimonialAdvance();},{threshold:.2}).observe(testimonialRegion);}else{testimonialVisible=true;}
scheduleTestimonialAdvance();
