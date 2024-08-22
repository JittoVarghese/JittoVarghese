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
// accordions starts

// accordion ends
// Get the button

