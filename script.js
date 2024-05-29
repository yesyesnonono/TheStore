document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("preloader").style.opacity = "0"; // Set opacity to 0
    }, 1600); // 1000ms = 1 second delay
  });

function run(hreff){
  window.location.href = hreff;
}


document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('.headersign').classList.toggle('active')
    
    document.querySelector('nav').classList.toggle('animate');
    document.querySelector('nav').classList.toggle('reanimate');
    
    
});

let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function(element) {
    element.addEventListener('click', function(event){
        event.preventDefault()
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    })
})

function home(n){
  window.location.href = n;
}

const numberInput = document.getElementById('numberInput');

        numberInput.addEventListener('input', function(event) {
            let value = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
            value = value.replace(/(\d)(?=(\d{3})+$)/g, '$1 '); // Add space every 3 digits

            event.target.value = value;
        });



