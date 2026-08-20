function toggleMenu(){document.getElementById('menu').classList.toggle('active')}
const current=window.location.pathname.split("/").pop();document.querySelectorAll('nav a').forEach(link=>{if(link.getAttribute('href')===current)link.classList.add('active')})
function sendMsg(e){e.preventDefault();alert('Thank you! Your message has been sent.');e.target.reset()}