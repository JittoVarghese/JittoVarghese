function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  
  document.getElementsByClassName('clock')[0].textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// time section ends
// Navigations starts

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  document.querySelectorAll('.overlay a').forEach(link => {
    link.addEventListener('click', closeNav);
});
// Navigations ends

// Text animation starts

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
     });

    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
// Text animation ends

 var form = document.getElementById('contact-form').addEventListener('submit',function(event){
  event.preventDefault();
  var data = new FormData(event.target);
  fetch("https://formspree.io/f/moqgykwn",{
    method:'POST',
    body:data,
  }).then(response =>{
    if(response.ok){
      alert('Success');
    } else{
      alert('Error');
    }
  });
  document.getElementById('contact-form').reset();
});



