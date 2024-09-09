
function updateClock() {
  const now = new Date();

  // Get the UTC time and convert it to IST (UTC + 5:30)
  const utcOffset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
  const istTime = new Date(now.getTime() + utcOffset + (5.5 * 60 * 60 * 1000)); // Add 5:30 hours

  let hours = istTime.getHours();
  const minutes = String(istTime.getMinutes()).padStart(2, '0');
  const seconds = String(istTime.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  
  document.getElementsByClassName('clock')[0].textContent = timeString;
}

// Update the clock every second to reflect real-time changes
setInterval(updateClock, 1000);

// Initialize the clock
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


// year change
function updateYear() {
  const now = new Date();
  const year = now.getFullYear(); // Get the current year
  
  document.getElementsByClassName('year')[0].textContent = year;
}

// Update the year on page load
updateYear();
