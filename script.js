// Interactions: theme toggle, mobile nav, smooth scroll, reveal on scroll, contact form (mailto)
document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // theme toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('dark');
  });

  // mobile nav
  const mobileBtn = document.getElementById('mobileBtn');
  mobileBtn?.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      const t = document.querySelector(this.getAttribute('href'));
      if (t) t.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal, .animated-card, .skill-card, .info-card, .project');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        entry.target.classList.remove('reveal');
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r => { r.classList.add('reveal'); obs.observe(r); });

  // contact form -> mailto
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'Guest';
    const email = data.get('email') || 'no-reply@example.com';
    const message = data.get('message') || '';
    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:ayushi.singh0618@gmail.com?subject=' + subject + '&body=' + body;
    status.textContent = 'Opening your email client...';
    setTimeout(()=> status.textContent = 'If nothing opened, copy email: ayushi.singh0618@gmail.com', 2500);
  });
});